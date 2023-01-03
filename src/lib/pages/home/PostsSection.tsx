import { Heading, Box, Text, Button, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";

import BlogPostPreview from "lib/components/blog/BlogPostPreview";
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
    <Box mb={10}>

      <Heading size="lg" marginBottom={2}>
        Recent Posts
      </Heading>

      <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
        {!filteredPosts.length && <Text>No posts found.</Text>}
        {filteredPosts.map((postData) => (
          <BlogPostPreview
            wrapperProps={childAnimationProps}
            postData={postData}
            key={postData.title}
          />
        ))}
      </SimpleGrid>
            
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






