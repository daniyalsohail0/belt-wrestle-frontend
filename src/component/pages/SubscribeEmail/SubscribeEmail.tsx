import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubscribeEmail: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<string>("Subscribe");
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSubscribe = () => {
    setEmail("");
    setSubmitted("Subscribed"); // Set to "Subscribed" immediately

    // Reset the subscription status to "Subscribe" after 1 second
    setTimeout(() => {
      setSubmitted("Subscribe");
    }, 1000);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center mt-6 py-6">
      <h1 className="text-center p-6 text-2xl font-bold uppercase">
        Join the universal club
      </h1>
      <p className="text-center text-sm">
        Subscribe if you want to get latest updates in your inbox!
      </p>
      <form className="my-3 px-3">
        <div className="flex justify-center items-center gap-2 my-2">
          <label className="flex items-center">
            <input
              type="radio"
              className="h-4 w-4 border-gray-300 rounded checked:bg-gray-600 checked:border-none focus:ring-gray-500"
              checked={selectedOption === "Patches"}
              onChange={() => handleOptionChange("Patches")}
            />
            <span className="ml-2 text-sm font-semibold">Custom Belts</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              className="h-4 w-4 border-gray-300 rounded checked:bg-gray-600 checked:border-none checked:ring-gray-500"
              checked={selectedOption === "Keychains"}
              onChange={() => handleOptionChange("Keychains")}
            />
            <span className="ml-2 text-sm font-semibold">Ready Made Belts</span>
          </label>
        </div>
        <label className="flex gap-2 my-3">
          <input type="checkbox" />
          <span className="text-xs">
            Allow brands to reach out to you for future offers and discounts.
          </span>
        </label>
      </form>
      <div className="flex gap-4 bg-white px-2 py-2 shadow-xl rounded">
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="focus:outline-none p-2 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="px-4 py-3 bg-[#0F0F0F] rounded text-white font-bold uppercase transition-transform transform hover:scale-105 focus:outline-none duration-200 w-full mt-auto bottom-0 text-sm"
        >
          {submitted}
        </button>
      </div>
      <br />
      <p className="text-xs font-bold">
        By subscribing you agree to our{" "}
        <Link to={`/policies/privacy-policy`} className="text-blue-700 underline">Privacy Policy</Link>
      </p>
      <br />
    </div>
  );
};

export default SubscribeEmail;
