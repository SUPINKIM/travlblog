/**
 * Velog → MDX migration script
 * Usage: node scripts/migrate-velog.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, "../src/content");

// Category mapping for each post (based on analysis)
const CATEGORY_MAP = {
  // Dev (기술 글)
  "src-used-in-next-js": "dev",
  "ViewTransition-API-browser-history-and-React-Router": "dev",
  "RxJS-시작해보기-1": "dev",
  "react-study-retrospect-1": "dev",
  "memory-management-js": "dev",
  "next-jstutorial1": "dev",
  "번역-Vite-5-diff": "dev",
  "translate2": "dev",
  "reusable-ui": "dev",
  "TIL-테스트코드-작성해보기": "dev",
  "vue-i18n-extract-활용한-번역-자동화하기": "dev",
  "TanStack-Query-Good-Practice": "dev",
  "openapi-generator-cli-사용기": "dev",
  "tsconfig-module-resolution": "dev",
  "dynamic-Import": "dev",
  "tailwind3purge": "dev",
  "react-query1": "dev",
  "kfshop-retrospective": "dev",
  "TIL-spring-boot-starter": "dev",
  "TIL-대규모-시스템-설계-1": "dev",
  "vibe-coding-with-claude": "dev",

  // Algorithm
  "why-u-study-algorithms": "algorithm",
  "Algorithm-gift": "algorithm",
  "Algorithm-4": "algorithm",
  "Algorithm-3": "algorithm",
  "Algorithm-2": "algorithm",
  "Algorithm-1": "algorithm",
  "programmers-추억점수": "algorithm",

  // Essay (회고, 에세이)
  "whats-the-matter": "essay",
  "열심히-안-살기로-했다": "essay",
  "small-success": "essay",
  "2024-연말회고": "essay",
  "return-something-new": "essay",
  "for-newbie": "essay",
  "2023-회고-2024-다짐": "essay",
  "happy-new-year": "essay",
  "move-home": "essay",
  "first-post": "essay",
  "개발자인-나에게-영감을-준-말들": "essay",

  // Conference
  "woowacon-2025": "conference",
  "toss-participation": "conference",
  "2023-DEVIEW": "conference",
};

async function fetchPostBody(slug) {
  const query = `query Post($input: ReadPostInput!) {
    post(input: $input) {
      id title body released_at tags thumbnail url_slug short_description
    }
  }`;

  const res = await fetch("https://v3.velog.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { input: { username: "qorgkr26", url_slug: slug } },
    }),
  });

  const json = await res.json();
  return json.data?.post;
}

function sanitizeSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeForFrontmatter(str) {
  if (!str) return "";
  // Escape double quotes and handle special chars
  return str.replace(/"/g, '\\"').replace(/\n/g, " ").trim();
}

function sanitizeBody(body) {
  if (!body) return "";
  // Remove HTML comments
  let cleaned = body.replace(/<!--[\s\S]*?-->/g, "");
  // Fix common MDX issues: curly braces in text need escaping
  // But only outside of code blocks
  // Simple approach: leave as-is for now, MDX will handle most markdown
  return cleaned;
}

async function fetchAllPosts() {
  const query = `query Posts($input: GetPostsInput!) {
    posts(input: $input) {
      id title short_description url_slug released_at tags thumbnail
    }
  }`;

  const res = await fetch("https://v3.velog.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { input: { username: "qorgkr26", limit: 50 } },
    }),
  });

  const json = await res.json();
  return json.data?.posts || [];
}

async function main() {
  console.log("🚀 Starting Velog → MDX migration...\n");

  const posts = await fetchAllPosts();
  console.log(`Found ${posts.length} posts on Velog.\n`);

  let success = 0;
  let skipped = 0;

  for (const postMeta of posts) {
    const slug = postMeta.url_slug;
    const category = CATEGORY_MAP[slug];

    if (!category) {
      console.log(`⏭️  Skipping (no category mapping): ${slug}`);
      skipped++;
      continue;
    }

    // Fetch full body
    const post = await fetchPostBody(slug);
    if (!post) {
      console.log(`❌ Failed to fetch: ${slug}`);
      skipped++;
      continue;
    }

    const fileSlug = sanitizeSlug(slug);
    const dir = path.join(CONTENT_DIR, category);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filePath = path.join(dir, `${fileSlug}.mdx`);

    // Check if already exists
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  Already exists: ${filePath}`);
      skipped++;
      continue;
    }

    const date = post.released_at.slice(0, 10);
    const tags = (post.tags || []).map((t) => `"${escapeForFrontmatter(t)}"`).join(", ");
    const title = escapeForFrontmatter(post.title);
    const summary = escapeForFrontmatter(post.short_description);
    const thumbnail = post.thumbnail || "";
    const originalUrl = `https://velog.io/@qorgkr26/${slug}`;
    const body = sanitizeBody(post.body);

    const frontmatter = `---
title: "${title}"
date: "${date}"
category: "${category}"
tags: [${tags}]
thumbnail: "${thumbnail}"
summary: "${summary}"
originalUrl: "${originalUrl}"
---`;

    const content = `${frontmatter}\n\n${body}\n`;

    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Created: ${category}/${fileSlug}.mdx`);
    success++;

    // Rate limit: small delay between requests
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log(`\n📊 Migration complete!`);
  console.log(`   ✅ Created: ${success}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
}

main().catch(console.error);
