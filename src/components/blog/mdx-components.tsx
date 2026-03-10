import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "error";
}) {
  const styles = {
    info: "border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan",
    warning: "border-brand-amber/30 bg-brand-amber/5 text-brand-amber",
    error: "border-brand-rose/30 bg-brand-rose/5 text-brand-rose",
  };

  const icons = {
    info: "💡",
    warning: "⚠️",
    error: "🚨",
  };

  return (
    <div
      className={`my-4 rounded-lg border p-4 text-sm leading-relaxed ${styles[type]}`}
    >
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
}

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children, id }) => (
      <h1
        id={id}
        className="text-3xl font-bold mt-10 mb-4 text-foreground scroll-mt-20"
      >
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="text-2xl font-bold mt-8 mb-3 text-foreground scroll-mt-20 border-b border-border pb-2"
      >
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="text-xl font-semibold mt-6 mb-2 text-foreground scroll-mt-20"
      >
        {children}
      </h3>
    ),
    h4: ({ children, id }) => (
      <h4
        id={id}
        className="text-lg font-semibold mt-4 mb-2 text-foreground scroll-mt-20"
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground leading-7 mb-4">{children}</p>
    ),
    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-cyan hover:text-brand-cyan/80 underline underline-offset-4 transition-colors"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href || "#"}
          className="text-brand-cyan hover:text-brand-cyan/80 underline underline-offset-4 transition-colors"
        >
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground marker:text-brand-cyan/50">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-muted-foreground marker:text-brand-cyan/50">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7 pl-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-violet/50 pl-4 my-4 italic text-muted-foreground bg-surface-2 py-3 pr-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    code: ({ children, className, ...props }) => {
      // inline code — rehype-pretty-code does NOT wrap inline code in <pre>,
      // so if there's no data-language attr, it's inline code
      const isInline = !("data-language" in (props as Record<string, unknown>));
      if (isInline && !className) {
        return (
          <code className="bg-surface-3 text-brand-cyan px-1.5 py-0.5 rounded text-[0.875em] font-mono">
            {children}
          </code>
        );
      }
      // code block — styled by rehype-pretty-code, pass through with className
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <pre
        className="overflow-x-auto rounded-lg border border-border p-4 my-4 text-sm leading-6"
        {...props}
      >
        {children}
      </pre>
    ),
    img: ({ src, alt, width, height }) => {
      if (!src) return null;
      // External images (velog CDN etc.) - use regular img tag
      if (src.startsWith("http")) {
        return (
          <span className="block my-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt || ""}
              className="rounded-lg mx-auto max-w-full h-auto"
              loading="lazy"
            />
          </span>
        );
      }
      return (
        <span className="block my-4">
          <Image
            src={src}
            alt={alt || ""}
            width={Number(width) || 800}
            height={Number(height) || 400}
            className="rounded-lg mx-auto"
          />
        </span>
      );
    },
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border-collapse border border-border text-sm">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border bg-surface-2 px-4 py-2 text-left font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2 text-muted-foreground">
        {children}
      </td>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-foreground/80">{children}</em>,
    del: ({ children }) => (
      <del className="text-muted-foreground/50 line-through">{children}</del>
    ),
    Callout,
  };
}
