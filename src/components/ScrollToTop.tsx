"use client";
import React from "react";
import "../app/styles/scrollToTop.scss";

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="scroll-to-top">
      <span onClick={handleClick}>➽</span>
    </div>
  );
}
