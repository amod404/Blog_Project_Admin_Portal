import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { endpoints } from "../services/apis";
import { apiConnector } from "../services/apiConnector";
import Masonry from "react-masonry-css";
import Card from "../components/Blog/Card";


const { GET_SERIES_BY_ID } = endpoints;

const Series = () => {
    
    const breakpointColumnsObj = {
        default: 4, // 4 columns by default
        1024: 3,    // 3 columns on large screens
        768: 2,     // 2 columns on tablets
        480: 1      // 1 column on small screens
    };
    
    const {series} = useParams();
    const [seriesData, setSeriesData] = useState({});

    useEffect(() => {
        const fetchSeries = async () => {
            try{
                const response = await apiConnector("POST", GET_SERIES_BY_ID, {series:series} );
                setSeriesData(response?.data?.data)                
            } catch(err){
                console.log("error->",err);
            }
        }

        fetchSeries().then(console.log(seriesData));
        // eslint-disable-next-line
    },[series]);

    return (
    <div>
        <div className="w-[90%] flex flex-row justify-between mx-auto py-6">
        <div>
            <h2 className="text-2xl font-bold font-inter text-lightBlue-100">Series</h2>
            <h1 className="text-4xl font-bold font-inter text-lightBlue-500">{seriesData?.name}</h1>
        </div>
        <img src={seriesData?.logo} alt="" className="rounded-lg border border-lightBlue-25" />
        </div>

        <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-5 w-[90%] mx-auto"
                columnClassName="masonry-column"
              >
                {seriesData?.cards?.map((content, index) => (
                  <Card key={index} content={content} />
                ))}
        </Masonry>

    </div>
    );
};

export default Series;
