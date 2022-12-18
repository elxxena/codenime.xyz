import { Box, Flex, Grid, Heading, Link, Text, Tag } from "@chakra-ui/react";

import type { Blog } from "contentlayer/generated";

import ShareButtons from "lib/components/shared/ShareButtons";
import Twemoji from "lib/components/Twemoji";
import { dateFormatLong } from "lib/utils/dateFormat";

type BlogPostHeadProps = {
  postData: Blog;
};

const BlogPostHead = ({ postData }: BlogPostHeadProps) => {
  return (
    <Grid gap={2} marginBottom={12}>
      <Flex alignItems="center">
        <Box flexBasis={["80%"]}>
          <Heading as="h1" size="3xl" marginBottom={8}>
            {postData.title}
          </Heading>

          <Link href="/about" isExternal>
            <Text color="gray" fontSize="sm">
              4ndrexyz
            </Text>
          </Link>

          <Text fontSize="xs" color="gray">
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
          </Text>

          <Flex gap={2}>
            {postData.tags?.map((stack) => (
              <Tag
                paddingY={3}
                paddingX={2}
                key={stack}
              >
                {stack}
              </Tag>
            ))}
          </Flex>

        </Box>

        <Flex flexBasis={["20%"]}>
          <Box marginLeft="auto" width="60%">
            <Twemoji emoji={postData.thumbnail ?? "📘"} />
          </Box>
        </Flex>
      </Flex>

      <ShareButtons title={`Check out this blog post: ${postData.title}`} />
    </Grid>
  );
};

export default BlogPostHead;
