import React, { useState } from "react";

const SubscribeEmail: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = () => {
    console.log(email);
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-[300px]">
      <h1>Subscribe For Our Giveaways!</h1>
      <div className="flex gap-4 bg-white px-4 py-2 shadow-xl">
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="focus:outline-none p-2 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="px-4 py-3 bg-black text-white transition-transform transform hover:scale-105 focus:outline-none duration-200 w-full mt-auto bottom-0 text-sm"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeEmail;
