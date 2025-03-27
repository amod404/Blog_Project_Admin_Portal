import React from "react";
import BounceCards from "../components/Home/BounceCards"
import { Link } from "react-router-dom";
import { GiPlayButton } from "react-icons/gi";


const images = [
  "https://res.cloudinary.com/dorxkjdt6/image/upload/v1742874287/image5_echgow.jpg",
  "https://res.cloudinary.com/dorxkjdt6/image/upload/v1742874286/image4_pjbi50.jpg",
  "https://res.cloudinary.com/dorxkjdt6/image/upload/v1742874286/image1_qittvo.jpg",
  "https://res.cloudinary.com/dorxkjdt6/image/upload/v1742874285/image3_xzksuy.jpg",
  "https://res.cloudinary.com/dorxkjdt6/image/upload/v1742874284/image2_l0xadu.jpg",
];
const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

const Home = () => {
  return(
    <div className="h-screen w-screen flex flex-row justify-between relative overflow-hidden">
      <div className="absolute w-[700px] h-[600px] bg-[#00c4cc] rounded-full opacity-10 inset-0 m-auto floating -z-10"></div>
      <img src="https://res.cloudinary.com/dorxkjdt6/image/upload/v1742875982/side1_f7z6ff.png" alt="" className="lg:scale-100 md:scale-0 sm:scale-0 h-screen" />
      <div className="w-fit flex flex-col items-center justify-center gap-8 mx-auto p-10 overflow-hidden">
        <div className="ml-32 flex lg:flex-row md:flex-col items-center justify-center gap-10">
          <div>
            <img src="https://res.cloudinary.com/dorxkjdt6/image/upload/v1742030578/myFolder/mvjua6fh8hzhd5xau3os.jpg" alt=""  className="h-[110px] w-[110px] rounded-full scale-125"/>
          </div>
          <div className="h-full border border-slate-300"></div>
          <div className="flex flex-col gap-4 w-[70%]">
            <h1 className="text-slate-500 text-3xl font-thin">AMOD_YADAV</h1>
            <p className="text-sm text-slate-600 text-">"Hey there! 👋 Welcome to my blog, where I share thoughts, ideas, and insights. Dive in, explore, and enjoy the read! 🚀✨"</p>
          </div>
        </div>
        <BounceCards
          className="custom-bounceCards scale-90"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />

        <Link to="/blog">
          <button type="button" className="bg-[#00c4cc] text-white rounded-3xl flex flex-row items-center justify-evenly gap-4 p-4 px-14 text-[20px] font-serif shadow-md shadow-slate-500 hover:scale-95 transition-all duration-300 ease-in-out z-20">
            Check Out
            <div className="border border-white h-[26px]"></div>
            <GiPlayButton />
          </button>
        </Link>

      </div>
      <img src="https://res.cloudinary.com/dorxkjdt6/image/upload/v1742876087/Untitled_design_xfnfet.png" alt="" className="lg:scale-100 md:scale-0 sm:scale-0 h-screen scale-125" />
    </div>
  );
};

export default Home;




