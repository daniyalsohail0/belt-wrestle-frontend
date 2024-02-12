import React from "react";
import Layout from "../../layout";
import ContactForm from "../../component/pages/ContactForm/ContactForm";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const CoctactUs: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start w-11/12">
          <div className="p-8 text-[#0E0B3D] md:w-1/2">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <h2 className="text-gray-700 py-2 font-semibold">Get in touch</h2>
            <br />
            <p className="md:w-4/5">
              Thank you for your interest in reaching out to us. Whether you
              have a question, suggestion, or feedback, we're here to assist
              you. Please feel free to contact us using the information provided
              below or by filling out the contact form.
            </p>
            <br />
            <div className="flex flex-col gap-3 mt-4">
              <span className="flex items-center gap-4 text-sm">
                <AiFillMail /> <span className="font-semibold">Email:</span> info@beltwrestle.com
              </span>
              <span className="flex items-center gap-4 text-sm">
                <BsFillTelephoneFill /> <span className="font-semibold">Phone:</span> 02086746297
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Business Hours:</h3>
              <br />
              <p className="text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-sm">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>
          <div className="md:w-1/2 w-11/12 p-4 m-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoctactUs;
