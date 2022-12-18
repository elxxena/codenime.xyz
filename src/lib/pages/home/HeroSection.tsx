import * as React from 'react';
import { Container, Heading, Stack, HStack, Text, Button, Image } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Container maxW="7xl" p={4} mt={18}>
      <Stack direction="column" spacing={6} alignItems="center" mt={16} mb={16}>
        <Heading as="h1" fontSize="4xl" fontWeight="bold" textAlign="center" maxW="600px">
          We're on a mission to make <br /> building UIs more accessible
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Our mission is to empower anyone to build UIs, faster. We're reducing the entry barrier,
          making design skills accessible.
        </Text>
        <HStack spacing={5}>
          <Button colorScheme="teal" variant="solid" rounded="md" size="lg">
            Get Started
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
