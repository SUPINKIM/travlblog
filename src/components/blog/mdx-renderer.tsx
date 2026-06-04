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
          // 블록 코드에만 기본 언어를 적용한다. 문자열로 주면 인라인 코드까지
          // 하이라이팅 대상이 되어 `data-language`가 붙고, 인라인 pill 스타일 대신
          // 블록(display:grid) 스타일을 타면서 한 줄을 통째로 차지하게 된다.
          defaultLang: { block: "plaintext" },
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
