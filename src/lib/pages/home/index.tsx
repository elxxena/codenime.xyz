import { Box } from "@chakra-ui/react";

import HeroSection from "./HeroSection";
import PostsSection from "./PostsSection";
import type { HomeProps } from "./types";

const Home = ({ recentPosts }: HomeProps) => {
  return (
    <Box marginTop={-24}>
      <HeroSection />
      <PostsSection allPostsData={recentPosts} />
    </Box>
  );
};

export default Home;
