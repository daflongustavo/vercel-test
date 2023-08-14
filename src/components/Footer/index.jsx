import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr></hr>
      <div className="bg-slate-800 w-full flex justify-between items-center p-5 text-white">
        <p className="font-bold">7 Clouds Academy</p>
        <div className="flex items-start justify-between">
          <a
            href="https://www.linkedin.com/company/7cloudstech/"
            target="blank"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/sevencloudstech/" target="blank">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.youtube.com/@7cloudslegacy724" target="blank">
            <FaYoutube size={30} />
          </a>
        </div>
        <p className="text-sm">Copyright © 2023 </p>
      </div>
    </>
  );
};

export default Footer;
