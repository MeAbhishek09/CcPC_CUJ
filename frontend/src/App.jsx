// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './Pages/Home/Home'

// function App() {

//   return (
//     <>
//     <Home/>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sochome from "./Pages/Sochome/Sochome";
import Projects from "./Pages/Project/Project";
import Blogs from "./Pages/Blogs/Blogs";
// import Threads from "./Pages/Threads/Threads";
import Reachus from "./Pages/Reachus/Reachus";
import Members from "./Pages/Members/Members";

function App() {
  return (
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/soc" element={<Sochome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/threads" element={<Threads />} /> */}
        <Route path="/reachus" element={<Reachus />} />
        <Route path="/members" element={<Members />} />
    </Routes>
  );
}

export default App;
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/projects" element={<Projects />} />
    //   <Route path="/soc" element={<Sochome />} />
    //   <Route path="/blogs" element={<Blogs />} />
    //   <Route path="/reachus" element={<Reachus />} />
    // </Routes>