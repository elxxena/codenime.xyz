import {
  Box,
  Button,
  Code,
  createStandaloneToast,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import type { Options } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import HeadingLink from "./HeadingLink";

const { toast } = createStandaloneToast();

export const renderers: Options["components"] = {
  code: ({ inline, className, children, ...props }) => {
    /** https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight */
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1];
    const childrenValue = String(children).replace(/\n$/, "");
    const toastId = childrenValue.substring(0, 10);

    return !inline && match ? (
      <Box width="100%" mb={4}>
        <SyntaxHighlighter
          language={language}
          style={dracula}
          showLineNumbers={false}
        >
          {childrenValue}
        </SyntaxHighlighter>
      </Box>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  a: ({ href, children }) => {
    return (
      <ChakraLink href={href} isExternal wordBreak="break-word">
        {children}
      </ChakraLink>
    );
  },
  h1: ({ children }) => <HeadingLink as="h1">{String(children)}</HeadingLink>,
  h2: ({ children }) => <HeadingLink as="h2">{String(children)}</HeadingLink>,
  h3: ({ children }) => <HeadingLink as="h3">{String(children)}</HeadingLink>,
  h4: ({ children }) => <HeadingLink as="h4">{String(children)}</HeadingLink>,
  h5: ({ children }) => <HeadingLink as="h5">{String(children)}</HeadingLink>,
  h6: ({ children }) => <HeadingLink as="h6">{String(children)}</HeadingLink>,
};
