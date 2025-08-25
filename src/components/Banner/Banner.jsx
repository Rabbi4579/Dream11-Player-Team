import React from "react";
import shadow from "../../assets/bg-shadow.png";
import banner from "../../assets/banner-main.png";
const Banner = ({handleCoins}) => {
  return (
    <div className="bg-black h-[545px] mb-15">
      <div
        className=" h-[545px] w-full  bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${shadow})` }}
      >
        
          <img className="mb-6" src={banner} alt="" />
          <h2 className="text-[#ffff] text-[40px] font-bold mb-2">Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <p className="text-[#ffff] text-[24px] font-medium">Beyond Boundaries Beyond Limits</p>
          <button onClick={handleCoins} className="bg-[#E7FE29] py-2 px-4 rounded-md mt-3 text-[16px] text-[#131313] font-bold ring-1 ring-[#E7FE29] ring-offset-4 ring-offset-black">Claim Free Credit</button>
        
      </div>
    </div>
  );
};

export default Banner;
