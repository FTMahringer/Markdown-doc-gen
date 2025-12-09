import { notFound } from 'next/navigation';
import { getDocBySlug, getAllDocPaths, getNavigation } from '@/lib/markdown';
import { Sidebar } from '@/components/Sidebar';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export async function generateStaticParams() {
  const paths = getAllDocPaths();
  return paths.map((path) => ({
    slug: path.slug.length > 0 ? path.slug : undefined,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug = [] } = await params;
  const doc = getDocBySlug(slug);
  
  if (!doc) {
    return {
      title: 'Not Found',
    };
  }
  
  return {
    title: doc.metadata.title,
    description: doc.metadata.description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug = [] } = await params;
  const doc = getDocBySlug(slug);
  
  if (!doc) {
    notFound();
  }
  
  const navigation = getNavigation();
  
  return (
    <div className="flex min-h-screen">
      <Sidebar navigation={navigation} />
      <main className="flex-1 overflow-y-auto">
        <article className="max-w-4xl mx-auto px-8 py-12">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {doc.metadata.title}
            </h1>
            {doc.metadata.description && (
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {doc.metadata.description}
              </p>
            )}
          </header>
          <MarkdownRenderer content={doc.content} />
        </article>
      </main>
    </div>
  );
}
