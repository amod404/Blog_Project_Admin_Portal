import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { endpoints } from "../../services/apis"
import { apiConnector } from "../../services/apiConnector"
import { setSeries } from "../../slices/seriesSlice"
import { IoIosArrowDown } from "react-icons/io";

const { GET_SERIES } = endpoints;

const Navbar = () => {
  
  const series = useSelector((state) => state.series.series);
  const dispatch = useDispatch();
  const [more, setMore] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(()=> {
    const getAllSeries = async () => {
      try{
        const response = await apiConnector("GET", GET_SERIES)
        dispatch(setSeries(response?.data?.data))
      } catch(err){
        console.log(err)
      }
    }
    getAllSeries();
    // eslint-disable-next-line
  },[])

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef?.current && !dropdownRef.current.contains(event.target)) {
        setMore(false); // Close the dropdown
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" w-screen border-b border-richblack-50 shadow-sm top-0 bg-white z-50">
    <div className="flex flex-row items-center justify-between w-[90%] h-16 py-2 mx-auto">
        <Link to="/">
          <p className="text-3xl font-semibold text-lightBlue-500 ">Amod_Yadav</p>
        </Link>
        
        <div className="flex flex-row items-center justify-evenly gap-10 text-lightBlue-800">

          <Link to={`/blog`}>
            <p>Blog</p>
          </Link>
          <Link to={`/series/${series ? series[0]?.name : null}`}>
            <p>{series ? series[0]?.name : null}</p>
          </Link>
          <Link to={`/series/${series ? series[1]?.name : null}`}>
            <p>{series ? series[1]?.name : null}</p>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <p onClick={() => setMore((curr) => !curr)} className="cursor-pointer flex flex-row items-center justify-center gap-1">
              <span>More</span>
              <IoIosArrowDown className="mt-1"/>
            </p>
            {
              more && (
                <div className=" flex flex-col items-center justify-evenly absolute  top-12 right-0 bg-white shadow-sm shadow-richblack-25 border border-richblack-50 p-3 rounded-md">
                  {
                    series
                      ?.filter((_, index) => index > 2)
                      ?.map((ser, index) => (
                        <Link to={`/series/${ser?.name}`} key={index} className="p-2 px-6 text-center hover:bg-richblack-50 w-full rounded-md" >
                          <p>{ser?.name}</p>
                        </Link>
                      ))
                  }
                </div>
              )
            }
          </div>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
