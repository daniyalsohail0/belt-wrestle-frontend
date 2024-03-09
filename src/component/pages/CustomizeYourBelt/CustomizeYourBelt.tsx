import React from "react";
import customizedBelt from "../../../images/custombelt.jpg";
import { Link } from "react-router-dom";
const CustomizeYourBelt: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 flex md:flex-row flex-col justify-center">
        <div className="md:w-1/2 w-11/12 flex justify-center items-center">
          <img src={customizedBelt} className="md:w-[600px] w-[300px]" alt="customized belt" />
        </div>
        <div className="md:w-1/2 w-11/12 md:m-4 md:p-4">
          <h1 className="text-4xl font-bold uppercase p-4">
            CUSTOMIZED CHAMPIONSHIP BELTS
          </h1>
          <p className="text-sm p-4">
            At Belt Wrestle, we specialize in crafting personalized championship
            belts that boast unique designs, sizes, and patterns. Our
            championship belts are fully customizable, allowing you to tailor
            the leather strap, plate material, plate size, plate design, and
            color schemes used for the paint job. Prices for our custom
            championship belts range from £199 to £1999, ensuring there's an
            option for every budget. For detailed instructions on how to
            customize your championship belt, feel free to reach out to us via
            live chat or email. Additionally, you're invited to explore our
            extensive collection of over 200 customizable designs for
            inspiration.
          </p>
          <p className="text-sm p-4">
            In addition to our wide range of custom championship belts, Belt
            Wrestle also offers personalized design services to ensure that your
            belt reflects your unique style and preferences. Whether you're
            looking for specific patterns, sizes, or color schemes, our team is
            dedicated to bringing your vision to life. With over 200
            customizable designs to choose from in our collection, you're sure
            to find the perfect belt to showcase your achievements in the ring.
            Explore our website today to discover the endless possibilities for
            creating your own custom championship belt with Belt Wrestle.
          </p>
          <Link to={`/customized-belts`} className="p-4">
            <button className="text-sm font-semibold px-4 py-3 bg-black text-white transition-transform transform hover:scale-105">
              View Custom Belts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomizeYourBelt;
