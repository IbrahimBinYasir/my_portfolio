import React from "react";
import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";


export default function Project1(){

    const s1 = [
  "Optical Waveguide Sensor",
        "COMSOL",
        "Pareto-Front Optimization",
  "Clean Room",
  "PCB Design",
     "Laser and PD",
];

    return(
        <section id = "Project1">


            <div className="text-center pt-6 pb-4 text-black max-w-2xl mx-auto bg-gray-100">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">
                    Flexible Optical Sensor for Triaxial Force Measurement
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
                         src={ require('./Images/p1(a).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Research Motivation
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800">
                                        <li>
                                            Tactile feedback is vital in Human robot and human computer systems as it gives information about touch, pressure and slip.
                                        </li>
                                        <li>
                                            For this the sensor should be flexible so it can be conformed to different type of surfaces. It should be thin to integrate seamlessly onto current systems. Finally, it should be able to acquire triaxial force data simultaneously.
                                        </li>
                                        <li>
                                            Hence, this work explores designing a flexible, thin triaxial sensor to measure fingertip contact forces in physical HRI.
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
                         src={ require('./Images/p1(b).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Optical Sensor Design
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        The proposed sensor consists of optical waveguides that guide light using Total Internal Reflection. A tactor is placed in the middle of the waveguides which is used to transmit interaction forces to the sensor.
                                    </li>
                                        <li>
                                            Application of force causes in the tactor to contact the waveguides resulting in scattering of light.
                                        </li>
                                        <li>
                                           The materials chosen are flexible and soft to allow for integration on HRI systems such as curved boundaries.
                                        </li>
                                        <li>
                                            The design parameters such as the bending radius of the waveguides, the spacing b/w the waveguides and the thickness of the tactor has been chosen based on COMSOL simulations.
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
                         src={ require('./Images/p1(c2).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Experimentation and Results
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        For validation of the sensor, force was applied to by moving the linear stages while simultaneously collecting data from a 3-axis ATI load cell via DAQ.
                                    </li>
                                        <li>Calibration was done for force ranges (0-10N) for normal and (-3 to 3 N) for shear force. A regression model was used with the input being the raw values from the photodiodes and output being recorded loadcell data.
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
                         src={ require('./Images/p1(d).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Improvements
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        For increasing Sensitivity, we used pareto-front optimization using MATLAB while simultaneously running the structural simulation COMSOL Multiphysics.
                                    </li>
                                        <li>
                                            The number of waveguides were decreased to three which reduced the input and output channels
                                        </li>
                                        <li>
                                            Finally, we employed MEMS fabrication which decreases the surface roughness and thickness, which led to increasing transparency.
                                        </li>
                                        <li>
                                            Future work will investigate combining the sensor with flexible haptic displays and for measuring 3 DOF forces in human computer as well as human robot interaction.
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
                         src={ require('./Images/p1(e).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Summary
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        In conclusion, we design and evaluate a thin, flexible, transparent and light optical sensor for triaxial force.
                                        </li>
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
                    {s1.map((skill) =>(
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