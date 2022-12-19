import { Box, Heading, Image } from "@chakra-ui/react";

const HeadSection = () => {
  return (
    <Box marginBottom={16}>
      <Image
          mb={5}
          borderRadius='full'
          boxSize='150px'
          src='https://avatars.githubusercontent.com/4ndrexyz'
          alt='4ndrexyz'
        />
      <Heading size="2xl" fontWeight="medium">
        4ndrexyz
      </Heading>
    </Box>
  );
};

export default HeadSection;