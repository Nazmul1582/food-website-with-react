import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Logo from "../Logo";
import {
  FooterContainer,
  FooterWrap,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElement";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <Logo />
        <SocialIcons>
          <SocialIconsLink to="/" target="_black">
            <FaFacebook />
          </SocialIconsLink>
          <SocialIconsLink to="/" target="_black">
            <FaYoutube />
          </SocialIconsLink>
          <SocialIconsLink to="/" target="_black">
            <FaInstagram />
          </SocialIconsLink>
          <SocialIconsLink to="/" target="_black">
            <FaTwitter />
          </SocialIconsLink>
          <SocialIconsLink to="/" target="_black">
            <FaLinkedin />
          </SocialIconsLink>
        </SocialIcons>
      </FooterWrap>
    </FooterContainer>
  );
}
