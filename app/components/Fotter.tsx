import React from "react";

export default function Fotter() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 pt-20 pb-10 rounded-t-[3rem]">

      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="text-lime-400 text-2xl font-extrabold">DEVLOP.ME</div>
        <div className="text-center md:text-right mt-8 md:mt-0">
          <h1 className="text-5xl font-bold">
            As you <span className="text-white">can</span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-16 text-sm">

        <div className="space-y-6">
          <div>
            <h4 className="text-gray-400 font-semibold mb-2">Say hello</h4>
            <p className="tracking-wide">HELLO@DEVLOP.ME.COM</p>
            <p className="tracking-wide">MAHBUBUL@ME.COM</p>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold mb-2">Call</h4>
            <p>+784549 4981 00</p>
            <p>+8845 0100 211</p>
          </div>
        </div>


        <div>
          <h4 className="text-gray-400 font-semibold mb-4">Menu</h4>
          <ul className="space-y-2">
            <li className="hover:text-lime-400 cursor-pointer">HOME</li>
            <li className="hover:text-lime-400 cursor-pointer">ABOUT</li>
            <li className="hover:text-lime-400 cursor-pointer">PORTFOLIO</li>
            <li className="hover:text-lime-400 cursor-pointer">BLOG</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-400 font-semibold mb-4">Social</h4>
          <ul className="space-y-2">
            <li className="hover:text-lime-400 cursor-pointer">TWITTER</li>
            <li className="hover:text-lime-400 cursor-pointer">INSTAGRAM</li>
            <li className="hover:text-lime-400 cursor-pointer">FACEBOOK</li>
            <li className="hover:text-lime-400 cursor-pointer">BEHANCE</li>
            <li className="hover:text-lime-400 cursor-pointer">DRIBBBLE</li>
          </ul>
        </div>

        <div className="flex flex-col justify-between text-xs">
          <p className="font-bold mb-6">BESNIK</p>
          <p className="text-gray-500">© devlop.me 2022</p>
          <p className="text-gray-400 mt-6 md:text-right">PRIVACY - TERMS</p>
        </div>
      </div>
    </footer>
  );
}