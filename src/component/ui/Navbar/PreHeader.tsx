import React from "react";

const PreHeader: React.FC = () => {
  return (
    <div className="bg-gray-300 flex justify-between items-center bg-gray-100 small-text p-2 w-full">
      <div>
        <span className="underline small-text">Claim 30% Off Promo!</span>
      </div>
      <div>
        <ul className="flex gap-1">
          <li className="underline cursor-pointer">Affiliate Program</li>
          <li>|</li>
          <li className="underline cursor-pointer">Help</li>
          <li>|</li>
          <li className="underline cursor-pointer">Join Us</li>
          <li>|</li>
          <li className="underline cursor-pointer">Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default PreHeader;
