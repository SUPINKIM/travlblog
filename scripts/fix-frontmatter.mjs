/**
 * Fix MDX frontmatter: remove control characters, fix encoding issues
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, "../src/content");

function cleanString(str) {
  // Remove control characters (except newline/tab)
  return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const cleaned = cleanString(content);
  
  if (content !== cleaned) {
    fs.writeFileSync(filePath, cleaned, "utf-8");
    return true;
  }
  return false;
}

const categories = ["dev", "algorithm", "essay", "conference"];
let total = 0;

for (const cat of categories) {
  const dir = path.join(CONTENT_DIR, cat);
  if (!fs.existsSync(dir)) continue;
  
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (processFile(filePath)) {
      console.log(`Fixed: ${cat}/${file}`);
      total++;
    }
  }
}

console.log(`\nDone! Fixed ${total} files.`);
