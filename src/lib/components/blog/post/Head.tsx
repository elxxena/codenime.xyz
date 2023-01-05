import { Box, Flex, Grid, Heading, Link, Text, Tag, Stack, Avatar, Divider } from "@chakra-ui/react";

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

          <Stack mt={6} direction={'row'} spacing={4} align={'center'} marginBottom={5}>

            <Avatar
              src={'https://avatars.githubusercontent.com/4ndrexyz'}
              name="4ndrexyz"
            />

            <Stack direction={'column'} spacing={0} >
              <Text fontSize={'sm'} fontWeight={600}>4ndrexyz</Text>
              <Text fontSize={'sm'} color={'gray.500'}>{dateFormatLong(postData.date)} • {postData.readTime?.text}</Text>
            </Stack>
          </Stack>

          <Stack marginBottom={7}>
            <ShareButtons title={`Lihat postingan dari codenime ${postData.title}`}/>
          </Stack>

          <Divider/>

        </Box>
      </Flex>
    </Grid>
  );
};

export default BlogPostHead;
