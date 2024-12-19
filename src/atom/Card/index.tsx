import React, { JSX } from "react";

function Card({
  children,
  className,
  style,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`shadow-greyShade400 py-8 px-6 rounded-[20px] border border-lightGrey ${
        className && className
      }`}
      style={style}
    >
      {children}
    </div>
  );
}

export default Card;
