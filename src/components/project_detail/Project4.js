import React from "react";
import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";


export default function Project4() {


    const s4 = [
        "Intelligent Robotics",
        "Shape Memory Alloy",
        "LabView",
        "Reinforcement Learning",
        "Closed Loop System",
        "Project Facilitator",
    ];


    return (
        <section id="Project4">

            <div className="text-center pt-6 pb-4 text-black max-w-2xl mx-auto bg-gray-100">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">
                    Non-Linear Position Control of Shape Memory Alloy (SMA)
                </h1>
            </div>

            <div className="w-full my-12"
                 id="Summary">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                                    <img
                                        className="object-contact object-left-top rounded border-solid border-4 border-steel-200"
                                        alt="Project 4 main picture"
                                        src={require('./Images/p4(a).gif')}>
                                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Summary
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800">

                                        <li>
                                            Shape-memory alloy (SMA) is an alloy that can easily be deformed when it is cold and remembers it’s original shape when heated. Owing to that, SMA is currently used in various applications.
                                        </li>
                                        <li>
                                            However, due to non-linearity due to phase transformation and other hysteresis transformation loops, the control of SMA is challenging.
                                        </li>
                                        <li>
                                            In this project, the aim was to control SMA, specifically the position of SMA in coil form by solely using reinforcement learning (RL) in real-time environment. Soft actor-critic as used for controlling and learning the non-linear behaviour of SMA.
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
                                        src={require('./Images/p4(d).png')}>
                                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Setup & Hardware
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                        <li>
                                            We use SMA in the form of a cioled spring due to large stain. A weight was weight at the end of it so that it is automatically deformed when it changes from austenite to martensite.
                                        </li>
                                        <li>
                                            Below the SMA, is a laser displacement sensor to compute the current length of the SMA. Temperature sensor is placed right next to the SMA to measure the current temperature of the SMA.
                                        </li>
                                        <li>
                                            Finally, a fan set cools down the SMA via convection when there’s no current applied to it.
                                        </li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full my-12"
                 id="Sensor">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                                    <img
                                        className="object-contact object-left-top rounded border-solid border-4 border-steel-200"
                                        alt="hero"
                                        src={require('./Images/p4(b).png')}>
                                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Reinforcement Learning Network
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                        <li>
                                            Along with my colleague Chris Fugl, (who made most of the network)
                                            <a className="leading-normal  hover:underline text-center text-blue-600"
                                               href=""> Link, </a>
                                            we defined the RL algorithm to be Soft Actor Critic where the value function is defined using the Q-function, and α is a trainable parameter rather than a hyperparameter.
                                        </li>
                                        <li>
                                            The simplified workflow can be seen in the image.
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
                                        src={require('./Images/p4(e).png')}>
                                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Results
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">

                                        <li>
                                            Results show that our RL-based controller successfully can be useful for position control of SMA, even during external disturbances such as forced convection cooling.
                                        </li>
                                        <li>
                                            For the initial trajectory, the SMA is at room temperature and starts from 27.6 degrees for all of the initial trajectories.
                                        </li>
                                        <li>
                                            As can be expected, for all the other trajectories, since the SMA is transforming from austenite to martensite, initially there is a decrease in temperature due to forced convection cooling having more effect on the temperature sensor than the outer wire temperature of the SMA.
                                        </li>
                                        <li>
                                            The performance of the agent on 8 trajectories whose position, temperature and voltage applied to the SMA were tested.
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
                                        src={require('./Images/p4.mp4')}
                                        width="600"
                                        height="300"
                                        controls="controls" autoPlay="false">
                                    </video>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        The setup during Training
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                        <li>
                                            You can see the current and the postion of the SMA spring
                                        </li>
                                        <li>
                                            During training, the RL figuring out the voltage it should apply to leave the initial state
                                        </li>
                                        <li>
                                            With enough training, the network was able to keep the SMA at the desired location.
                                        </li>
                                        <li className= "list-none">-----------------    </li>

                                        <li>Fixed start position interval: 0 - 0.5 cm </li>
                                        <li>Fixed goal position: 5 cm.</li>
                                        <li>Training Time = 24 hours.</li>
                                        <li>Convergence =  8-10 hours.</li>

                                        <a className="leading-normal pb-t pb-6 hover:underline text-center text-blue-600"
                                       href="https://drive.google.com/file/d/1KHb47XV1sN3SWJtZ1rj0zy7Dy3DwDm6c/view?usp=sharing">Project Report...</a>
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
                    {s4.map((skill) => (
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