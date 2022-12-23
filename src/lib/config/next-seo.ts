import type { DefaultSeoProps } from "next-seo";

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
  title: "codenime",
  titleTemplate: "%s",
  defaultTitle: "codenime",
  description: "By 4ndrexyz",
  canonical: "https://codenime.xyz",
  openGraph: {
    url: "https://codenime.xyz",
    title: "codenime",
    description: "Web For Dev",
    images: [
      {
        url: "https://og.sznm.dev/api/generate?heading=Andre%20Firmansah&text=codenime.xyz",
        alt: "codenime.xyz og-image",
      },
    ],
    site_name: "codenime",
  },
  twitter: {
    handle: "@andrexyz_",
    cardType: "summary_large_image",
  },
};
