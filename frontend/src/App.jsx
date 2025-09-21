import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sochome from "./Pages/Sochome/Sochome";
import Projects from "./Pages/Project/Project";
import Blogs from "./Pages/Blogs/Blogs";
// import Threads from "./Pages/Threads/Threads";
import Reachus from "./Pages/Reachus/Reachus";
import Members from "./Pages/Members/Members";
import RegistrationForm from "./Pages/Registrationform/Registrationform";
import LoginPage  from "./Pages/Registrationform/Login";
import Profile from "./Pages/Members/Profile";


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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile/:userId" element={<Profile />} />
    </Routes>
  );
}

export default App;