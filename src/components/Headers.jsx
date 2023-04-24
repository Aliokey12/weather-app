import React from "react";
import { BsSunFill } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container flex items-center justify-between mx-auto">
      <BsSunFill className="w-8 h-8 "/>
        <h1 className="text-xl font-bold">Weather App</h1>
        <div><AiFillCloud className="h-8 w-8"/></div>
      </div>
    </header>
  );
}

export default Header;
