export type Category = "dev" | "algorithm" | "essay" | "conference";

export const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "dev", label: "Dev" },
  { value: "algorithm", label: "Algorithm" },
  { value: "essay", label: "Essay" },
  { value: "conference", label: "Conference" },
];

export interface PostFrontmatter {
  title: string;
  date: string;
  category: Category;
  tags: string[];
  thumbnail?: string;
  summary: string;
  draft?: boolean;
  originalUrl?: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}
