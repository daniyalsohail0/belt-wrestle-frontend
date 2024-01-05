import React from "react";
import productDefault from '../../../images/productDefault.jpg'

const ImageSlider: React.FC = () => {
  return (
    <img
      src={productDefault}
      alt="product"
      className="w-full object-cover"
    />
  );
};

export default ImageSlider;
