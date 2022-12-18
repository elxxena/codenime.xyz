import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { baseUrl } from "lib/constants/baseUrl";
import { NextSeo } from "next-seo";
const PrivacyPolicy = () => {
  return (
    <Box as="article">
      <Box>
      <NextSeo
        title="Privacy Policy"
        canonical={`${baseUrl}/privacy`}
        openGraph={{
          title: "Privacy Policy",
          description: "Privacy Policy Codenime",
        }}
      />

        <Heading as="h1" size="2xl">
          Privacy Policy for Codenime
        </Heading>

      </Box>
      <Box marginY={22}>
        <Text as="p">
        At codenime, accessible from https://codenime.xyz/, one of our main priorities is 
        the privacy of our visitors. This Privacy Policy document contains types of 
        information that is collected and recorded by codenime and how we use it
        </Text>

        <Text as="p">
        If you have additional questions or require more information about our Privacy Policy, 
        do not hesitate to contact us.
        </Text>

        <Heading as="h3">
          Log Files
        </Heading>

        <Text as="p">
        codenime follows a standard procedure of using log files. 
        These files log visitors when they visit websites. 
        All hosting companies do this and a part of hosting services' analytics. 
        The information collected by log files include internet protocol (IP) addresses, 
        browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, 
        and possibly the number of clicks. These are not linked to any information that is 
        personally identifiable. The purpose of the information is for analyzing trends, 
        administering the site, tracking users' movement on the website, and gathering demographic 
        information. Our Privacy Policy was created with the help of the Privacy Policy Generator.
        </Text>

        <Heading as="h3">
          Privacy Policies
        </Heading>

        <Text as="p">
        You may consult this list to find the Privacy Policy for each of the advertising 
        partners of codenime.
        </Text>

        <Text as="p">Third-party ad servers or ad networks uses technologies like cookies, 
        JavaScript, or Web Beacons that are used in their respective advertisements and links 
        that appear on codenime, which are sent directly to users' browser. 
        They automatically receive your IP address when this occurs. 
        These technologies are used to measure the effectiveness of their advertising 
        campaigns and/or to personalize the advertising content that you see on websites 
        that you visit.
        </Text>


        <Text as="p">
        Note that codenime has no access to or control over these cookies that are used by third-party advertisers.
        </Text>

        <Heading as="h3">
          Third Party Privacy Policies
        </Heading>

        <Text as="p">
        codenime's Privacy Policy does not apply to other advertisers or websites. 
        Thus, we are advising you to consult the respective Privacy Policies of these 
        third-party ad servers for more detailed information. It may include their practices 
        and instructions about how to opt-out of certain options.
        </Text>

        <Text as="p">
        You can choose to disable cookies through your individual browser options. 
        To know more detailed information about cookie management with specific web browsers, 
        it can be found at the browsers' respective websites. What Are Cookies?
        </Text>

        <Heading as="h3">
          Children's Information
        </Heading>

        <Text as="p">
        Another part of our priority is adding protection for children while using the internet. 
        We encourage parents and guardians to observe, participate in, and/or monitor and guide 
        their online activity.
        </Text>

        <Text as="p">
        codenime does not knowingly collect any Personal Identifiable Information from 
        children under the age of 13. If you think that your child provided this kind 
        of information on our website, we strongly encourage you to contact us immediately 
        and we will do our best efforts to promptly remove such information from our records.
        </Text>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
