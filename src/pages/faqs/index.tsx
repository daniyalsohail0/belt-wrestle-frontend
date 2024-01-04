import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoArrowForwardOutline } from 'react-icons/io5'
import { faqData } from "../../utils/faqData";
import Layout from "../../layout";

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center py-16">
        <br />
        <div className="m-4 p-4 w-11/12 md:w-1/2 shadow-2xl flex flex-col justify-center items-center gap-6">
          <div>
            <h3>Things you probably wonder about Edspare.</h3>
          </div>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`shadow-md w-full p-2 m-2 bg-gray-50 rounded cursor-pointer ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="flex justify-between items-center text-sm py-2">
                <span>{item.question}</span>
                <AiFillCaretDown className="text-black" />
              </div>
              {activeIndex === index && (
                <div className="text-xs py-2">{item.answer}</div>
              )}
            </div>
          ))}
          <button className="bg-black text-white px-4 py-3 flex gap-2 items-center font-semibold text-sm transition-transform transform hover:scale-105 focus:outline-none">
            <span>View More</span>
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Faqs;
