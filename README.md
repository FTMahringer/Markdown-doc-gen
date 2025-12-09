# Markdown Documentation Generator

A modern documentation generator from Markdown files built with **Next.js 16**. Similar to MkDocs, but with a more modern and future-proof approach using React and the Next.js App Router.

## Features

- 📝 **Markdown Support** - Write documentation in Markdown with GitHub Flavored Markdown (GFM)
- 🎨 **Syntax Highlighting** - Beautiful code syntax highlighting with highlight.js
- 🌙 **Dark Mode** - Automatic dark mode support based on system preferences
- 🚀 **Fast Performance** - Built on Next.js 16 with static site generation
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔍 **SEO Friendly** - Optimized for search engines with proper metadata
- 🎯 **Type Safe** - Written in TypeScript for better developer experience
- 🧭 **Auto Navigation** - Automatic sidebar navigation from file structure
- 🔗 **Auto Linking** - Automatic heading anchor links

## Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/FTMahringer/Markdown-doc-gen.git
cd Markdown-doc-gen
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Creating Documentation

1. Create markdown files in the `docs/` directory:

```
docs/
  index.md          # Home page
  guide/
    getting-started.md
    advanced.md
```

2. Add frontmatter to your markdown files:

```markdown
---
title: Getting Started
description: A guide to getting started
order: 1
---

# Your content here
```

3. The navigation will be automatically generated based on your file structure!

## Project Structure

```
.
├── app/
│   ├── docs/[[...slug]]/   # Dynamic documentation routes
│   │   └── page.tsx
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (redirects to /docs)
│   └── globals.css         # Global styles
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar
│   └── MarkdownRenderer.tsx # Markdown rendering component
├── docs/                   # Your documentation files (Markdown)
│   ├── index.md
│   └── guide/
│       ├── structure.md
│       ├── markdown-features.md
│       └── customization.md
├── lib/
│   └── markdown.ts         # Markdown parsing utilities
└── public/                 # Static assets
```

## Building for Production

```bash
npm run build
npm start
```

The documentation will be statically generated at build time for optimal performance.

## Customization

- **Styling**: Edit `app/globals.css` and Tailwind classes
- **Components**: Modify components in `components/` directory
- **Layout**: Adjust layouts in `app/` directory
- **Theme**: Change syntax highlighting theme in `components/MarkdownRenderer.tsx`

See the documentation at `/docs/guide/customization` for more details.

## Documentation Structure

Files in the `docs/` directory are automatically converted to routes:

- `docs/index.md` → `/docs/`
- `docs/getting-started.md` → `/docs/getting-started`
- `docs/guide/installation.md` → `/docs/guide/installation`

### Frontmatter Options

```yaml
---
title: Page Title          # Required: Page title
description: Description   # Optional: Meta description
order: 1                   # Optional: Sort order in navigation
---
```

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Markdown**: react-markdown, remark-gfm
- **Syntax Highlighting**: rehype-highlight, highlight.js
- **Metadata**: gray-matter

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

