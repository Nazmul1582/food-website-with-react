import React, { useState } from "react";
import Button from "../Button";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroSection,
  HeroContent,
  HeroHeading,
  HeroDesc,
  HeroWrap,
} from "./HeroElements";

export default function Hero({ changeTheme, lightMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroSection>
      <Navbar changeTheme={changeTheme} lightMode={lightMode} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroWrap>
        <HeroContent>
          <HeroHeading>Greatest Pizza Ever</HeroHeading>
          <HeroDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            laborum, ut odit tempore blanditiis modi!
          </HeroDesc>
          <Button>Place Order</Button>
        </HeroContent>
      </HeroWrap>
    </HeroSection>
  );
}
