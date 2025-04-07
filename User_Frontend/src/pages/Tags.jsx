import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { endpoints } from "../services/apis";
import { apiConnector } from "../services/apiConnector";
import Masonry from "react-masonry-css";
import Card from "../components/Blog/Card";
import { Link } from "react-router-dom";
import { GiPlayButton } from "react-icons/gi";

const Tags = () => {
    const {tag} = useParams();
    const {GET_CARDS_BY_TAGS} = endpoints;
    const [tagData, setTagData] = useState([]);

    useEffect(() => {
        const fetchTag = async () => {
            try{
                const response = await apiConnector("POST", GET_CARDS_BY_TAGS, {tag:tag} );
                console.log(response?.data?.data);
                console.log(Array.isArray(response?.data?.data));
                setTagData(response?.data?.data);          
            } catch(err){
                console.log("error->",err);
            }
        }

        fetchTag().then(console.log(tag));
        // eslint-disable-next-line
    },[]);

    const breakpointColumnsObj = {
        default: 4, // 4 columns by default
        1024: 3,    // 3 columns on large screens
        768: 2,     // 2 columns on tablets
        480: 1      // 1 column on small screens
    };

    return(
        <div>
            
            {!tagData || tagData.length === 0 ? ( <div className="h-[60vh] flex flex-col items-center justify-center ext-4xl font-bold font-inter text-6xl text-lightBlue-500 gap-10"> 
                <div>Tag Not Found</div>
                <Link to="/blog">
                <button type="button" className="bg-[#00c4cc] text-white rounded-3xl flex flex-row items-center justify-evenly gap-4 p-4 px-14 text-[20px] font-serif shadow-md shadow-slate-500 hover:scale-95 transition-all duration-300 ease-in-out z-20">
                    Back to Blog Page
                    <div className="border border-white h-[26px]"></div>
                    <GiPlayButton />
                </button>
                </Link>
            </div> ) : (
                <>

                    <div className="w-[90%] flex flex-row justify-between mx-auto py-6">
                        <div>
                            <h2 className="text-2xl font-bold font-inter text-lightBlue-100">Tag</h2>
                            <h1 className="text-4xl font-bold font-inter text-lightBlue-500">{tag}</h1>
                        </div>
                    </div>
                    <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="flex gap-5 w-[90%] mx-auto"
                            columnClassName="masonry-column"
                        >
                            {tagData?.map((content, index) => (
                            <Card key={index} content={content} />
                            ))}
                    </Masonry>
                </>
            )}
        </div>
    )
};

export default Tags;
