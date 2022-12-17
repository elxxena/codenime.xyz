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

import type { BlogPostListProps } from "lib/pages/blog/list/types";

const BlogPostSearch = dynamic(
  () => import("lib/components/blog/BlogPostSearch"),
  {
    ssr: false,
  }
);

const PostsSection = ({ allPostsData }: BlogPostListProps) => {
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

      <Heading size="lg" marginBottom={2}>
        Recent Posts
      </Heading>

      <MotionGrid
        gap={16}
        marginY={12}
        gridTemplateColumns={{ md: "repeat(2, 1fr)" }}
        {...staggerAnimationProps}
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

export default PostsSection;


