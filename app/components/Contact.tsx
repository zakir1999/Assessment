import React from "react";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsArrowDownCircleFill } from "react-icons/bs";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-cover bg-center" style={{
        backgroundImage: "url('/images/background-image.png')",
        backgroundColor: "white-250",
        backgroundBlendMode: "lighten",
      }}>
 
      <div className="md:w-1/2 space-y-8">
        <button className="flex items-center space-x-2 border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
          <BsArrowDownCircleFill />
          <span>Contact</span>
        </button>

        <h1 className="text-5xl font-bold">
          Interested in <br />
          <span className="bg-black text-white px-2 py-1 rounded">work</span> together?
        </h1>

        <p className="text-gray-700 max-w-md">
          We start every new client interaction with an in-depth discovery call where we get to know each other
        </p>

        <button className="flex items-center space-x-2 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
          <FaPhoneAlt />
          <span>Schedule a Call</span>
        </button>
      </div>


      <div className="md:w-1/2 bg-black text-white p-8 rounded-xl mt-10 md:mt-0">
        <form className="space-y-6">
          <div>
            <label className="text-sm block mb-1">Enter your name</label>
            <input
              type="text"
              className="w-full border-b border-lime-400 bg-black text-white py-2 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <input
              type="email"
              className="w-full border-b border-gray-600 bg-black text-white py-2 outline-none"
              placeholder="Your email address"
            />
          </div>

          <div>
            <input
              type="text"
              className="w-full border-b border-gray-600 bg-black text-white py-2 outline-none"
              placeholder="Describe your project"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Send
            </button>
            <span>or</span>
            <button
              type="button"
              className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Contact me
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-8">
          <span className="text-gray-400">@williamrey</span>
          <div className="flex space-x-4 text-xl">
            <FaFacebook className="hover:text-lime-400 transition" />
            <FaInstagram className="hover:text-lime-400 transition" />
            <FaTwitter className="hover:text-lime-400 transition" />
          </div>
        </div>
      </div>
    </div>
  );
}