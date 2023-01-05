import { AspectRatio, Box, Image, useColorModeValue } from "@chakra-ui/react";
import type { GiscusProps } from "@giscus/react";
import Giscus from "@giscus/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import BlogPostHead from "lib/components/blog/post/Head";
import BlogPostMeta from "lib/components/blog/post/Meta";
import { renderers } from "lib/components/blog/renderers";
import ShareButtons from "lib/components/shared/ShareButtons";
import { unsplashImg } from "lib/utils/unsplashImg";

import styles from "./BlogPost.module.scss";
import type { BlogPostProps } from "./types";

const BlogPost = ({ postData }: BlogPostProps) => {
  const giscusTheme: GiscusProps["theme"] = useColorModeValue("light", "dark");

  return (
    <Box as="article">
      <BlogPostMeta postData={postData} />

      <AspectRatio
        width="full"
        ratio={2 / 1}
        marginBottom={8}
        boxShadow="lg"
        borderRadius={{ base: 12, md: 18 }}
      >
        <Image
          src={unsplashImg(postData.cover, 2160)}
          fit="cover"
          borderRadius={{ base: 12, md: 18 }}
        />
      </AspectRatio>

      <BlogPostHead postData={postData} />

      <ReactMarkdown
        className={styles.content}
        rehypePlugins={[rehypeRaw]}
        components={renderers}
      >
        {postData.body.raw}
      </ReactMarkdown>

      <ShareButtons title={`Kunjungi halaman codenime ${postData.title}`} />

      <Box marginY={12}>
        <Giscus
          repo="4ndrexyz/codenime.xyz"
          repoId="R_kgDOIkmTag"
          mapping="pathname"
          category="Blog Post"
          categoryId="DIC_kwDOIkmTas4CTANZ"
          reactionsEnabled="1"
          theme={giscusTheme}
          emitMetadata="0"
          data-loading="lazy"
        />
      </Box>
    </Box>
  );
};

export type { BlogPostProps } from "./types";

export default BlogPost;
