'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'highlight.js/styles/github-dark.css';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none
      prose-headings:font-semibold
      prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
      prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800
      prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
      prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-4
      prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-7
      prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
      prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/10 prose-blockquote:py-2 prose-blockquote:px-4
      prose-ul:list-disc prose-ol:list-decimal
      prose-li:text-gray-700 dark:prose-li:text-gray-300
      prose-table:border-collapse prose-th:bg-gray-100 dark:prose-th:bg-gray-800 prose-th:p-2 prose-td:p-2 prose-td:border prose-td:border-gray-200 dark:prose-td:border-gray-700
      prose-img:rounded-lg prose-img:shadow-lg"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }]
        ]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
