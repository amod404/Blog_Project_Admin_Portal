import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apis";
import { useState } from "react";
import Tag from "../components/Common/Tag";
import { BsBook } from "react-icons/bs";

const {GET_CONTENT} = endpoints;

const Content = () => {

  const {id} = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try{
        const response = await apiConnector("POST", GET_CONTENT, {
          cardId:id
        });
        if(response){
          setContent(response?.data?.data)
        }
      } catch(err){
        console.log("error -> ", err);
      }
    }
    fetchContent();
    // eslint-disable-next-line
  },[]);  

  return (
    <div className="w-[100%] flex flex-col items-center justify-center p-10 gap-10 mx-auto">
      <h1 className="text-[80px] font-bold font-inter">{content?.title}</h1>
      <div className="flex items-center gap-4 translate-y-3 text-richblack-500">
        <img src="https://res.cloudinary.com/dorxkjdt6/image/upload/v1742030578/myFolder/mvjua6fh8hzhd5xau3os.jpg" alt="" width={50} height={50} className="rounded-full" />
        <h2>·</h2>
        <h2>Amod Yadav</h2>
        <h2>·</h2>
        <div className="flex flex-row items-center justify-center gap-2">
          <BsBook/>
          <p>
            {content?.timeToRead}
          </p>
        </div>
      </div>
      <img src={content?.thumbnail} alt="" className="w-full aspect-[16/9] rounded-md object-cover" />
      <div className="w-[90%] border border-richblack-200 rounded-full"></div>
      <div dangerouslySetInnerHTML={{ __html: content?.contentId?.data}} className="text-xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto flex flex-col"></div>

      <div className="flex w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] gap-2 text-richblack-400">
        {
          content?.tags?.map((tag,index) => (
            <Tag name={tag} key={index}></Tag>
          ))
        }
      </div>

      <div className="w-[90%] border border-richblack-200 rounded-full"></div>
    </div>
  );
};

export default Content;
