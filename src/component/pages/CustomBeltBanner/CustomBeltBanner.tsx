import React from "react";
import customBelt from "../../../images/trophysmack-ultimate-6lb-custom-championship-belt-30797497794621_1200x1200.webp";

const CustomBeltBanner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:flex gap-8 items-center m-6 p-2">
        <div className="md:w-1/2">
          <img src={customBelt} alt="custom belt" />
        </div>
        <div className="md:w-1/2">
          <h1>Create Your Own Custom Belt</h1>
          <p>
            At Belt Wrestle, we offer a diverse range of custom championship
            belts that cater to varying preferences in design, sizes, and
            patterns. Our custom championship belts are entirely customizable,
            allowing you to personalize elements such as the leather strap,
            plate material, plate size, plate design, and color schemes used for
            the paint job.
          </p>
          <p>
            The customization options for our championship belts are extensive,
            giving you the flexibility to create a unique and personalized
            wrestling accessory. Prices for our custom championship belts start
            from $199 and go up to $1999, offering a range of options to suit
            different budgets.
          </p>
          <p>
            For detailed instructions on customizing your championship belt,
            feel free to reach out to us through our live chat or email.
            Additionally, you can explore our Customized Championship Belts
            collection to discover more than 200 customizable designs that can
            serve as inspiration for your unique creation.
          </p>
          <button className="bg-black text-white text-sm px-4 py-3 transition-transform transform hover:scale-105 focus:outline-none duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomBeltBanner;
