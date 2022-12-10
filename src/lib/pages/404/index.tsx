import {
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

import MotionBox from "lib/components/motion/MotionBox";

const Page404 = () => {
  return (
    <Box>
      <MotionBox
        width={["100%", "70%", "60%", "60%"]}
        margin="0 auto"
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      >
        <Image src="/404.png" alt="Error404" />
      </MotionBox>

      <Box marginY={4}>
        <Heading textAlign="center" fontSize="3xl" marginBottom={2}>
          Kamu ada dimana?
        </Heading>

        <Box textAlign="center">
          <Button as={Link} href="/" backgroundColor="buttonBackground">
            Kembali ke halaman utama
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Page404;
