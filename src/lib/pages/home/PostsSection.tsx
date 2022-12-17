import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {
  childAnimationProps,
  staggerAnimationProps,
} from "lib/constants/animation";

import BlogPostPreview from "lib/components/blog/BlogPostCard";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";
import BlogPostCard from "lib/components/blog/BlogPostCard";

export type PostsSectionProps = {
  data: Array<Blog>;
};

const PostsSection = ({ data }: PostsSectionProps) => {
  const handleClickViewAllPosts = () => {
    trackEvent({
      eventName: "Home: View All Posts",
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  return (
    <Stack as="section" spacing={1}>
      <Heading size="lg" marginBottom={2}>
        Recent Posts
      </Heading>

      <Grid gap={8}>
        {data.map((postData) => (
           <BlogPostCard
           wrapperProps={childAnimationProps}
           postData={postData}
           key={postData.title}
         />
        ))}
      </Grid>

      <Box>
        <Button
          as={Link}
          href="/blog"
          rightIcon={<FaArrowRight />}
          paddingX={0}
          variant="ghost"
          fontFamily="heading"
          onClick={handleClickViewAllPosts}
        >
          view all posts
        </Button>
      </Box>
    </Stack>
  );
};

export default PostsSection;
