"use client";

import AOS from "aos";
import React, { useEffect } from "react";

interface AosProps {
  children: React.ReactNode;
}
function AOSProvider({ children }: AosProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
}

export default AOSProvider;
