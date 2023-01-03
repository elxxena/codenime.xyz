import type { GetStaticProps } from "next";

import { sortedBlogPosts } from "lib/constants/blog";
import { sortedSnippets } from "lib/constants/snippet";

import type { HomeProps } from "./types";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const recentPosts = sortedBlogPosts.slice(0, 4);
  const recentSnippets = sortedSnippets.slice(0, 2);
  return {
    props: {
      recentPosts,
      recentSnippets,
    },
  };
};
