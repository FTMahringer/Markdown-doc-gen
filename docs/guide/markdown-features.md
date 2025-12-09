---
title: Markdown Features
description: Supported Markdown features and syntax
order: 2
---

# Markdown Features

This documentation generator supports GitHub Flavored Markdown (GFM) with additional features.

## Headings

```markdown
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading
```

## Text Formatting

**Bold text** using `**bold**` or `__bold__`

*Italic text* using `*italic*` or `_italic_`

***Bold and italic*** using `***text***`

~~Strikethrough~~ using `~~text~~`

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

### Ordered Lists

1. First item
2. Second item
3. Third item
   1. Nested item 3.1
   2. Nested item 3.2

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

## Links

[Link text](https://example.com)

[Link with title](https://example.com "Link Title")

## Code

### Inline Code

Use backticks for `inline code` within text.

### Code Blocks

```javascript
// JavaScript example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

```python
# Python example
def greet(name):
    print(f"Hello, {name}!")

greet("World")
```

```typescript
// TypeScript example
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 30
};
```

## Blockquotes

> This is a blockquote.
> It can span multiple lines.
>
> > Nested blockquotes are also supported.

## Tables

| Feature | Supported | Notes |
|---------|-----------|-------|
| Markdown | ✅ | Full GFM support |
| Code highlighting | ✅ | Multiple languages |
| Dark mode | ✅ | Auto-detect |
| Search | ⏳ | Coming soon |

## Horizontal Rules

Use three or more dashes, asterisks, or underscores:

---

## Images

![Alt text](/next.svg "Image title")

## Autolinks

Headings automatically get anchor links. You can link to sections:

[Jump to Headings](#headings)

## HTML

You can also use <strong>inline HTML</strong> when needed.

<div style="padding: 1rem; background: #f0f0f0; border-radius: 0.5rem;">
  Custom HTML blocks are supported too!
</div>

