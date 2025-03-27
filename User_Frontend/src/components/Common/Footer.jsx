import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-lightBlue-500">
        <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between p-12 px-20">
            <div className=" text-white font-inter font-bold text-4xl">
                Amod Yadav
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 text-white m-3 mr-0">
                <a href="https://www.instagram.com/_amod.yadav/" target="_blank" rel="noopener noreferrer" className="hover:underline w-fit">Instagram</a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="hover:underline w-fit">Twitter</a>
                <a href="https://www.linkedin.com/in/amodyadav" target="_blank" rel="noopener noreferrer" className="hover:underline w-fit">LinkedIn</a>
                <a href="https://github.com/amod404" target="_blank" rel="noopener noreferrer" className="hover:underline w-fit">Github</a>
            </div>
            <a  href="mailto:amodschool1234@gmail.com" className="text-white underline cursor-pointer" >
                amodschool1234@gmail.com
            </a>
        </div>
        <div className="w-[90%] border-[1px] border-opacity-50 border-white mx-auto rounded-lg"></div>
        <div className="flex justify-center items-center p-12 text-white">
            <span className="text-md">
                © 2025 Amod Yadav. All rights reserved.
            </span>
        </div>
    </div>
  );
};

export default Footer;
