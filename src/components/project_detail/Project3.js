import React from "react";
import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";


export default function Project3(){

 const s3 = [
  "Soft+Strechable Optical Sensor",
     "Haptics",
  "Dielectric Elastic Actuator",
  "Closed Loop System",
     "User Study",
];


    return(
        <section id = "Project3">

            <div className="text-center pt-6 pb-4 text-black max-w-2xl mx-auto bg-gray-100">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">
                    Self-sensing Soft Tactile Actuator for Fingertip Interface
                </h1>
            </div>

            <div className="w-full my-12"
            id = "Summary">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                   <img className = "object-contact object-left-top rounded border-solid border-4 border-steel-200"
                         alt = "Project 3 main picture"
                         src={ require('./Images/project3.png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold leading-tight text-gray-800">
                                        Summary
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800">

                                        <li>
                                        This project focuses on a self-sensing soft tactile actuator based on multilayered Dielectric elastomer actuator (DEA) for wearable haptic interfaces. To provide accurate physical force feedback to the user, the actuator is integrated with a 1.1 mm thick film-type soft force sensor that enables feedback control.
                                        </li>
                                        <li>
                                    The wearable prototype exhibits high output force of 0.9 N, as well as flexibility, conformity, while being light-weight  3.2 g.
                                        </li>

                                    </p>

                                    <a className="leading-normal pb-t pb-6 hover:underline text-center text-blue-600"
                                       href="https://www.mdpi.com/2076-3417/9/19/4025">Read the paper...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full my-12"
            id = "Actuator">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                   <img className = "object-contact object-left-top rounded border-solid border-4 border-steel-200"
                         alt = "hero"
                         src={ require('./Images/p3(a).gif') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold leading-tight text-gray-800">
                                        Soft Actuator
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        Along with my colleague
                                        <a className="leading-normal  hover:underline text-center text-blue-600"
                                            href="https://scholar.google.com/citations?user=M-z54iEAAAAJ&hl=ko&oi=ao"> Jung Hwan, </a>
                                        we use DEA is an electroactive polymer actuators, which are reported to have large area strain and fast response speed.
                                    </li>
                                        <li>
                                            The soft tactile actuator is constructed via a multi-layered DEA membrane layer, a passive membrane layer, and an inner circular pillar.
                                        </li>
                                        <li>
                                            The actuator was optimized by varying the geometry, and the force and displacement tests were conducted under a frequency range of 0 to 30 Hz. The selected actuator produces an output force up to 0.9 N, with a displacement of 1.43 mm.
                                        </li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full my-12"
            id = "Sensor">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                   <img className = "object-contact object-left-top rounded border-solid border-4 border-steel-200"
                         alt = "hero"
                         src={ require('./Images/p3(b).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold leading-tight text-gray-800">
                                        Soft Sensor
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        To provide accurate and realistic physical force feedback to the user, the actuator is integrated with a 1.1 mm thick film-type soft force sensor.
                                    </li>
                                        <li>
                                            The sensor works on light coupled out of a polymer waveguide (scattering) when the touch layer contacts the core.
                                        </li>
                                        <li>
                                            The fabricated soft force sensor can measure the force in a range of 0 to 1.25 N under normal human finger tapping frequency range.
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
       <video className = "object-contact object-left-top rounded border-solid border-4 border-steel-200"
              type="video/mp4"
             src={ require('./Images/p3_video.mp4') } width="600" height="300" controls="controls" autoPlay="false">
       </video>
                    </div>
                    <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                        <h2 className="text-lg font-semibold leading-tight text-gray-800">
                            Sensor Demo Video
                        </h2>
                        <p className="leading-normal pt-2 text-gray-800 list-disc">
                        <li>
                            Even from the raw data, the sensor was able to measure fingertip forces with a fast response time.
                            </li>
                            <li>
                                The sensor was able to recognize different static and dynamic contact modes accurately after calibration.
                            </li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


             <div className = "container px-5 py-10 mx-auto"
             id = "Skills"> {/*mx-auto centers the container */}
                <div className = "text-center mb-20"> {/*margin-bottom*/}
                    <ChipIcon className = "w-10 inline-block mb-4"/>
                    <h1 className = "sm:text-4xl text-3xl font-medium title-font text-white mb-4">{/* font-{weight} */}
                        Technologies Used
                    </h1>
                </div>
                <div className = "flex flex-wrap lg:w-4/5 sm:mx-auto sm: mb-2 -mx-2">{/* negative margin: pulls the element towards the previous element. Where margin pushes away, this pulls it closer to it*/}
                    {s3.map((skill) =>(
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