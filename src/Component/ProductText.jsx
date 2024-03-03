import React from "react";

const ProductText = () => {
  const style = {
    content: {
      color: "black",
      fontSize: "20px",
      fontWeight: "bold",
      width: "400px",
      fontFamily: "Poiret One",
      textAlign: "center",
    },
  };
  return (
    <div>
      <h5 style={style.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        aspernatur consequuntur corporis delectus doloribus eos, expedita facere
        fugit harum impedit ipsam, itaque laudantium maiores maxime minima nobis
        nobis, nobis obcaecati odit officia optio pariatur perferendis quasi
      </h5>
    </div>
  );
};

export default ProductText;
