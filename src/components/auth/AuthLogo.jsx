import React from "react";

function AuthLogo() {
  return (
    <div className="hidden md:flex relative flex-1 flex-col items-center justify-center gap-5">
      <div className="relative w-full flex justify-end">
        {/* Logo image */}
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-auto max-w-[744px] h-auto mb-4 z-50"
        />

        {/* Logo text */}
        <div className="absolute bottom-[29%] left-1/2 -translate-x-1/2 flex items-end gap-[0.1em]">
          <span className="text-black font-medium tracking-[-0.02em] leading-none text-[64px] md:text-[80px] font-logo">
            meet
          </span>
          <span className="text-black font-medium tracking-[-0.02em] leading-none text-[64px] md:text-[80px] font-logo">
            us
          </span>
          <span className="ml-2 text-black font-medium tracking-[-0.02em] leading-none text-[28px] md:text-[32px] font-logo self-start -translate-y-1 md:-translate-y-1.5">
            VR
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthLogo;
