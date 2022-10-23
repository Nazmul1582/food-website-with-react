import React from "react";
import Button from "../Button";
import {
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductsContainer,
  ProductsHeading,
  ProductsSection,
  ProductsWrap,
} from "./ProductElements";

export default function Products({ data, heading }) {
  return (
    <ProductsSection>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductsWrap>
          {data.map((product, index) => (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <Button>{product.button}</Button>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsWrap>
      </ProductsContainer>
    </ProductsSection>
  );
}
