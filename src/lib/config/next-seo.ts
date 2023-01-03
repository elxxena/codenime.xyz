import type { DefaultSeoProps } from "next-seo";

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
  title: "codenime",
  titleTemplate: "%s | codenime",
  defaultTitle: "codenime",
  description: "Tempat yang cocok bagi kamu yang ingin belajar bahasa pemrograman",
  canonical: "https://codenime.xyz",
  openGraph: {
    url: "https://codenime.xyz",
    title: "codenime",
    description: "Tempat yang cocok bagi kamu yang ingin belajar bahasa pemrograman",
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
