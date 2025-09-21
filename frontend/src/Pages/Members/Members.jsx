import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import Footer from "../Footer";
import NAVBAR from "../Navbar";
import STARFIELD  from "../Starfield";

const Members = () => {
  const [users, setUsers] = useState([]);
  const [alumni, setAlumni] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAlumni, setShowAlumni] = useState(false);
  const navigate = useNavigate();
  
  // Handle redirection to the selected user's profile page
  const handleClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-black text-white">
  //       <STARFIELD className="z-0" />
  //       Loading...
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div>
      <STARFIELD className="z-0" />
        <div className="min-h-screen text-white bg-black z-10">
          <NAVBAR />
           <div className="text-white pt-10 mb-10 rounded-lg shadow-lg p-8 max-w-5xl w-full mx-auto">
            
            <div className="flex justify-between items-center mb-8">
              <h1
                // onClick={() => setShowAlumni(false)} // Show Members
                className={`text-3xl font-bold cursor-pointer ${
                  !showAlumni ? "text-blue-500" : "text-white text-xl"
                }`}
              >
                Members
              </h1>
              <h1
                // onClick={() => setShowAlumni(true)} // Show Alumni
                className={`text-3xl font-bold cursor-pointer  ${
                  showAlumni ? "text-blue-500" : "text-white text-xl"
                }`}
              >
                Alumni
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {(showAlumni ? alumni : users).map((user) => (
                <div
                  key={user.id}
                  className="p-2 bg-gray-800 rounded-lg text-center hover:bg-gray-700 transition duration-200 cursor-pointer"
                  onClick={() => handleClick(user.id)}
                >
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                </div>
              ))}
            </div>
          </div> 
           <div className="flex justify-center">
            <h1>
          {/* Wanna Join CcpC (Registration) <a href="/registration" className="text-red-500 px-1 hover:text-yellow-500">Click here! </a> */}
          </h1>
          </div>
          <Footer />
        </div>
    </div>
  );
};

export default Members;