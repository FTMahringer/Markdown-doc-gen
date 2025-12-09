---
title: Customization
description: How to customize your documentation site
order: 3
---

# Customization

Learn how to customize the look and feel of your documentation site.

## Styling

The documentation generator uses Tailwind CSS for styling. You can customize the appearance by:

### 1. Modifying Global Styles

Edit `app/globals.css` to change global styles:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

### 2. Customizing Components

You can modify the components in the `components/` directory:

- **Sidebar.tsx** - Navigation sidebar
- **MarkdownRenderer.tsx** - Markdown rendering and styling

### 3. Tailwind Configuration

Extend the Tailwind configuration in `tailwind.config.js` to add custom colors, fonts, or utilities.

## Layout

### Changing the Sidebar Width

Edit `components/Sidebar.tsx` to change the sidebar width:

```tsx
<aside className="w-64 flex-shrink-0 ...">
  {/* Change w-64 to your preferred width */}
</aside>
```

### Modifying Content Width

Edit `app/docs/[[...slug]]/page.tsx` to change the content width:

```tsx
<article className="max-w-4xl mx-auto ...">
  {/* Change max-w-4xl to your preferred width */}
</article>
```

## Branding

### Site Title

Update the site title in `components/Sidebar.tsx`:

```tsx
<Link href="/" className="text-xl font-bold">
  Your Documentation Site
</Link>
```

### Metadata

Update metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
};
```

## Code Highlighting Theme

Change the syntax highlighting theme in `components/MarkdownRenderer.tsx`:

```tsx
// Replace with your preferred highlight.js theme
import 'highlight.js/styles/github-dark.css';
```

Available themes include:
- `github-dark.css`
- `github.css`
- `monokai.css`
- `nord.css`
- `atom-one-dark.css`
- And many more...

## Typography

The markdown content uses the Tailwind Typography plugin with custom styling. You can modify the prose classes in `components/MarkdownRenderer.tsx`:

```tsx
<div className="prose prose-slate dark:prose-invert max-w-none
  prose-headings:font-semibold
  prose-h1:text-4xl
  // ... add your custom classes
">
```

## Advanced Customization

For more advanced customization:

1. **Add new components** - Create reusable components in `components/`
2. **Extend markdown parsing** - Add remark/rehype plugins in `components/MarkdownRenderer.tsx`
3. **Custom layouts** - Create different layouts for different doc sections
4. **Add features** - Implement search, table of contents, etc.

