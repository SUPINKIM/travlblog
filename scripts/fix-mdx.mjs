/**
 * Fix MDX files that contain raw HTML/JSX-like text that breaks MDX parsing.
 * This escapes angle brackets in non-code-block contexts.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, "../src/content");

function fixMdxContent(content) {
  const lines = content.split("\n");
  let inCodeBlock = false;
  let inFrontmatter = false;
  let frontmatterCount = 0;

  const fixed = lines.map((line) => {
    // Track frontmatter
    if (line.trim() === "---") {
      frontmatterCount++;
      if (frontmatterCount <= 2) {
        inFrontmatter = frontmatterCount === 1;
        if (frontmatterCount === 2) inFrontmatter = false;
        return line;
      }
    }

    if (inFrontmatter) return line;

    // Track code blocks
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      return line;
    }

    if (inCodeBlock) return line;

    // Fix angle brackets that look like Korean/text content (not HTML tags)
    // Match < followed by Korean characters or other non-HTML patterns
    let fixed = line;
    
    // Replace <Korean text> patterns with escaped versions
    // But preserve actual HTML tags like <img>, <br>, <div>, <a>, <span>, <p>, <code>, etc.
    // and MDX/JSX component tags (capitalized)
    fixed = fixed.replace(/<([^>\/\s]*[가-힣][^>]*)>/g, "&lt;$1&gt;");
    
    // Also fix patterns like <something> where "something" is not a valid HTML tag
    // Common HTML tags to preserve
    const htmlTags = /^(a|abbr|address|area|article|aside|audio|b|base|bdi|bdo|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|h[1-6]|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|main|map|mark|menu|meta|meter|nav|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rp|rt|ruby|s|samp|script|search|section|select|slot|small|source|span|strong|style|sub|summary|sup|svg|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|u|ul|var|video|wbr|path|rect|circle|ellipse|line|polyline|polygon|text|g|defs|clipPath|mask|pattern|image|use|symbol|linearGradient|radialGradient|stop|filter|foreignObject|animate|animateMotion|animateTransform|set|desc|metadata|switch|marker|view)$/i;
    
    // Fix standalone angle brackets that aren't part of code/html
    // e.g., "값이 < 10" or "A > B" 
    // But this is tricky - only fix obvious Korean-surrounded ones
    
    return fixed;
  });

  return fixed.join("\n");
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const original = fs.readFileSync(filePath, "utf-8");
    const fixed = fixMdxContent(original);

    if (original !== fixed) {
      fs.writeFileSync(filePath, fixed, "utf-8");
      console.log(`  Fixed: ${file}`);
      fixedCount++;
    }
  }

  return fixedCount;
}

const categories = ["dev", "algorithm", "essay", "conference"];
let total = 0;

for (const cat of categories) {
  console.log(`\nProcessing ${cat}/`);
  const count = processDirectory(path.join(CONTENT_DIR, cat));
  total += count || 0;
}

console.log(`\nDone! Fixed ${total} files.`);
