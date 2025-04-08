import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TagSearch = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate(); 

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && input.trim() !== "") {
            console.log("Submitted:", input.trim());
            setInput(""); 
            navigate(`/tag/${input.trim()}`); 
        }
    };
    return (
        <input
            type="text"
            placeholder="Search Your Tag..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} // Detect "Enter" key
            className="mt-2 border border-lightBlue-200 p-4 rounded-full w-[200%] placeholder:text-richblack-100 focus:border-lightBlue-300 focus:border-2 focus:outline-none text-lg px-8 text-richblack-400"
        />
    );
};

export default TagSearch;
