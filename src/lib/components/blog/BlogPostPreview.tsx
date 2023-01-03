import { Box,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  HStack,
  AspectRatio,
  Image,
  Icon,
  Divider,
  Center,
  Heading, } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";

import type { MotionBoxProps } from "lib/components/motion/MotionBox";
import MotionBox from "lib/components/motion/MotionBox";
import Twemoji from "lib/components/Twemoji";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { dateFormatLong } from "lib/utils/dateFormat";
import { trackEvent } from "lib/utils/trackEvent";
import { unsplashImg } from "lib/utils/unsplashImg";

type BlogPostPreviewProps = {
  postData: Blog;
  wrapperProps?: MotionBoxProps;
};

const BlogPostPreview = ({ postData, wrapperProps }: BlogPostPreviewProps) => {
  const handleClickBlogPost = () => {
    trackEvent({
      eventName: `Blog Post: ${postData.title}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  return (
    <MotionBox {...wrapperProps}>
      <Link href={`/blog/${postData.id}`} unstyled>
      <HStack
        w="100%"
        // spacing={8}
        rounded="lg"
        borderWidth="1px"
        bg={useColorModeValue("white", "neutralD.100")}
        borderColor={useColorModeValue("neutral.400", "neutralD.400")}
        position="relative"
        align="center"
        px={4}
        p={4}
        spacing={4}
        transition="all 0.3s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
        height="100%"
        // height={48}
      >
        <VStack
          align="start"
          justifyContent="space-between"
          w="100%"
          h="100%"
          p={2}
        >
          <VStack align="start">
            <HStack>
              <Heading fontSize="xl" borderBottom="0">
                {postData.title}
              </Heading>
            </HStack>
          </VStack>
          <HStack
            fontSize="sm"
            fontWeight="500"
            spacing={2}
            color={useColorModeValue("neutral.900", "neutralD.900")}
          >
            <Text>Posted {dateFormatLong(postData.date)}</Text>
            <Text>·</Text>
            {postData.readTime?.text}
          </HStack>
        </VStack>
        {}
      </HStack>
    </Link>
    </MotionBox>
  );
};

export default BlogPostPreview;
