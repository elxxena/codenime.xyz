import type { Blog } from "contentlayer/generated";
import type { Snippet } from "contentlayer/generated";

export type HomeProps = {
  recentPosts: Array<Blog>;
  recentSnippets: Array<Snippet>;
};
