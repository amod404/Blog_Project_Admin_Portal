import React from "react";
import { PiInstagramLogoThin, PiGithubLogoThin, PiTwitterLogoThin, PiLinkedinLogoThin} from "react-icons/pi";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return(
    <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between items-center w-[90%] py-6 mx-auto">
        <div>
            Tags search
        </div>
        <div className="flex flex-wrap gap-2 text-3xl">
            <a href="https://www.instagram.com/_amod.yadav/" target="_blank" rel="noopener noreferrer">
                <PiInstagramLogoThin/>
            </a>
            <a href="https://github.com/amod404" target="_blank" rel="noopener noreferrer">
                <PiGithubLogoThin/>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <PiTwitterLogoThin/>
            </a>
            <a href="https://www.linkedin.com/in/amodyadav" target="_blank" rel="noopener noreferrer">
                <PiLinkedinLogoThin/>
            </a>
            <a href="mailto:amodschool1234@gmail.com" target="_blank" rel="noopener noreferrer">
                <CiMail/>
            </a>
        </div>
    </div>
  )
};

export default Contact;
