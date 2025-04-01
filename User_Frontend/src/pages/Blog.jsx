import Contact from "../components/Blog/Contact";
import { useSelector } from "react-redux";
import Card from "../components/Blog/Card";
import Masonry from "react-masonry-css";
import Subscribe from "../components/Blog/Subscribe";
import { Link } from "react-router-dom";
import { GiPlayButton } from "react-icons/gi";

const Blog = () => {
  const allContent = useSelector((state) => state.content.content);

  // Define breakpoints for responsive layout
  const breakpointColumnsObj = {
    default: 4, // 4 columns by default
    1024: 3,    // 3 columns on large screens
    768: 2,     // 2 columns on tablets
    480: 1      // 1 column on small screens
  };

  return (
    <div> 
      <Contact/>

      <div className="w-[90%] flex flex-row mx-auto my-10 gap-10 justify-evenly">
        <img src={allContent[0].thumbnail} alt="" className="w-[50%] rounded-lg" />
        <div className="flex flex-col w-[30%] relative py-8">
            <div className="absolute w-[110%] h-[90%] bg-[#00c4cc] rounded-full opacity-10 inset-0 m-auto floating -z-10"></div>
            <h1 className="my-4 font-bold font-edu-sa mx-2 text-2xl" >{allContent[0].title}</h1>
            <p className="text-richblack-400 mx-2 text-lg">{allContent[0].description}</p>
            <h2 className="my-3 text-richblack-500 font-semibold mx-2">{allContent[0].date.split('T')[0]}</h2>

            <Link to={`/blog/${allContent[0]._id}`} className="mt-[20%]">
              <button type="button" className="bg-[#00c4cc] text-white rounded-3xl flex flex-row items-center justify-evenly gap-4 p-4 px-14 text-[20px] font-serif shadow-md shadow-slate-500 hover:scale-95 transition-all duration-300 ease-in-out z-20">
                Explore the Blog
                <div className="border border-white h-[26px]"></div>
                <GiPlayButton />
              </button>
            </Link>

        </div>
      </div>

      <Subscribe/>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-5 w-[90%] mx-auto"
        columnClassName="masonry-column"
      >
        {allContent.filter((_,index) => index).map((content, index) => (
          <Card key={index} content={content} />
        ))}
      </Masonry>
    </div>
  );
};

export default Blog;
