// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Student from "./Components/Student";
import Stud_viewproject from "./Components/Stud_viewproject";
import Stud_uploadcode from "./Components/Stud_uploadcode";
import Stud_dashboard from "./Components/Stud_dashboard";
import Stud_viewproject2 from "./Components/Stud_viewproject2";
import Stud_viewproject3 from "./Components/Stud_viewproject3";

import Entp_pickproject from "./Components/Entp_pickproject";
import Entp_uploadproject from "./Components/Entp_uploadproject";
import Entp_viewproject from "./Components/Entp_viewproject";
import Entp_viewproject2 from "./Components/Entp_viewproject2";
import Entp_viewresponses from "./Components/Entp_viewresponses";
import Entp_viewproject3 from "./Components/Entp_viewproject3";

import SignUp from "./Components/Sigup";
import Login from "./Components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student_pickproject.html" element={<Student />} />
      <Route path="/student_viewproject.html" element={<Stud_viewproject />} />
      <Route path="/student_dashboard.html" element={<Stud_dashboard />} />
      <Route path="/student_uploadcode.html" element={<Stud_uploadcode />} />
      <Route path="/student_viewproject3.html" element={<Stud_viewproject3 />} />
      <Route path="/student_viewproject2.html" element={<Stud_viewproject2 />}/>



      <Route path="/entp_dashboard.html" element={<Entp_pickproject />} />
      <Route path="/entp_uploadproject.html" element={<Entp_uploadproject />} />
      <Route path="/entp_viewproject.html" element={<Entp_viewproject />} />
      <Route path="/entp_viewproject2.html" element={<Entp_viewproject2 />} />
      <Route path="/entp_viewresponses.html" element={<Entp_viewresponses />} />
      <Route path="/entp_viewproject3.html" element={<Entp_viewproject3 />} />

      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
  );
}

export default App;
