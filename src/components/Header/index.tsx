"use client";
import React, { JSX } from "react";
// import circlechessLogo from "@/assets/logos/cc-logo-full.png";
// import CCCoin from "@/atom/CCCoin";
type HeaderProps = {
  content: JSX.Element | JSX.Element[];
};
function Header({ content }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 px-10 py-3 bg-white border-b border-grey">
      {content}
      {/* <div className="bg-white w-full p-2.5 flex justify-between">
        <div style={{ width: "12%" }}>
          <CCText>Header</CCText>
          <Tabs />
          <Image
            src={circlechessLogo}
            alt="circle-chess"
            layout="responsive"
            width={100}
            height={300}
          />
        </div>
        <div className="flex justify-end items-center">
          <div className="flex-col mx-3">
            <CCText className="text-xs text-right"> Saumitra Tiwari</CCText>
            <CCText className="text-xs text-right flex gap-1">
              Beginner | <CCCoin /> 1,250 pts{" "}
            </CCText>
          </div>
          <div className="flex items-center">
            <div className="rounded-full w-10 h-10 bg-grey"></div>
          </div>
        </div>
      </div> */}
    </header>
  );
}

export default Header;
