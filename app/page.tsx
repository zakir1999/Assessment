// pages/index.tsx or pages/index.jsx
"use client";

import React from "react";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function HomePage() {
  return (
   <div
      className="min-h-screen bg-gradient-to-br from-green-100 via-white to-lime-300 p-4 sm:p-6 text-black bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background-image.png')",
        backgroundColor: "white-250",
        backgroundBlendMode: "lighten"
       }}
    >
<header className="flex flex-col sm:flex-row justify-between items-center mt-0 pt-0 pb-4 space-y-4 sm:space-y-0 bg-white/80 backdrop-blur rounded-bl-lg rounded-br-lg border border-gray-300 shadow-lg shadow-gray-400">
  <h1 className="text-2xl font-bold">DEVLOP.ME</h1>
  <nav className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-md font-medium">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Portfolio</a>
    <a href="#">Blog</a>
  </nav>
  <CustomButton title="Start Project" icon={<FaArrowRight />} />
</header>

      <main className="mt-16 sm:mt-20 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold">
          Trusted <Highlight>Partner</Highlight> for <br className="hidden sm:block" /> Your Website <Highlight>Develop.</Highlight>
        </h2>

        <div className="max-w-2xl mx-auto border border-red-400 p-4 text-sm sm:text-md font-medium">
          <p>
            Building the world’s best marketing websites for over a decade. <br />
            Your trusted partner for strategy, design, and dev.
          </p>
          
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
<CustomButton title="Schedule a Call" icon={<FaPhoneAlt />} />
         
        </div>

        
      </main>

      <footer className="mt-16 text-sm text-gray-500 text-center">@williamroy</footer>
    </div>
  );
}

const Highlight = styled.span`
  background-color: black;
  color: white;
  padding: 0 0.5rem;
`;

const CircleIcon = styled.div`
  background-color: #000;
  color: #fff;
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Badge = ({ name }: { name: string }) => (
  <span className="bg-yellow-300 border border-black text-black px-2 py-1 rounded-md text-xs sm:text-sm">
    {name}
  </span>
);
interface CustomButtonProps {
  title: string;
  icon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, icon }) => {
  return (
    <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-full">
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
};