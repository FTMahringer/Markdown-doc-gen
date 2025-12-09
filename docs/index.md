---
title: Getting Started
description: Welcome to the Markdown Documentation Generator
order: 1
---

# Getting Started

Welcome to the **Markdown Documentation Generator** built with Next.js 16! This is a modern, fast, and developer-friendly documentation system similar to MkDocs but with the power of React and Next.js.

## Features

- 📝 **Markdown Support**: Write your documentation in Markdown with GitHub Flavored Markdown (GFM) support
- 🎨 **Syntax Highlighting**: Beautiful code syntax highlighting out of the box
- 🌙 **Dark Mode**: Automatic dark mode support based on system preferences
- 🚀 **Fast Performance**: Built on Next.js 16 with static site generation
- 📱 **Responsive Design**: Works perfectly on all devices
- 🔍 **SEO Friendly**: Optimized for search engines with proper metadata
- 🎯 **Type Safe**: Written in TypeScript for better developer experience

## Quick Start

### 1. Create Documentation

Create markdown files in the `docs/` directory:

\`\`\`bash
docs/
  index.md          # Home page
  getting-started.md # Getting started guide
  guide/
    installation.md  # Installation guide
    usage.md        # Usage guide
\`\`\`

### 2. Add Frontmatter

Each markdown file should have frontmatter metadata:

\`\`\`markdown
---
title: Your Page Title
description: A brief description
order: 1
---

# Your Content Here
\`\`\`

### 3. Build and Deploy

Build your documentation site:

\`\`\`bash
npm run build
npm start
\`\`\`

## Next Steps

- Learn how to [organize your documentation](/docs/guide/structure)
- Explore [markdown features](/docs/guide/markdown-features)
- Customize the [appearance](/docs/guide/customization)
