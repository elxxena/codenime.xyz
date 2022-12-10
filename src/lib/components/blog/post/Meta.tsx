import type { Blog } from "contentlayer/generated";
import { ArticleJsonLd, NextSeo } from "next-seo";

import { baseUrl } from "lib/constants/baseUrl";
import { sznmOgImage } from "lib/utils/sznmOgImage";

type BlogPostMetaProps = {
  postData: Blog;
};

const BlogPostMeta = ({ postData }: BlogPostMetaProps) => {
  const ogImage = sznmOgImage({
    heading: postData.title,
    text: "Blog Post | https://codenime.xyz",
  });
  const pageUrl = `${baseUrl}/blog/${postData.id}`;

  return (
    <>
      <NextSeo
        title={postData.title}
        canonical={pageUrl}
        openGraph={{
          title: `${postData.title} | codenime`,
          url: pageUrl,
          images: [
            {
              url: ogImage,
              alt: `${postData.title} og-image`,
            },
          ],
        }}
      />

      <ArticleJsonLd
        type="Blog"
        url={`${baseUrl}/blog/${postData.id}`}
        title={`${postData.title} | codenime`}
        images={[]}
        datePublished={new Date(postData.date).toISOString()}
        dateModified={new Date(postData.date).toISOString()}
        authorName="4ndrexyz"
        description={`Postingan ini menjelaskan tentang ${postData.title}`}
      />
    </>
  );
};

export default BlogPostMeta;
