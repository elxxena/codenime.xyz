import { Heading, Box, Text, Button } from "@chakra-ui/react";
import * as React from "react";

import BlogPostCard from "lib/components/blog/BlogPostCard";
import MotionGrid from "lib/components/motion/MotionGrid";
import {
  childAnimationProps,
  staggerAnimationProps,
} from "lib/constants/animation";


import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

import type { BlogPostListProps } from "lib/pages/blog/list/types";

const BlogPostList = ({ allPostsData }: BlogPostListProps) => {
  const [keyword, setKeyword] = React.useState<string>("");
  const handleClickViewAllPosts = () => {
    trackEvent({
      eventName: "Home: View All Posts",
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
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
            
      <Box>
        <Button
          as={Link}
          href="/blog"
          rightIcon={<FaArrowRight />}
          colorScheme='teal' 
          variant='ghost'
          onClick={handleClickViewAllPosts}
        >
          View All Posts
        </Button>
      </Box>

    </Box>
  );
};

export default BlogPostList;






