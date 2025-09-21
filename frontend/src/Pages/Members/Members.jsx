import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import Footer from "../Footer";
import NAVBAR from "../Navbar";
import STARFIELD  from "../Starfield";

const Members = () => {

//   const [users, setUsers] = useState([
//   { id: "1", name: "Test Member" },
//   { id: "3", name: "Alice" }
// ]);

// const [alumni, setAlumni] = useState([
//   { id: "3", name: "Bob" },
//   { id: "4", name: "Carol" }
// ]);

  const [users, setUsers] = useState([]);
  const [alumni, setAlumni] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAlumni, setShowAlumni] = useState(false);
  const navigate = useNavigate();
  
  // Fetch data from backend
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/members")
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setAlumni(data.alumni);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch members");
        setLoading(false);
      });
  }, []);


  // Handle redirection to the selected user's profile page
  const handleClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <STARFIELD className="z-0" />
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-600">
        {error}
      </div>
    );
  }

  return (
          <div className="relative min-h-screen flex flex-col text-white">
            {/* STARFIELD behind content */}
            <STARFIELD className="absolute inset-0 z-0" />

            {/* Navbar stays at the top */}
            <div className="relative">
              <NAVBAR />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex-1 max-w-5xl w-full mx-auto p-8">
              {/* Members / Alumni header */}
              <div className="flex justify-between items-center mb-8">
                <h1
                  onClick={() => setShowAlumni(false)}
                  className={`text-3xl font-bold cursor-pointer ${
                    !showAlumni ? "text-blue-500" : "text-white text-xl"
                  }`}
                >
                  Members
                </h1>
                <h1
                  onClick={() => setShowAlumni(true)}
                  className={`text-3xl font-bold cursor-pointer ${
                    showAlumni ? "text-blue-500" : "text-white text-xl"
                  }`}
                >
                  Alumni
                </h1>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

              {/* Registration link */}
              <div className="flex justify-center mt-8">
                <h1>
                  Wanna Join CcpC (Registration){" "}
                  <a
                    href="/register"
                    className="text-red-500 px-1 hover:text-yellow-500"
                  >
                    Click here!
                  </a>
                </h1>
              </div>
            </div>

            {/* Footer stays at bottom */}
            <div className="relative">
              <Footer />
            </div>
          </div>

  );
};

export default Members;