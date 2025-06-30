import React from "react";
import { FaArrowDown } from "react-icons/fa";
const workProcess = [
  {
    title: "Discovery",
    desc: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    highlight: false,
  },
  {
    title: "Strategy",
    desc: "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    highlight: true,
  },
  {
    title: "Design",
    desc: "After we have a comprehensive understanding of your brand, we’ll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    highlight: false,
  },
  {
    title: "Build",
    desc: "Whether we’ve just finished designing your new site or you’re handing off finished designs for us to develop in Webflow, we’re here to apply our trusted development process to your project.",
    highlight: false,
  },
];

export default function WorkProcessSection() {
  return (
    <section className="min-h-screen w-full bg-black px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto">
   
        <div className="flex items-center justify-between mb-10">
          <button className="flex items-center gap-2 border border-white px-4 py-1 rounded-full text-sm font-medium">
            <FaArrowDown /> Work Process
          </button>
          <h2 className="text-3xl sm:text-4xl font-bold mx-auto">My Work Process</h2>
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          {workProcess.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl relative ${item.highlight ? 'bg-lime-300 text-black rotate-2' : 'bg-zinc-900 text-white'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-cyan-100 text-black px-4 py-1 text-sm rounded-full font-semibold">
                  {item.title}
                </span>
                <a href="#" className="text-xs underline underline-offset-4">
                  → Read More
                </a>
              </div>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
