import React from "react";
import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";


export default function Project5(){

        const s5 = [
        "Mechatronics",
        "Pneumatic Actuation",
        "Matlab",
        "Arduino",
        "Closed Loop System",
    ];

    return (
        <section id="Project5">

            <div className="text-center pt-6 pb-4 text-black max-w-2xl mx-auto bg-gray-100">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">
                    Bio-Inspired Hybrid Soft Actuator as a Sixth Finger
                </h1>
            </div>





            <div className="w-full my-12">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                                    <video
                                        className="object-contact object-left-top rounded border-solid border-4 border-steel-200"
                                        type="video/mp4"
                                        src={require('./Images/p5_video.mp4')}
                                        width="600"
                                        height="300"
                                        controls="controls" autoPlay="false">
                                    </video>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Introduction Video
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                        <li>
                                            Soft actuators due to their compliant nature and adaptability have gained  a lot of traction in the robotic community as potential tools for better interaction  between robots and humans.
                                        </li>
                                        <li>
                                            These however face certain problems when it comes  to their analysis and control due to the inherent softness of the material.
                                        </li>
                                        <li>
                                            In this
                                            <a className="leading-normal pb-t pb-6 hover:underline text-center text-blue-600"
                                       href="https://drive.google.com/file/d/1cN5tD2-AMR0zNxK_jNNYvhvTE2XOp0_8/view?usp=sharing"> project</a>
                                            , we design, fabricate and experimentally validate a  hybrid bending actuator inspired from the biological mechanism of cursetesians such as shrimp
                                        </li>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="w-full my-12"
                 id="Concept Design">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                                    <img
                                        className="object-contact object-left-top rounded border-solid border-4 border-steel-200"
                                        alt="Project 5 main picture"
                                        src={require('./Images/project-5.png')}>
                                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Actuator Concept
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 space-y-4">

                                        <li>
                                            Soft actuators due to their compliant nature and adaptability have gained  a lot of traction in the robotic community as potential tools for better interaction  between robots and humans.
                                        </li>
                                        <li>
                                            These however face certain problems when it comes  to their analysis and control due to the inherent softness of the material.
                                        </li>
                                        <li>
                                            In this project, we design, fabricate and experimentally validate a  hybrid bending actuator inspired from the biological mechanism of cursetesians such as shrimp
                                        </li>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full my-12"
                 id="Design">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                                    <img
                                        className="object-contact object-left-top rounded border-solid border-4 border-steel-200"
                                        alt="hero"
                                        src={require('./Images/p5(b).png')}>
                                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Design
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc space-y-4">
                                        <li> Cross sectional view of tube. </li>
                                        <li>                                            The rightmost hemi-sphere of the tube was completely filled with silicone. A tip shell was designed and later pinned for ease of force measurements.
</li>
                                        <li>
                                            FEM in ABAQUS (Simulia, Dassault Systemes) was see the ROM and the maximum pressure of the soft core.
                                        </li>
                                        <li>
Yeoh material model with material coefficients C1 = 0.11MPa and C2 = 0.02MPa for Elastosil M4601 was used.
                                        </li>
                                        <li>
                                            The shells as well as the pins were modeled as ABS plastic with a mass density of 1.07 g/cm and a poison’s ratio of 0.3. Firstly, for validation of the proof of concept a 2 hemispherical section tube was fitted with 3 shells.
                                        </li>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                        <div className="w-full my-12"
                 id="Experimental Setup">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                                    <img
                                        className="object-contact object-left-top rounded border-solid border-4 border-steel-200"
                                        alt="hero"
                                        src={require('./Images/p5(d).png')}>
                                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Setup & Hardware
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                        <li>
                                            The experimentation platform consisted of a compressor (Jun-Air Model 6-25) whose output pressure was modulated via a manual pressure regulator (Festo LR-D-MINI) to the soft tube encapsulated inside the abdomen shells.
                                        </li>
                                        <li>
                                            A Pressure sensor (MPX-5700) was used to determine the pressure of the inner tube while actuation and a Load Cell
                                        </li>
                                        <li>
                                            (TAL221) was used in conjunction with an amplifier (HX- 711)   to calculate the tip forces. Both were connected to a microcontroller (Arduino) for Data Acquisition as shown in Fig
                                        </li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-full my-12"
                 id="Results">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                                    <img
                                        className="object-contact object-left-top rounded border-solid border-4 border-steel-200"
                                        alt="hero"
                                        src={require('./Images/p5(c).png')}>
                                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Results
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc space-y-4">

                                        <li>
                                            When actuated using pneumatic pressure, the  biomimetic actuator was able to produce forces ( which is within the required  criteria of 8N for palm grasping) up to 11.5 N at 135 KPa.
                                        </li>
                                        <li>
                                            The graph shows the results of blocked tip force.
                                        </li>
                                        <li>
                                            Actuator weight to Payload capacity ratio: Our actuator has a given weight of 112g and the load it can lift under a maximum actuation force of 135kPa is 537g (5 times it's own weight)
                                        </li>
                                        <li>
                                            Sixth finger rehabilitation device (A) Bottle (B) Plastic jar (C) Plastic ball (D) Acrylic cube (E) Marker.
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
                                    <video
                                        className="object-contact object-left-top rounded border-solid border-4 border-steel-200"
                                        type="video/mp4"
                                        src={require('./Images/p5(b).mp4')}
                                        width="600"
                                        height="300"
                                        controls="controls" autoPlay="false">
                                    </video>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Demonstation Video- Robot Grasper (2X Speed)
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                        <li>
                                            The robot can be used as a soft grasper with traditional robotic arms
                                        </li>
                                        <li>
                                            Unlike precise positioning of the end-effector, this hybrid grasper can accommodate for errors due to conformability and adaptability.
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
                                    <video
                                        className="object-contact object-top rounded border-solid border-4 border-steel-200 ml-5"
                                        type="video/mp4"
                                        src={require('./Images/p5(c).mp4')}
                                        width="250"
                                        height="100"
                                        controls="controls" autoPlay="false">
                                    </video>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Demonstation Video - Assistance
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc space-y-4">
                                        <li>
                                            Stroke patients often suffer from hand impairment as a consequence of their neurological disorder.
                                        </li>
                                        <li>
                                            Here we demonstrate the actuator being used as a supernumerary sixth finger to assist the user in grasping.
                                        </li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container px-5 py-10 mx-auto"
                 id="Skills"> {/*mx-auto centers the container */}
                <div className="text-center mb-20"> {/*margin-bottom*/}
                    <ChipIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">{/* font-{weight} */}
                        Technologies Used
                    </h1>
                </div>
                <div
                    className="flex flex-wrap lg:w-4/5 sm:mx-auto sm: mb-2 -mx-2">{/* negative margin: pulls the element towards the previous element. Where margin pushes away, this pulls it closer to it*/}
                    {s5.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className="title-font font-medium text-white">
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