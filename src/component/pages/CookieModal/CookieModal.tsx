import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useDispatch } from "react-redux";
import { accepted } from "../../../state/cookies/cookieSlice";

const CookieModal: React.FC = () => {
  const state = useSelector((state: RootState) => state.cookies)
  const dispatch = useDispatch();

  const [active, setActive] = useState<boolean>(state.modalOpen);

  const handleClose = () => {
    dispatch(accepted())
    setActive(false)
  }

  if (!active) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-white p-3 m-4 md:w-1/3 w-11/12">
        <h4>Cookie Notice</h4>
        <p className="text-xs">
          Welcome to our website! In order to provide you with the best possible
          experience, we use cookies. These small pieces of data are stored on
          your device and help us understand how you interact with our site. By
          continuing to browse, you are giving us your consent to utilize these
          cookies.
        </p>
        <p className="text-xs">
          If you're curious about how we handle your data and protect your
          privacy, please take a moment to explore our Privacy Policy. It
          provides detailed information on the types of data we collect, how we
          use it, and the measures we take to keep your information secure.{" "}
          <a href="/privacy-policy" className="text-blue-500">
            Learn more
          </a>
        </p>
        <div className="flex w-full gap-4">
          <button className="bg-red-500 text-white transform transition-transform hover:scale-105 px-4 py-2 w-full" onClick={handleClose}>
            Decline
          </button>
          <button className="bg-black text-white transform transition-transform hover:scale-105 px-4 py-2 w-full" onClick={handleClose}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
