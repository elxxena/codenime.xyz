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
          {
          var h =  (new Date()).getHours();
          var m = (new Date()).getMinutes();
          var s = (new Date()).getSeconds();
          if (h >= 4 && h < 10) document.writeln("Selamat pagi,");
          if (h >= 10 && h < 15) document.writeln("Selamat siang,");
          if (h >= 15 && h < 18) document.writeln("Selamat sore,");
          if (h >= 18 || h < 4) document.writeln("Selamat malam,"); 
          }
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} color="description">
          Selamat datang di website saya, Semoga harimu menyenangkan!
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;
