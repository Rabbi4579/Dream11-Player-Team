import React from "react";

const NewsLetter = () => {
  return (
    <div className=" flex justify-center ">
      <div className="h-[384px] bg-amber-600 absolute top-[-180px] w-[1340px] mx-200px  bg-gradient-to-tr from-blue-200 via-white to-yellow-200 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-[32px] font-bold text-[#131313]">
            Subscribe to our Newsletter
          </h2>
          <p className="text-[#131313]/70 text-[20px] font-medium">
            Get the latest updates and news right in your inbox!
          </p>
          <form action="">
            <input className="w-[400px] p-3 border border-[#131313]/15 rounded-md" type="email" name="" placeholder="Enter your email" id="" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
