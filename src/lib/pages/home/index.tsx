import { Box } from "@chakra-ui/react";

import HeroSection from "./HeroSection";
import PostsSection from "./PostsSection";
import ProjectsSection from "./ProjectsSection";
import type { HomeProps } from "./types";

const Home = ({ highlightedProjects, recentPosts }: HomeProps) => {
  return (
    <Box marginTop={-24}>
      <HeroSection />
      <PostsSection data={recentPosts} />
      <ProjectsSection data={highlightedProjects} />
    </Box>
  );
};

export default Home;
