import React from "react";

function HeaderLogin() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h1 className="text-3xl md:text-[56ppx] font-normal text-[#1A1A1E] ">
        Welcome back
      </h1>
      <p className="text-base md:text-lg text-[#62626B] text-center max-w-md">
        Step into our shopping metaverse for an unforgettable shopping
        experience
      </p>
    </div>
  );
}

export default HeaderLogin;
