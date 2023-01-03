import { 
  Box, 
  Text, 
  Flex, 
  AspectRatio, 
  Image,
  Center,
  Heading,
  Stack,
  Avatar,
  useColorModeValue,
  Badge, } from "@chakra-ui/react";
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
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
        borderWidth="2px"
        borderRadius={12}
        p={5}
      >
        <Box
          as={Link}
          href={`/blog/${postData.id}`}
          onClick={handleClickBlogPost}
        >
          <AspectRatio
            width="full"
            ratio={2 / 1}
            marginBottom={4}
            boxShadow="lg"
            borderRadius={{ base: 12, md: 24 }}
          >
            <Image
              src={unsplashImg(postData.cover)}
              fit="cover"
              borderRadius={12}
            />
          </AspectRatio>

          <Stack>

            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              {postData.title}
            </Heading>

            <Text color={'gray.500'}>
              {postData.description}
            </Text>

            <Flex gap={2}>
              {postData.tags?.map((stack) => (
                <Badge colorScheme='green' key={stack} >
                  {stack}
                </Badge>
              ))}
            </Flex>
          </Stack>
          
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>

            <Avatar
              src={'https://avatars.githubusercontent.com/4ndrexyz'}
              name="4ndrexyz"
            />

            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>4ndrexyz</Text>
              <Text color={'gray.500'}>{dateFormatLong(postData.date)} · {postData.readTime?.text}</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default BlogPostCard;
