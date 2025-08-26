import React from "react";
import logoFooter from "../../assets/logo-footer.png";
import NewsLetter from "../NewsLetter/NewsLetter";
const Footer = () => {
  return (
    <div className="bg-black mt-[300px]  relative w-cover">
      <div className="flex justify-center">
        <img className="pt-[250px] mb-[40px] " src={logoFooter} alt="" />
      </div>
      <div className="flex justify-around gap-4">
        <div className="w-[350px] px-[50px]">
          <h3 className="text-white text-[18px] font-semibold">About Us</h3>
          <p className="text-[#FFFFFF]/60 text-[16px] font-normal">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="w-[290px]">
          <h3 className="text-white ">Quick Links</h3>
          <ul className="text-[#FFFFFF]/60">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-[384px]">
          <h3 className="text-white">Subscribe</h3>
          <p className="text-[#FFFFFF]/60">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="text-white" action="">
            <input
              className="bg-white text-black"
              type="email"
              name=""
              placeholder="Enter your email"
              id=""
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      {/* <div className="border-b-white pt-[50px]"></div> */}
      <hr  className="text-[#FFFFFF]/30 mt-[50px] mb-[30px] "/>
      <div>
        <p className="text-white text-center pb-5">@2024 Your Company All Rights Reserved.</p>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Footer;
