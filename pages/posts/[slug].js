import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Link from "next/link";
import path from "path";
import Image from "next/image";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

const components = {};

export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components });
  return (
    <>
      <h1>{frontMatter.title}</h1>
      <Image
        src={frontMatter.image}
        alt={frontMatter.title}
        layout="responsive"
        width={900}
        height={400}
        objectFit="cover"
        objectPosition="50% 85%"
      />
      <p>{frontMatter.description}</p>
      <section>{content}</section>
      <Link href="/">
        <a>👈 Go back home</a>
      </Link>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
