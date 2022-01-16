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

import P1 from "./components/project_detail/Project1";

export default function App() {
  return(
    <main className = "text-white bg-gray-400 body-font">

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
                  <Route path="project1" element={<P1 />} />


          </Routes>
      </Router>

    </main>
  );
}
