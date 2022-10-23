import React from "react";
import Button from "../Button";
import { FeatureSection, FeatureContent } from "./FeatureElements";

export default function Feature() {
  return (
    <FeatureSection>
      <FeatureContent>
        <h2>Free Delivery With PIZZA OF THE DAY</h2>
        <h3>Only 8.99 USD</h3>
        <Button>Shop Now</Button>
      </FeatureContent>
    </FeatureSection>
  );
}
