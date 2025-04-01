import React from "react";
import { Link } from "react-router-dom";

const Tag = ({name}) => {
  return(
    <Link to={`/tag/${name}`} className="rounded-full p-2 px-4 border border-richblack-200 hover:bg-richblack-5">
        {`#${name}`}
    </Link>
  );
};

export default Tag;
