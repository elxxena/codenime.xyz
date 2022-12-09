import type { DefaultSeoProps } from "next-seo";

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
  title: "codenime",
  titleTemplate: "%s | 4ndrexyz",
  defaultTitle: "4ndrexyz",
  description: "codenime",
  canonical: "https://sznm.dev",
  openGraph: {
    url: "https://codenime.xyz",
    title: "codenime",
    description: "4ndrexyz",
    images: [
      {
        url: "https://og.sznm.dev/api/generate?heading=Andre%20Firmansah&text=codenime.xyz",
        alt: "codenime.xyz og-image",
      },
    ],
    site_name: "sozonome",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};
