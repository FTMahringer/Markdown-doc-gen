---
title: Document Structure
description: How to organize your documentation
order: 1
---

# Document Structure

Learn how to organize your documentation files effectively.

## Directory Layout

The documentation follows a simple file-based routing system:

```
docs/
├── index.md                 # Home page (/)
├── getting-started.md       # /docs/getting-started
├── guide/
│   ├── structure.md        # /docs/guide/structure
│   ├── markdown-features.md # /docs/guide/markdown-features
│   └── customization.md    # /docs/guide/customization
└── api/
    ├── configuration.md    # /docs/api/configuration
    └── reference.md        # /docs/api/reference
```

## Frontmatter

Each markdown file must include frontmatter at the top:

```yaml
---
title: Page Title          # Required: Displayed in navigation and page header
description: Description   # Optional: Meta description for SEO
order: 1                   # Optional: Sort order in navigation (default: 999)
---
```

## Navigation

The navigation sidebar is automatically generated from your file structure:

- Files are ordered by the `order` field in frontmatter
- Nested directories create nested navigation items
- The file name becomes the URL slug
- `index.md` files represent the parent directory

## Best Practices

1. **Use clear, descriptive file names** - They become URL slugs
2. **Set appropriate order values** - Control navigation sequence
3. **Group related content** - Use directories for organization
4. **Start with index.md** - Provide an overview in each directory
5. **Keep URLs clean** - Use lowercase and hyphens for file names

## Example

```
docs/
├── index.md              (order: 1)  → /docs/
├── introduction.md       (order: 2)  → /docs/introduction
├── tutorials/
│   ├── index.md         (order: 10) → /docs/tutorials/
│   ├── basic.md         (order: 1)  → /docs/tutorials/basic
│   └── advanced.md      (order: 2)  → /docs/tutorials/advanced
└── reference/
    └── api.md           (order: 20) → /docs/reference/api
```

