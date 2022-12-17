import { Grid, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import MotionBox from "lib/components/motion/MotionBox";
import MotionGrid from "lib/components/motion/MotionGrid";
import SnippetCard from "lib/components/snippets/SnippetCard";
import {
  childAnimationProps,
  staggerAnimationProps,
} from "lib/constants/animation";
import { baseUrl } from "lib/constants/baseUrl";
import { sznmOgImage } from "lib/utils/sznmOgImage";

import type { SnippetListProps } from "./types";

const SnippetList = ({ snippets }: SnippetListProps) => {
  return (
    <Grid gap={12}>
      <NextSeo
        title="Snippets"
        canonical={`${baseUrl}/snippets`}
        openGraph={{
          title: "Snippets | 4ndrexyz",
          images: [
            {
              url: sznmOgImage({
                heading: "Snippets | 4ndrexyz",
                text: "https://codenime.xyz",
              }),
              alt: "Snippets | 4ndrexyz og-image",
            },
          ],
        }}
      />

      <Grid gap={2}>
        <Heading>Snippets</Heading>
        <Text color="description">
          Ini adalah koleksi Snippet saya
        </Text>
      </Grid>

      <MotionGrid
        {...staggerAnimationProps}
        gap={6}
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      >
        {snippets.map((item) => (
          <MotionBox {...childAnimationProps} key={item.id}>
            <SnippetCard data={item} />
          </MotionBox>
        ))}
      </MotionGrid>
    </Grid>
  );
};

export default SnippetList;
