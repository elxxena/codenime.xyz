import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box height="90vh" alignItems="center" display="grid">
      <Box
        verticalAlign="center"
        width={["100%", "80%", "60%"]}
        marginTop={[8, 0]}
        alignSelf={["none", "center"]}
      >
        <Heading as="h1" size="xl" paddingBottom={11}>
          Selamat Datang 👋
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} color="description">
          Semoga harimu menyenangkan !
        </Text>
        <Flex flex={1}>
        <Image
          src={
            'https://avatars.githubusercontent.com/4ndrexyz'
          }
        />
      </Flex>
      </Box>
    </Box>
  );
};

export default HeroSection;
