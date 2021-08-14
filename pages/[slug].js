import { remark } from "remark";
import html from "remark-html";

import { getAllPosts, getPostBySlug, markdownToHtml } from "../utils";

const Post = ({ data, content }) => {
  return <h1>blog post page</h1>;
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const { data, content } = getPostBySlug(params.slug);

  const parsedMarkdown = await markdownToHtml(content || "");

  return {
    props: {
      data,
      content: parsedMarkdown,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post,
        },
      };
    }),
    fallback: false,
  };
};
