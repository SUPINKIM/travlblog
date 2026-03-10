import fs from "fs";
import matter from "gray-matter";
import path from "path";

import type { Category, Post, PostFrontmatter, PostMeta } from "./constants";

export type { Category, Post, PostFrontmatter, PostMeta } from "./constants";
export { CATEGORIES } from "./constants";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

export function getAllPosts(category?: Category): PostMeta[] {
  const categories: Category[] = category
    ? [category]
    : ["dev", "algorithm", "essay", "conference"];

  const posts: PostMeta[] = [];

  for (const cat of categories) {
    const dir = path.join(CONTENT_DIR, cat);
    const files = getMdxFiles(dir);

    for (const file of files) {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      const frontmatter = data as PostFrontmatter;

      if (frontmatter.draft) continue;

      posts.push({
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        category: frontmatter.category || cat,
        tags: frontmatter.tags || [],
        thumbnail: frontmatter.thumbnail,
        summary: frontmatter.summary || "",
        draft: frontmatter.draft,
        originalUrl: frontmatter.originalUrl,
      });
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const categories: Category[] = ["dev", "algorithm", "essay", "conference"];
  const decodedSlug = decodeURIComponent(slug);

  for (const cat of categories) {
    const filePath = path.join(CONTENT_DIR, cat, `${decodedSlug}.mdx`);

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as PostFrontmatter;

      return {
        slug: decodedSlug,
        content,
        title: frontmatter.title,
        date: frontmatter.date,
        category: frontmatter.category || cat,
        tags: frontmatter.tags || [],
        thumbnail: frontmatter.thumbnail,
        summary: frontmatter.summary || "",
        draft: frontmatter.draft,
        originalUrl: frontmatter.originalUrl,
      };
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  const categories: Category[] = ["dev", "algorithm", "essay", "conference"];
  const slugs: string[] = [];

  for (const cat of categories) {
    const dir = path.join(CONTENT_DIR, cat);
    const files = getMdxFiles(dir);
    slugs.push(...files.map((f) => f.replace(/\.mdx$/, "")));
  }

  return slugs;
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }

  return Array.from(tagSet).sort();
}

/**
 * Get post dates for activity heatmap.
 * Returns a map of date string (YYYY-MM-DD) to post count.
 */
export function getPostActivityMap(): Record<string, number> {
  const posts = getAllPosts();
  const activityMap: Record<string, number> = {};

  for (const post of posts) {
    const dateStr = post.date.slice(0, 10);
    activityMap[dateStr] = (activityMap[dateStr] || 0) + 1;
  }

  return activityMap;
}
