import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

export default function FloatingActionButton() {
  return (
    <div className="fixed right-[5%] bottom-[5%] z-50 bg-[#002859] rounded-full p-3 text-white shadow-[0_0_5px_0_#fff]">
      <a href="http://m.me/100089820520694" target="_blank" rel="noreferrer">
        <FaFacebookMessenger className="text-3xl" />
      </a>
    </div>
  );
}
