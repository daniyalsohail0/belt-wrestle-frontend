import React from "react";

const productData = {
  title: "Custom Wrestling Belt",
  description:
    "Introducing our Custom Wrestling Belt – a symbol of champions and a testament to individuality in the ring. Crafted with precision and care, this exceptional piece allows you to express your unique style and achievements. Whether you're a seasoned professional or an aspiring wrestler, our custom belts are designed to reflect your persona and accomplishments.",
  features: [
    "Personalized Design: Tailor the belt to your taste with customizable plates and straps, ensuring a one-of-a-kind masterpiece.",
    "Premium Materials: Constructed from high-quality materials for durability and a polished finish that shines under the spotlight.",
    "Versatile Options: Choose from a variety of sizes, colors, and materials to create a belt that suits your wrestling persona perfectly.",
    "Craftsmanship: Meticulously crafted by skilled artisans, each belt undergoes thorough quality checks to meet the standards of champions.",
  ],
  weight: "2.5 lbs",
  dimensions: "Length: 48 inches, Width: 8 inches, Thickness: 0.5 inches",
};

const ProductDescription = () => {
  return (
    <div className="py-10 md:px-6 bg-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">
        {productData.title}
      </h1>
      <p className="text-gray-600 mb-4">{productData.description}</p>
      <div className="mb-4">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside">
          {productData.features.map((feature, index) => (
            <li key={index} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          Specifications
        </h2>
        <p className="text-gray-700">
          <strong>Weight:</strong> {productData.weight}
        </p>
        <p className="text-gray-700">
          <strong>Dimensions:</strong> {productData.dimensions}
        </p>
      </div>
      <p className="text-gray-800">
        Wear your victories proudly with our {productData.title}, a symbol of
        your dedication and triumphs in the world of professional wrestling.
        Unleash your personality in the ring and make a statement with a belt
        that's as unique as you are.
      </p>
    </div>
  );
};

export default ProductDescription;
