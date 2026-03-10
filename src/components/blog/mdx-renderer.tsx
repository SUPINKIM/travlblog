import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { useMDXComponents } from "./mdx-components";

interface MdxRendererProps {
  source: string;
}

export async function MdxRenderer({ source }: MdxRendererProps) {
  const components = useMDXComponents();

  const compiled = await compile(source, {
    outputFormat: "function-body",
    format: "md",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
          keepBackground: true,
          defaultLang: "plaintext",
        },
      ],
    ],
  });

  const { default: MDXContent } = await run(String(compiled), {
    ...(runtime as any),
    baseUrl: import.meta.url,
  });

  return <MDXContent components={components} />;
}
