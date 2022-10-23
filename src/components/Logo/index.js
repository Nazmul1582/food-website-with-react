import React from "react";
import logo from "../../assets/images/logo.png";
import { LogoRoute } from "./LogoElements";

export default function Logo() {
  return (
    <LogoRoute to="/">
      <img src={logo} alt="" />
      <span>Pizza</span>
    </LogoRoute>
  );
}
