import React from "react";

import About from "../components/About"
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";


export default function Main_page() {
    return (
        <div>

            <About/>
            <Projects/>
            <Skills/>
            <Testimonials/>
            <Contact/>

        </div>

    );
}


