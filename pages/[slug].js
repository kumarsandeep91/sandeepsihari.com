import { Excerpt, PostedBy, Title } from "../components/post";
import { getAllPosts, getPostBySlug, markdownToHtml } from "../utils";

const Post = ({ data, content }) => {
  return (
    <main className="post-root">
      <section className="post-content surface-5">
        <Title value={data.title} />
        {data?.excerpt && <Excerpt value={data.excerpt} />}
        <PostedBy date={data.date} author={data.author} />
        <hr />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </main>
  );
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
