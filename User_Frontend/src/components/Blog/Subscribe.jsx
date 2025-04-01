import React, { useState } from "react";
import {toast} from "react-hot-toast";
import { endpoints } from "../../services/apis";
import { apiConnector } from "../../services/apiConnector";

const { ADD_MAIL } = endpoints

const Subscribe = () => {

  const [subscribed, setSubscribed] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setIsValid(validateEmail(event.target.value));
  };

  const handleSubscribe = () => {
    if (!isValid) {
        toast.error("Please enter a valid email!");
        return;
      }
      
      const addMailAPI = async () => {
        try{
          const response = await apiConnector("POST", ADD_MAIL, {
            mail:email,
          })
          console.log(response);
          setSubscribed(true);
          setEmail("");
          toast.success("Subscribed successfully!⭐");
        } catch(err){
          console.log(err);
        }
      }

      addMailAPI(); 
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen py-10 gap-6 bg-yellow-5 bg-opacity-70 my-10">
        {
            subscribed ? ( <div>
                <h1 className="text-[#F87171] text-2xl font-semibold font-inter">Thank you for subscribing!⭐</h1>
            </div> ) : (
                <>
                <h1 className="text-[#F87171] text-2xl font-semibold font-inter">Subscribe to our newsletter for updates and changelog.</h1>
                <div className="flex w-[50%] relative">
                    <input type="email" value={email} placeholder="please enter your email" onChange={handleChange} className=" text-lg text-[#F87171] w-full p-4 px-6 rounded-full border-[#F87171] border focus:outline-[#F87171] placeholder:font-thin placeholder:text-richblack-200" />
                    <button onClick={handleSubscribe} className="absolute top-[50%] -translate-y-[50%] right-2 bg-[#ff8f8fdd] rounded-full p-2 px-4">Subscribe</button>
                </div>
                </>
            )
        }
    </div>
  );
};

export default Subscribe;
