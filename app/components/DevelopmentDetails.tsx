"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import styled from "styled-components";
const brands = [
  {
    name: "awwwards.",
    deg: "-20deg",
    position: "top-0 left-[10%] z-10",
    bg: "dark",
  },
  {
    name: "CSSWINNER",
    deg: "0deg",
    position: "top-[60px] left-[2%] z-0",
    bg: "",
  },
  {
    name: "thoughtworks",
    deg: "-10deg",
    position: "top-[70px] left-[32%] z-0",
    bg: "",
  },
  { name: "facebook", deg: "0deg", position: "top-0 left-[45%] z-0", bg: "" },
  {
    name: "AUTODESK",
    deg: "0deg",
    position: "top-[75px] left-[50%] z-0",
    bg: "",
  },
  {
    name: "CSSDesignAwards",
    deg: "12deg",
    position: "top-[10px] left-[70%] z-0",
    bg: "",
  },
];
const ArrowButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #555;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: black;
`;
const ChooseButton = styled.button`
  border: 1px solid black;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: black;
`;
export default function DevlopmentDetails() {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center px-6 py-20 text-black"
      style={{
        backgroundImage: "url('/images/background-image.png')",
        backgroundColor: "white-250",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="flex justify-end ">
          <ArrowButton>
            <FaArrowDown />
          </ArrowButton>
          <ChooseButton> About</ChooseButton>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          I’ve been{" "}
          <span className="bg-black text-white px-2 py-1 rounded-md">
            Developing
          </span>
          <br />
          Websites since{" "}
          <span className="bg-black text-white px-3 py-1 rounded-md">2013</span>
        </h1>

        <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-700">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>

        <div className="mt-16 text-left">
          <h3 className="font-bold text-md sm:text-lg mb-6">
            PREVIOUSLY WORKED ON
          </h3>
          <div className="relative w-full h-[160px]">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`absolute border border-black text-sm font-semibold px-6 py-3 rounded-full shadow-md whitespace-nowrap min-w-[140px] flex items-center justify-center h-[52px] ${brand.position} ${brand.bg}`}
                style={{
                  fontFamily: "Arial, sans-serif",
                  transform: `rotate(${brand.deg})`,
                  backgroundColor: brand.bg === "dark" ? "#000" : "#fff",
                  color: brand.bg === "dark" ? "#fff" : "#000",
                }}
              >
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}