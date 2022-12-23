import { Heading, Box, Text, Grid, Button } from "@chakra-ui/react";
import debounce from "lodash-es/debounce";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import * as React from "react";

import MotionBox from "lib/components/motion/MotionBox";
import SnippetCard from "lib/components/snippets/SnippetCard";
import MotionGrid from "lib/components/motion/MotionGrid";
import {
  childAnimationProps,
  staggerAnimationProps,
} from "lib/constants/animation";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

import type { SnippetListProps } from "lib/pages/snippets/list/types";

const SnippetsList = ({ snippets }: SnippetListProps) => {
  const [keyword, setKeyword] = React.useState<string>("");
  const handleClickViewAllPosts = () => {
    trackEvent({
      eventName: "Home: View All Snippets",
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  const filteredPosts = snippets.filter((post) =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleChangeKeyword = React.useCallback(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
      }, 150),
    []
  );

  return (
    <Box mt={6}>

      <Heading size="lg" marginBottom={2}>
        Recent Snippet
      </Heading>

      <MotionGrid
        gap={16}
        marginY={12}
        gridTemplateColumns={{ md: "repeat(2, 1fr)" }}
        {...staggerAnimationProps}
     >
       {snippets.map((item) => (
         <MotionBox {...childAnimationProps} key={item.id}>
           <SnippetCard data={item} />
         </MotionBox>
       ))}
      </MotionGrid>
            
      <Box>
        <Button
          as={Link}
          href="/snippets"
          rightIcon={<FaArrowRight />}
          colorScheme='teal' 
          variant='ghost'
          onClick={handleClickViewAllPosts}
        >
          View all Snippet
        </Button>
      </Box>

    </Box>
  );
};

export default SnippetsList;