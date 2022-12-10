import type { Snippet } from "contentlayer/generated";
import { NextSeo } from "next-seo";

import { baseUrl } from "lib/constants/baseUrl";
import { sznmOgImage } from "lib/utils/sznmOgImage";

type SnippetDetailMetaProps = {
  data: Snippet;
};

const SnippetDetailMeta = ({ data }: SnippetDetailMetaProps) => {
  const ogImage = sznmOgImage({
    heading: data.title,
    text: "Snippets | https://codenime.xyz",
  });
  const pageUrl = `${baseUrl}/snippets/${data.id}`;

  return (
    <NextSeo
      title={data.title}
      canonical={pageUrl}
      openGraph={{
        title: `4ndrexyz | ${data.title}`,
        images: [
          {
            url: ogImage,
            alt: `${data.title} og-image`,
          },
        ],
      }}
    />
  );
};

export default SnippetDetailMeta;
