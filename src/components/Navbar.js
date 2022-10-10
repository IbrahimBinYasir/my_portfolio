import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";


export default function Navbar(){
    return(
        <header className = "bg-gray-900 md:sticky top-0 z-10"> {/*Use sticky to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen. */}
            <div className = "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href = "/" className ="ml-3 text-xl"> {/*move to a specific id with hashtags */}
                        About Me
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href = "/#projects" className = "mr-5 text-white hover:text-green-400">
                        Projects
                    </a>
                    <a href = "/#skills" className = "mr-5 text-white hover:text-green-400">
                        Skills
                    </a>
                    <a href="/#testimonials" className = "mr-5 text-white hover:text-green-400">
                        Testimonials
                    </a>
                    <a href = 'https://drive.google.com/file/d/1F2BC1raR2sM8Yn3sv9hpWoB-mWloePbi/view?usp=sharing'
                       download className = "mr-5 text-white hover:text-green-400">
                        CV
                    </a>
                </nav>
            </div>
        </header>
    );
}