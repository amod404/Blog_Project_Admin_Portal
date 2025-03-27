import "./App.css";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { apiConnector } from "./services/apiConnector";
import { setContent } from "./slices/contentSlice"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { endpoints } from "./services/apis";

const { GET_CARDS } = endpoints;

function App() {
  
  const content = useSelector((state)=> state.content)
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    const getContent = async() => {
      try{  
        const response = await apiConnector("GET", GET_CARDS )
        dispatch(setContent(response.data.data))
      } catch(err) {
        console.log("error -> in app use Effect",err)
      } 
    }
    getContent().then(console.log(content));
    // eslint-disable-next-line
  },[])
  return (
      <div>
        {location.pathname !== "/" && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>}/>
        </Routes>

        {location.pathname !== "/" && <Footer/>}
      </div>
  );
}

export default App;
