import React from "react";
import WingmanLogo from "@/assets/logo/wingman-coloured-logo.svg";
import Image from "next/image";

interface LoaderProps {
  type?: "pageLoader" | "fullLoader" | "component";
  loaderStyle?: { [key: string]: string };
  loading?: boolean;
}

const Loader = (props: LoaderProps) => {
  const { type = "fullLoader", loading = false } = props;
  const isPageloader = type === "pageLoader";
  const isComponentLoader = type === "component";

  if (!loading) {
    return null;
  }

  return (
    <div className="relative">
      {isComponentLoader && (
        <div className="flex justify-center items-center">
          <Image
            src={WingmanLogo}
            alt="Wingman Logo"
            width={50}
            height={50}
            priority
            className="w-20 h-20 animate-flip"
          />
        </div>
      )}
      <div
        className={`fixed inset-0 flex justify-center items-center ${
          isPageloader ? "bg-black/50" : "bg-white"
        } z-10`}
      >
        <div className="animate-flip">
          <Image
            src={WingmanLogo}
            alt="Wingman Logo"
            width={50}
            height={50}
            priority
            className="w-20 h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
