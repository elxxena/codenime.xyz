import { 
  Box,
  Image,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue, 
  Flex, 
  Tag,
} from "@chakra-ui/react";
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
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        as={Link} href={`/blog/${postData.id}`} onClick={handleClickBlogPost}
        >
          
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={unsplashImg(postData.cover)}
            objectFit='fill'
          />
        </Box>
        <Stack>
          <Flex gap={2}>
            {postData.tags?.map((stack) => (
              <Tag
                key={stack}
              >
                {stack}
              </Tag>
            ))}
          </Flex>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {postData.title}
          </Heading>
          <Text color={'gray.500'}>
            {postData.description}
          </Text>
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
    </MotionBox>
  );
};

export default BlogPostCard;
