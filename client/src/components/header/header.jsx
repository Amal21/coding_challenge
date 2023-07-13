import React from "react";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <nav className="bg-gray-100 border-gray-800 px-4 lg:px-6 py-2.5 overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a className="flex items-center">
          <img src={Logo} className="h-11 sm:h-8" alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
