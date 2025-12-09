import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');

export interface DocMetadata {
  title: string;
  description?: string;
  order?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface DocFile {
  slug: string[];
  metadata: DocMetadata;
  content: string;
}

export interface NavItem {
  title: string;
  path: string;
  order: number;
  children?: NavItem[];
}

/**
 * Get all markdown files recursively from a directory
 */
function getMarkdownFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath, baseDir));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(path.relative(baseDir, fullPath));
    }
  }

  return files;
}

/**
 * Get slug from file path
 */
function getSlugFromPath(filePath: string): string[] {
  const withoutExtension = filePath.replace(/\.md$/, '');
  const parts = withoutExtension.split(path.sep);
  
  // Convert index to empty string for clean URLs
  return parts.map(part => part === 'index' ? '' : part).filter(Boolean);
}

/**
 * Get all documentation files
 */
export function getAllDocs(): DocFile[] {
  const files = getMarkdownFiles(docsDirectory);
  
  return files.map(file => {
    const fullPath = path.join(docsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: getSlugFromPath(file),
      metadata: {
        title: data.title || 'Untitled',
        description: data.description,
        order: data.order || 999,
        ...data
      },
      content
    };
  });
}

/**
 * Get a single document by slug
 */
export function getDocBySlug(slug: string[]): DocFile | null {
  const allDocs = getAllDocs();
  
  // Try exact match first
  let doc = allDocs.find(d => 
    d.slug.length === slug.length && 
    d.slug.every((s, i) => s === slug[i])
  );
  
  // If not found and slug is empty, try to find index
  if (!doc && slug.length === 0) {
    doc = allDocs.find(d => d.slug.length === 0);
  }
  
  // If still not found and slug has values, try to find index in that directory
  if (!doc && slug.length > 0) {
    doc = allDocs.find(d => 
      d.slug.length === slug.length + 1 &&
      d.slug[d.slug.length - 1] === '' &&
      d.slug.slice(0, -1).every((s, i) => s === slug[i])
    );
  }
  
  return doc || null;
}

/**
 * Build navigation tree from all documents
 */
export function getNavigation(): NavItem[] {
  const allDocs = getAllDocs();
  const navMap: Map<string, NavItem> = new Map();
  
  // First pass: create all nav items
  for (const doc of allDocs) {
    const pathParts = doc.slug.length > 0 ? doc.slug : [''];
    const fullPath = '/' + (doc.slug.length > 0 ? pathParts.join('/') : '');
    
    navMap.set(fullPath, {
      title: doc.metadata.title,
      path: fullPath,
      order: doc.metadata.order || 999,
      children: []
    });
  }
  
  // Second pass: build tree structure
  const rootItems: NavItem[] = [];
  
  for (const [path, item] of navMap.entries()) {
    if (path === '/' || !path.includes('/', 1)) {
      rootItems.push(item);
    } else {
      const parentPath = path.substring(0, path.lastIndexOf('/')) || '/';
      const parent = navMap.get(parentPath);
      if (parent) {
        if (!parent.children) parent.children = [];
        parent.children.push(item);
      }
    }
  }
  
  // Sort all levels by order
  const sortItems = (items: NavItem[]) => {
    items.sort((a, b) => a.order - b.order);
    items.forEach(item => {
      if (item.children && item.children.length > 0) {
        sortItems(item.children);
      }
    });
  };
  
  sortItems(rootItems);
  
  return rootItems;
}

/**
 * Get all possible paths for static generation
 */
export function getAllDocPaths(): { slug: string[] }[] {
  const allDocs = getAllDocs();
  return allDocs.map(doc => ({ slug: doc.slug }));
}
