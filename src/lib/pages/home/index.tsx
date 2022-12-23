import { Box } from "@chakra-ui/react";

import HeroSection from "./HeroSection";
import PostsSection from "./PostsSection";
import SnippetSection from "./SnippetSection";
import type { HomeProps } from "./types";

const Home = ({ recentPosts, recentSnippets }: HomeProps) => {
  return (
    <Box marginTop={-24}>
      <HeroSection />
      <PostsSection allPostsData={recentPosts} />
      <SnippetSection snippets={recentSnippets} />
    </Box>
  );
};

export default Home;
