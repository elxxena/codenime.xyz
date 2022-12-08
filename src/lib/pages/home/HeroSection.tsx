import { Box, Heading, Text } from "@chakra-ui/react";

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
          いらっしゃいませ
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} color="description">
          Terimakasih telah berkunjung di website saya. Semoga harimu menyenangkan!
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;
