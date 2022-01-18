import React from "react";
import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";


export default function Project2(){

 const s2 = [
  "Shape Memory Alloy",
  "Strechable Sensor",
  "Rehabilitation Engineering",
     "User Study",
];




    return(
        <section id = "Project2">

            <div className="text-center pt-6 pb-4 text-black max-w-2xl mx-auto bg-gray-100">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">
                    Soft 2 DOF Wrist Assistance Robot using Shape Memory Alloy
                </h1>
            </div>

            <div className="w-full my-12">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                   <img className = "object-contact object-left-top rounded border-solid border-4 border-steel-200"
                         alt = "hero"
                         src={ require('./Images/project-2.png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg text-center font-semibold leading-tight text-gray-800">
                                        Summary
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800">
                                        We designed a wearable soft robot with to assist the 2-DOF motion of the wrist. Shape Memory Alloy (SMA) was chosen and the optimal design of the SMA coil spring is selected by comparing the force-displacement relationships of five coil springs samples.
Mineral oil and active cooling improved the reponse with the actuator producting a maximum force of 10 N and a contraction ratio of 40%.
                                    </p>

                                    <a className="leading-normal pb-6 hover:underline text-center text-blue-600"
                                       href="https://www.mdpi.com/2076-3417/9/19/4025">Read the paper...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full my-12">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                   <img className = "object-contact object-left-top rounded border-solid border-4 border-steel-200"
                         alt = "hero"
                         src={ require('./Images/p2(a).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Evaluation
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        The highest torque of 1.32 Nm was measured in the direction of extension motion. In addition, torques of 0.61, 0.90, 0.62 Nm were measured in the direction of flexion, radial deviation, and ulnar deviation. </li>
                                        <li>The mass of the wearable part of the fabricated SWA is only 151 g, and the total mass of the robot including the pump and radiator is around 1 kg.
                                        </li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


                        <div className="w-full my-12">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                   <img className = "object-contact object-left-top rounded border-solid border-4 border-steel-200"
                         alt = "hero"
                         src={ require('./Images/p2(b).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        User Study
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                    Wearability and ROM were considered, as patients have difficulties in manipulating the wrist.  Five healthy subjects (all male, average age 24.2), with no impairment in the upper arm, were tested.                                    </li>
                                        <li>
                                     ROMs of five subjects were 33.8, 30.4, 21.4, and 15.4 degrees for flexion, extension, radial deviation, and ulnar deviation respectively.
                                        </li>
                                        <li>
                                            Average self-wearing (87 sec) and assisted wearing (75 sec) time was less than 1.5 minutes.                                        </li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



             <div className = "container px-5 py-10 mx-auto"> {/*mx-auto centers the container */}
                <div className = "text-center mb-20"> {/*margin-bottom*/}
                    <ChipIcon className = "w-10 inline-block mb-4"/>
                    <h1 className = "sm:text-4xl text-3xl font-medium title-font text-black mb-4">{/* font-{weight} */}
                        Technologies Used
                    </h1>
                </div>
                <div className = "flex flex-wrap lg:w-4/5 sm:mx-auto sm: mb-2 -mx-2">{/* negative margin: pulls the element towards the previous element. Where margin pushes away, this pulls it closer to it*/}
                    {s2.map((skill) =>(
                        <div key ={skill} className = "p-2 sm:w-1/2 w-full">
                            <div className = "bg-gray-800 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className = "text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className = "title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>




        </section>

    );
}