import React from "react";
import Layout from "../../layout";
import ContactForm from "../../component/pages/ContactForm/ContactForm";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill, BsPhone } from "react-icons/bs";

const CoctactUs: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start w-11/12">
          <div className="p-8 text-[#0E0B3D] md:w-1/2">
            <h1>Contact Us</h1>
            <h2>Get in touch</h2>
            <br />
            <p className="md:w-3/5">
              Lorem ipsum dolor sit amet consectetur. Donec porttitor mattis
              integer viverra. Tellus in ut malesuada dictum id ultrices
              senectus ultrices nam. Quisque arcu at metus pellentesque. Gravida
              risus cras congue egestas viverra maecenas morbi.
            </p>
            <br />
            <div className="flex flex-col gap-3 mt-4">
              <span className="flex items-center gap-4">
                <AiFillMail /> info@beltwrestle.com
              </span>
              <span className="flex items-center gap-4">
                <BsFillTelephoneFill /> 02086746297
              </span>
              <span className="flex items-center gap-4">
                <BsPhone /> +44 7946 087069
              </span>
              <span className="flex items-center gap-4">
                <BsPhone /> +234-8023-2396-33
              </span>
            </div>
          </div>
          <div className="md:w-1/2 w-11/12">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoctactUs;
