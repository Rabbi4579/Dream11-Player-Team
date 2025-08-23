import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBitcoin } from "react-icons/fa";

const Header = ({coin}) => {

  


  return (
    <header className="fixed top-0 left-0 w-full bg-white px-5 py-4">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
        <div>
          <img className="w-[73px]" src={logo} alt="Logo" />
        </div>

        <ul className="flex items-center gap-7">
          <li className="text-[16px] text-[rgba(19,19,19,0.7)] font-normal">
            <a href="">Home</a>
          </li>
          <li className="text-[16px] text-[rgba(19,19,19,0.7)] font-normal">
            <a href="">Fixture</a>
          </li>
          <li className="text-[16px] text-[rgba(19,19,19,0.7)] font-normal">
            <a href="">Teams</a>
          </li>
          <li className="text-[16px] text-[rgba(19,19,19,0.7)] font-normal">
            <a href="">Schedules</a>
          </li>

          <div className="border border-gray-300 px-5 py-2 rounded-md text-[#131313] font-semibold text-[20px] flex items-center gap-2">
            {coin} Coin <FaBitcoin className="text-yellow-400 text-2xl" />
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
