import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import About from "./components/About"
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import ErrorPage from "./components/ErrorPage";
import Main_page from "./components/Main_page";

import P0 from "./components/project_detail/Project0";
import P1 from "./components/project_detail/Project1";
import P2 from "./components/project_detail/Project2";
import P3 from "./components/project_detail/Project3";
import P4 from "./components/project_detail/Project4";
import P5 from "./components/project_detail/Project5";




export default function App() {
  return(
    <main className = "text-black bg-gray-100 body-font">

        <Navbar />

      <Router>
          <Routes>
                  <Route path="/" element={<Main_page />} />
                  <Route path="/about" element={<About />} />
                  <Route path="skills" element={<Skills />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<ErrorPage />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="project0" element={<P0 />} />
                  <Route path="project1" element={<P1 />} />
                  <Route path="project2" element={<P2 />} />
                  <Route path="project3" element={<P3 />} />
                  <Route path="project4" element={<P4 />} />
                  <Route path="project5" element={<P5 />} />


          </Routes>
      </Router>

    </main>
  );
}
