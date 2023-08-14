import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1980px] mx-auto px-4 text-white bg-gray-800">
      <h1 className="w-full text-3xl font-bold text-white">
        <Link href="/">SevenBootcamp</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4">
          <Link href="/cursos">Cursos</Link>
        </li>
        <li className="p-4">
          <Link href="/empresa">Empresa</Link>
        </li>
        <li className="p-4">
          <Link href="/login">Login</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-800 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4">
          <Link href="/">7Bootcamp</Link>
        </h1>
        <li className="p-4 border-b border-gray-600">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link href="/cursos">Cursos</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link href="/empresa">Empresa</Link>
        </li>
        <li className="p-4">
          <Link href="/sobre">Sobre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
