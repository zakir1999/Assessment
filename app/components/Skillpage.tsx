'use client';

import React from 'react';
import styled from 'styled-components';
import { FaReact, FaArrowLeft, FaArrowRight,FaArrowDown } from 'react-icons/fa';
const skills = [
  { title: 'HTML & CSS', rotate: 'none' },
  { title: 'Javascript', rotate: 'rotate-2' },
  { title: 'Webflow', rotate: 'none' },
];


interface CardProps {
  $rotate?: string;
}

const Card = styled.div<CardProps>`
  background: linear-gradient(to bottom right, #3f3f46, #27272a); /* Slate/Gray */
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transform: ${(props) => (props.$rotate === 'rotate-2' ? 'rotate(2deg)' : 'none')};
  transition: transform 0.3s ease;
`;


const ChooseButton = styled.button`
  border: 1px solid white;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: white;
`;

const ArrowButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #555;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
`;

const Highlight = styled.span`
  color: white;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.25rem;
    background: linear-gradient(to right, #b4ff00, #00ff88);
    left: 0;
    bottom: -0.2rem;
    border-radius: 9999px;
  }
`;

export default function SkillsSection() {
  return (
    <section className="min-h-screen w-full bg-black text-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="space-y-4">
                <div className="flex justify-end ">
                      <ArrowButton>
                        <FaArrowDown />
                      </ArrowButton>
                      <ChooseButton> Why Choose me</ChooseButton>
                    </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              My Extensive<br />
              List of <Highlight>Skills</Highlight>
            </h2>
          </div>

          <div className="mt-10 md:mt-0 max-w-md text-gray-300 text-sm md:text-base">
            <p>
              Building the world’s best marketing. Your trusted partner for strategy, design, and dev.
            </p>
            <div className="flex items-center mt-4 gap-4">
              <ArrowButton><FaArrowLeft /></ArrowButton>
              <ArrowButton><FaArrowRight /></ArrowButton>
            </div>
          </div>
        </div>

    
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} $rotate={skill.rotate}>
              <div className="flex flex-col items-center text-center px-6 py-10">
                <FaReact className="text-5xl text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-400 max-w-xs">
                  Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}