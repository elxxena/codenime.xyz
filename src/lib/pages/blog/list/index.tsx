import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import debounce from "lodash-es/debounce";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import * as React from "react";

import BlogPostCard from "lib/components/blog/BlogPostCard";
import MotionGrid from "lib/components/motion/MotionGrid";
import {
  childAnimationProps,
  staggerAnimationProps,
} from "lib/constants/animation";
import { baseUrl } from "lib/constants/baseUrl";
import { sznmOgImage } from "lib/utils/sznmOgImage";

import type { BlogPostListProps } from "./types";

const BlogPostSearch = dynamic(
  () => import("lib/components/blog/BlogPostSearch"),
  {
    ssr: false,
  }
);

const BlogPostList = ({ allPostsData }: BlogPostListProps) => {
  const [keyword, setKeyword] = React.useState<string>("");

  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleChangeKeyword = React.useCallback(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
      }, 150),
    []
  );

  return (
    <Box>
      <NextSeo
        title="Blog Posts"
        canonical={`${baseUrl}/blog`}
        openGraph={{
          title: "Blog Posts",
          images: [
            {
              url: sznmOgImage({
                heading: "Blog Posts",
                text: "https://codenime.xyz",
              }),
              alt: "Blog Posts",
            },
          ],
        }}
      />

      <Grid marginBottom={22} gap={2}>
        <Heading as="h1" size="xl">
          Blog Posts
        </Heading>
        <Text color="description">Semua yang kamu cari ada disini</Text>
      </Grid>

      <BlogPostSearch keyword={keyword} onChange={handleChangeKeyword()} />

      <MotionGrid
         gap={6}
         gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      >
        {!filteredPosts.length && <Text>No posts found.</Text>}
        {filteredPosts.map((postData) => (
          <BlogPostCard
            wrapperProps={childAnimationProps}
            postData={postData}
            key={postData.title}
          />
        ))}
      </MotionGrid>
    </Box>
  );
};

export default BlogPostList;
