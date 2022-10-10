import React from "react";



export default function About(){
    return(
        <section id = "about">
            <div className = "container mx-auto flex px-10 py-20 md:flex-rpw flex-col items-center">
                <div className = "lg:flex-grow md:w lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center">
                    <h1 className = "title-font sm:text-4xl text-3xl mb-4 mx-auto font-medium text white">
                        An engineer fascinated by Human Robot Inerfaces
                        <br className = "hidden lg:inline-block" />
                    </h1>
                    <div className = "flex justify-around flex-col lg:flex-row">
                        <div className = "flex justify-around flex-wrap">

                    <img className = "object-contact object-left-top"
                         alt = "hero"
                         src = "./Me.png"
                    >
                    </img>
                        <div className = "flex pt-2 py-2 shrink">
                        <a  href = "#contact"
                            className = "inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        >
                            Work with me
                        </a>
                        <a  href = "#projects"
                            className = "ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                        >
                            See My Past Work
                        </a>
                    </div>
                        </div>

                    <p className = "container px-10 py-10 mx-auto text-center sm:text-left leading-relaxed">

                        Robotics graduate with undergrad in Mechanical Engineering. Proficient in Mechanical Design, Control and Signal processing (MATLAB/LabView), Prototyping (MEMS), Programming (Python).
                        My passion has always been to work on new interfaces that improves people's physical and mental health HRI and robotics. I am always looking to learn and contribute for the purpose betterment of quality of life. In my free time, I like to play soccer, volunteer, hike, and travel ^-^
                    </p>
                    </div>


                </div>

            </div>
        </section>
    );
}