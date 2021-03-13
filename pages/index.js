import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import CardItem from "../components/CardItem";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { Typography } from "@material-ui/core";

import styled from "styled-components";
const StyledCardListUl = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const index = ({ posts }) => {
  return (
    <>
      <Typography variant="h1" align="center">
        Autoriserede låsesmed til privat og erhverv.
      </Typography>

      <Typography variant="h2" align="center">
        Vi kan løse alle opgaver hurtigt og professionelt.
      </Typography>

      <StyledCardListUl>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/[slug]`}
            >
              <a>
                <CardItem
                  key={post.data.title}
                  title={post.data.title}
                  description={post.data.description}
                  image={post.data.image}
                />
              </a>
            </Link>
          </li>
        ))}
      </StyledCardListUl>
    </>
  );
};

export default index;

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
