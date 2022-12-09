import type { BoxProps } from "@chakra-ui/react";
import { useColorModeValue, Heading, Link, Text } from "@chakra-ui/react";

import MotionBox from "lib/components/motion/MotionBox";
import { EVENT_TYPE_LINK } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

const textProps: BoxProps = {
  marginY: 4,
};

const Content = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const handleClickInstagramLink = () => {
    trackEvent({
      eventName: "About: Click Instagram Link",
      eventData: { type: EVENT_TYPE_LINK },
    });
  };

  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Heading size="lg">About me 🤔</Heading>

      <Text {...{ ...textProps, textColor }}>
        Nama saya Andre Kusuma Firmansah biasa dipanggil Andre, 
        Saya merupakan lulusan dari SMK Negeri 9 Kota Semarang jurusan Informatika. 
        memiliki kemampuan dalam bidang desain dan coding. 
      </Text>

      <Text {...{ ...textProps, textColor }}>
        Dan saya juga suka anime 🤤
      </Text>
    </MotionBox>
  );
};

export default Content;
