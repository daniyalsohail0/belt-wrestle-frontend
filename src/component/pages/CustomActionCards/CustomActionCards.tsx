import React from "react";
import "./CustomActions.css";

const CustomActionCards: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex md:flex-row flex-col w-11/12 justify-between gap-6">
        <div className="bg-black text-white p-6 m-2 patches-bg h-96">
          <h1 className="text-xl font-semibold">Custom Made Patches</h1>
          <br />
          <p className="text-xs">
            Shop our wide selection of stock moral patches or make your own
          </p>
          <br />
          <button className="bg-[#379237] rounded transform transition-transform duration-200 ease-in-out hover:scale-105 px-3 py-2 text-sm font-semibold">
            Get a quote
          </button>
        </div>
        <div className="bg-black text-white p-6 m-2 stickers-bg h-96">
          <h1 className="text-xl font-semibold">Custom Made Stickers</h1>
          <br />
          <p className="text-xs">
            Shop our wide selection of stock moral patches or make your own
          </p>
          <br />
          <button className="bg-[#379237] rounded transform transition-transform duration-200 ease-in-out hover:scale-105 px-3 py-2 text-sm font-semibold">
            Get a quote
          </button>
        </div>
        <div className="bg-black text-white p-6 m-2 merchandise-bg h-96">
          <h1 className="text-xl font-semibold">Shop our merchandise</h1>
          <br />
          <p className="text-xs">
            Shop our wide selection of stock moral patches or make your own
          </p>
          <br />
          <button className="bg-[#379237] rounded transform transition-transform duration-200 ease-in-out hover:scale-105 px-3 py-2 text-sm font-semibold">
            Get a quote
          </button>
        </div>
      </div>
      <br />
      <div className="flex md:flex-row flex-col justify-between items-center w-11/12 text-sm gap-8">
        <div className="flex items-center gap-8 md:w-1/2 w-11/12 border-[1px] border-solid border-gray-300 p-2 m-2">
          <img
            src="https://i.etsystatic.com/6608809/r/il/dc7e1a/1272062116/il_570xN.1272062116_j2r4.jpg"
            alt="UK patch"
            width={100}
          />
          <div>
            <h3 className="py-2 font-semibold">Made in the UK</h3>
            <p>
              Our Printed, Laser Cut, Heat Press, and Embroidered Patches are
              all made by our team right here in the UK.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 md:w-1/2 w-11/12 border-[1px] border-solid border-gray-300 p-2 m-2">
          <img
            src="https://cdn.globalso.com/odfsolution/10%E7%B1%B3%E4%B8%BB%E5%9B%BE.jpg"
            alt="Machine"
            width={100}
          />
          <div>
            <h3 className="py-2 font-semibold">High Tech Equipment</h3>
            <p>
              Our facility utilizes the latest in high-tech machinery to
              customize your products quickly and accurately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomActionCards;
