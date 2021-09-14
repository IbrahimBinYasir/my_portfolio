import React from "react";



export default function About(){
    return(
        <section id = "about">
            <div className = "container mx-auto flex px-10 py-20 md:flex-rpw flex-col items-center">
                <div className = "lg:flex-grow md:w lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center">
                    <h1 className = "title-font sm:text-4xl text-3xl mb-4 mx-auto font-medium text white">
                        Hi, I'm Ibrahim
                        <br className = "hidden lg:inline-block" />
                    </h1>
                    <div className = "flex justify-around">
                    <img className = "object-contact object-left-top"
                         alt = "hero"
                         src = "./Me.png"
                    >
                    </img>

                    <p className = "container px-10 py-10 mx-auto text-center leading-relaxed">

                        A Robotics graduate with undergrad in Mechanical Engineering. Experienced in concept generation and development from ideation to
                        production of robotic technologies. Proficient in Mechanical Design (Solidworks), Control and Acquisition (MATLAB/LabView), Prototyping (MEMS), Programming. My passion is in designing, researching practical technology for human-robot interaction in rehabilitative robotics. I am always looking to learn and contribute for the purpose betterment of quality of life. In my free time, I like to travel, play soccer, and volunteer ^-^
                    </p>
                    </div>

                    <div className = "flex justify-center">
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

            </div>
        </section>
    );
}