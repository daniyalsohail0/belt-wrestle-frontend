import React from "react";
import productDefault from '../../../images/il_794xN.5417743832_8sly.webp'

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
