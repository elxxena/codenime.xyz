import * as React from 'react';
import { Flex, Avatar, Box, Container } from '@chakra-ui/react';
import MotionBox from 'lib/components/motion/MotionBox';
import MotionFlex from 'lib/components/motion/MotionFlex';
import Header from 'lib/layout/Header';

const ANIMATION_DURATION = 0.5;

const HeroSection = () => {
  const color = 'blue.400';

  return (
    <Container maxW="5xl" p={{ base: 5, md: 12 }}>
      <Flex direction={['column', 'column', 'row']}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size="2xl"
              showBorder={true}
              borderColor={color}
              src={'https://avatars2.githubusercontent.com/u/37842853?v=4'}
            />
          </MotionBox>
        </MotionBox>
        
        <MotionFlex>
          <Box position="relative">
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header underlineColor={color} mt={0} cursor="pointer" width="max-content">
                Hey!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{' '}
            <Box as="strong" fontWeight="600">
              Ahmad
            </Box>{' '}
            and I&apos;m a{' '}
            <Box as="span" whiteSpace="nowrap">
              Full Stack Developer and
            </Box>{' '}
            <Box as="span" whiteSpace="nowrap">
              an open source lover&nbsp;
            </Box>
            from{' '}
            <Box as="span" whiteSpace="nowrap">
              Pakistan 🇵🇰
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            This is my digital garden, where I write about the things I&apos;m working on and share
            what I&apos;ve learned. 😊
          </Box>
        </MotionFlex>
      </Flex>
    </Container>
  );
};

export default HeroSection;
