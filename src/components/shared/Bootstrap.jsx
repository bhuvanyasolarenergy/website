/* eslint-disable react/prop-types */
"use client";
import { useEffect } from "react";
import WhatsAppFloating from "./WhatsAppFloating";

const Bootstrap = ({ children }) => {
  useEffect(() => {
    import("bootstrap");
    document.body.scrollTo(0, 0);
  }, []);
  return (
    <>
      {children}
      <WhatsAppFloating />
    </>
  );
};

export default Bootstrap;
