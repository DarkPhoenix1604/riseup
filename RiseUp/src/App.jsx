import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CoursesPage from "./components/user/coursespage";
import Navbar from "./components/user/navbar";
import SelfAssesment from "./components/user/SelfAssesment";
import MockInterview from "./components/user/MockInterview";
import Home from "./components/user/Home";
import CommunityPage from "./components/user/community";
import BeyondTech from "./components/user/beyondtech";
import Job from "./components/user/job";
import Login from "./components/user/login";
import Signup from "./components/user/signup";
import JobPosting from "./components/user/jobPosting";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/self-assessment" element={<SelfAssesment />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/beyond-tech" element={<BeyondTech />} />
        <Route path="/job" element={<Job />} />
        <Route path="/jobPosting" element={<JobPosting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

        {/* <Route path="/home" element={<Home />} /> */}





        
      </Routes>
    </Router>
  );
}

export default App;
