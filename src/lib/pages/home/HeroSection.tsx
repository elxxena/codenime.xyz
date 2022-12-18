import * as React from 'react';
import { Container, Heading, Stack, HStack, Text, Button, Image, Link } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Container maxW="7xl" p={4} mt={18}>
      <Stack direction="column" spacing={6} alignItems="center" mt={16} mb={16}>
        <Image
          mb={5}
          borderRadius='full'
          boxSize='150px'
          src='https://avatars.githubusercontent.com/4ndrexyz'
          alt='4ndrexyz'
        />
        <Heading as="h1" fontSize="4xl" fontWeight="bold" textAlign="center" maxW="600px">
          Selamat Datang <br /> di Website Codenime
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Website untuk kamu yang tertarik ingin belajar ngoding
        </Text>
        <HStack spacing={5}>
          <Link href='https://www.getrevue.co/profile/4ndrexyz' isExternal>
            <Button colorScheme="teal" variant="solid" rounded="md" size="lg">
              Join Newsletter
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
