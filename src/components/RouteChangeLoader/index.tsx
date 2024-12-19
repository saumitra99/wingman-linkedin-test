"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/atom/Loader";

const RouteChangeLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <Loader loading />}
      {children}
    </>
  );
};

export default RouteChangeLoader;
