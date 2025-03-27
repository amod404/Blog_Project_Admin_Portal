import React, { useEffect } from "react";
import Contact from "../components/Blog/Contact";
import { useDispatch, useSelector } from "react-redux";
import apiConnector from "../services/apiConnector"

const Blog = () => {



  return (
    <div> 
      <Contact/>
      <div>
        Blog
      </div>
    </div>
  );
};

export default Blog;
