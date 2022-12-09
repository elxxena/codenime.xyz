import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaMedium,
  FaProductHunt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import type { MotionLinkProps } from "./types";

export const socialLinks: Array<MotionLinkProps> = [
  {
    platformName: "GitHub",
    url: "https://github.com/4ndrexyz",
    icon: FaGithub,
  },
  {
    platformName: "LinkedIn",
    url: "www.linkedin.com/in/4ndrexyz",
    icon: FaLinkedin,
  },
  {
    platformName: "Twitter",
    url: "https://twitter.com/andrexyz_",
    icon: FaTwitter,
  },
  {
    platformName: "Instagram",
    url: "https://instagram.com/4ndrexyz",
    icon: FaInstagram,
  },
  {
    platformName: "Dribbble",
    url: "https://dribbble.com/designandrefirmansah",
    icon: FaDribbble,
  },
  {
    platformName: "e-mail",
    url: "mailto:andrekusuma388@gmail.com?cc=Andre Firmansah",
    icon: FaEnvelope,
  },
];
