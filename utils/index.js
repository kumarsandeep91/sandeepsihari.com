import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDir = join(process.cwd(), "posts");

export const getAllPosts = () => {
  return fs.readdirSync(postsDir)?.map((file) => file?.replace(/\.md$/, ""));
};

export const getPostBySlug = (slug) => {
  const postPath = join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(postPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    data,
    content,
  };
};

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
