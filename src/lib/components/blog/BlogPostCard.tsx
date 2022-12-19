import { Box, Heading, Text, Tag, Flex, AspectRatio, Image,Card, CardHeader, CardBody, CardFooter, Stack, Divider } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";

import type { MotionBoxProps } from "lib/components/motion/MotionBox";
import MotionBox from "lib/components/motion/MotionBox";
import Twemoji from "lib/components/Twemoji";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { dateFormatLong } from "lib/utils/dateFormat";
import { trackEvent } from "lib/utils/trackEvent";
import { unsplashImg } from "lib/utils/unsplashImg";

type BlogPostCardProps = {
  postData: Blog;
  wrapperProps?: MotionBoxProps;
};

const BlogPostCard = ({ postData, wrapperProps }: BlogPostCardProps) => {
  const handleClickBlogPost = () => {
    trackEvent({
      eventName: `Blog Post: ${postData.title}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  return (
    <MotionBox {...wrapperProps}>
      <Box
        width="100%"
        transition="0.2s ease-out"
        _hover={{
          transform: "scale(1.03, 1.03)",
        }}
      >
        <Card maxW='sm' as={Link} href={`/blog/${postData.id}`} onClick={handleClickBlogPost}>
          <CardBody>
            <Image
              src={unsplashImg(postData.cover)}
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size="md" marginBottom={2}>{postData.title}</Heading>
              <Text fontSize="xs" color="description">
                {dateFormatLong(postData.date)} - {postData.readTime?.text}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            {postData.tags?.map((stack) => (
              <Tag
                marginBottom={5}
                key={stack}
              >
                {stack}
              </Tag>
            ))}
          </CardFooter>
        </Card>
      </Box>
    </MotionBox>
  );
};

export default BlogPostCard;
