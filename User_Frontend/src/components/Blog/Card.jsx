import React from "react";
import { Link } from "react-router-dom";

const Card = ({content}) => {
  return (
    <Link to={`/blog/${content._id}`} className="w-full h-fit">
        <div className="flex w-full h-fit shadow-sm shadow-black bg-white rounded-lg p-4 m-5 flex-col justify-between hover:scale-105 hover:z-10 hover:bg-yellow-5 hover:bg-opacity-50 transition-all duration-300 ease-in-out">
            <img src={content.thumbnail} alt="" className="rounded-sm" />
            <h1 className="my-4 font-bold font-edu-sa mx-2" >{content.title}</h1>
            <p className="text-richblack-400 text-sm mx-2 ">{content.description}</p>
            <h2 className="my-3 text-richblack-500 font-semibold mx-2">{content.date.split('T')[0]}</h2>
        </div>
    </Link>
  );
};

export default Card;



