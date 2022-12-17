import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { baseUrl } from "lib/constants/baseUrl";
import { NextSeo } from "next-seo";
import ProjectDetailWrapper from "lib/components/projects/detail";
import { sznmOgImage } from "lib/utils/sznmOgImage";
const PrivacyPolicy = () => {
  return (
    <Box as="article">
      <Box>
      <NextSeo
        title= "Privacy Policy"
        canonical={`${baseUrl}/privacy/`}
        openGraph={{
          title: `Privacy Policy | codenime`,
          images: [
            {
              url: sznmOgImage({
                heading: "Privacy Policy",
                text: "https://codenime.xyz",
              }),
              alt: `Privacy Policy | codenime og-image`,
            },
          ],
        }}
      />

        <Heading as="h1" size="2xl">
          Codenime
        </Heading>
        <Heading as="h2" size="lg">
          Privacy Policy
        </Heading>
      </Box>
      <Box marginY={22}>
        <Text as="p">
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </Text>
        <Text as="p">
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </Text>
        <Text as="p">
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </Text>
        <Text as="p">
          Our app may link to external sites that are not operated by us. Please
          be aware that we have no control over the content and practices of
          these sites, and cannot accept responsibility or liability for their
          respective privacy policies.
        </Text>
        <Text as="p">
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </Text>
        <Text as="p">
          Your continued use of our app will be regarded as acceptance of our
          practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </Text>
        <Text as="p">This policy is effective as of 29 May 2022.</Text>
      </Box>

    </Box>
  );
};

export default PrivacyPolicy;
