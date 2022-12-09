import type { FooterLinkProps } from "./types";

export const links: Array<Pick<FooterLinkProps, "label" | "url">> = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Github",
    url: "https://github.com/4ndrexyz",
  },
];
