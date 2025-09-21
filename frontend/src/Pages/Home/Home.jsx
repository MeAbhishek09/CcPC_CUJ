import React, { useEffect, useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Starfield  from "../Starfield";
// import Logo from "../../../public/Logo";
import Logo from "../../assets/male-avatar.png";
import Title from "./Component/Title"; 
import WhyCCPC from "./Component/WhyCCPC"; 
import SoC from "./Component/Soc";
import TEAM from "./component/Team"; 
const Home = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Starfield  />
      <div className="relative z-10">

         {showNavbar && (
          <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md transition-all duration-500">
            <Navbar />
          </div>
        )}
        {/* <Navbar /> */}
        <div className="flex flex-col justify-center items-center min-h-[70vh] lg:min-h-screen">
          <div className="fixed-width text-center">
            <Title text="Code Crafters Programming Club" />
          </div>
        </div>

        <div className="mt-6 text-center px-4 lg:px-16 flex lg:flex-row flex-col items-center justify-center">
          <div className="flex justify-center items-start mt-8 bg-white">
            {/* <img src="/Logo.svg" alt="Logo" className="w-16 h-16" /> */}

            <img src={Logo} alt="Logo" className="w-200 h-90" />
            {/* <Logo /> */}
          </div>
          <div className="bg-blue-500/20 backdrop-blur-md text-s lg:text-xl mt-3 lg:ml-10 rounded-lg text-left p-6 lg:p-10">
            <div>
              <p className="text-gray-300 leading-relaxed font-mono">
                Code Crafters Programming Club is an exciting initiative designed to ignite a passion for coding within our institution.
                Our mission is to provide students with a gateway to the dynamic world of programming, offering a supportive platform where assistance and mentorship are readily available.
                Whether you're just starting or looking to refine your skills, we're here to help you unlock your potential and enhance your coding abilities.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4 font-mono">
                At Code Crafters, we believe coding is a skill everyone should have the opportunity to learn. Our motto is simple:
                <span className="font-semibold text-yellow-500"> "Innovate. Collaborate. Elevate."</span>
                Join us as we provide every student with the right tools, guidance, and community to embark on this exciting journey.
              </p>
            </div>
          </div>
        </div>

        <WhyCCPC />
        <SoC />
        <TEAM />
        <Footer />
      </div>
    </div>
  );
};

export default Home;