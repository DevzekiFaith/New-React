import React from "react";
import ProductImage from "./ProductImage";
import ProductBtn from "./ProductBtn";
import ProductPrice from "./ProductPrice";
import ProductText from "./ProductText";

function ProductCard() {
  const style = {
    head: {
      fontFamily: "Poiret One",
      textTransform: "uppercase",
      marginLeft: "10px",
    },
    container: {
      borderRadius: "16px",
      width: "400px",
      marginBottom: "25px",
      padding: "5px 0",
      display: "grid",
      gridTemplateColumns: "repeat(3,  1fr)",
      gridGap: "10px",
      marginLeft:"8rem"
    },
  };
  return (
    <div style={style.container}>
      <div>
        <h1 style={style.head}>Product Card</h1>
        <ProductImage />
        <ProductText />
        <ProductPrice />
        <ProductBtn />
      </div>
      <div >
        <h1 style={style.head}>Product Card</h1>
        <ProductImage />
        <ProductText />
        <ProductPrice />
        <ProductBtn />
      </div>
      <div>
        <h1 style={style.head}>Product Card</h1>
        <ProductImage />
        <ProductText />
        <ProductPrice />
        <ProductBtn />
      </div>
    </div>
  );
}

export default ProductCard;
