import React from "react";
import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";


export default function Project0(){

    const s0 = [
  "UV Lithography",
        "E-beam",
        "PhotoMask Design",
        "Reactive Ion Etching",
  "Dicing",
  "Sputter",
     "Wet Etching (KOH)",
        "Clean Room",
];

    return(
        <section id = "Project0">


            <div className="text-center pt-6 pb-4 text-black max-w-2xl mx-auto bg-gray-100">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">
                    MEMS Equipment Training
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
                         src={ require('./Images/p0(a).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Description
                                    </h2>
                                    <p className="leading-normal pt-3 text-gray-800">
                                        <li>
                                            Trained on the most widely used clean-room equipment for fabrication of a transparent optical sensor.
                                        </li>
                                        <li>
                                            Mentored other graduate students introducing them to MEMS equipment and their working principles
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
                         src={ require('./Images/p0(b1).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Lithography
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                        <li>
                                            Fabrication via UV I-line lithograhy for making micrometer optical waveguides.
                                        </li>

                                            --------------Optimizing the process steps namely--------------

                                        <li className= "list-none">    </li>

                                        <li>Spin-coating </li>
                                        <li>Edgebead Removal</li>
                                        <li>Soft-Bake and Post-Bake</li>
                                        <li>Photoresist Development</li>

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
                         src={ require('./Images/p0(b2).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Thin Film Deposition Techniques
                                    </h2>
                                    <p className="leading-normal pt-3 text-gray-800">
                                        <li>
                                            E-beam Evaporation was used for depositing multiple thin layers sequentially. I used it mostly for lift-off in my research (Cr, Cu, Ag, Ti, Ni)
                                        </li>
                                        <li>
                                            The Sputter was used to coat uniform films of various materials (Ag + Al)
                                        </li>
                                         <li>
                                            The images of both the equipment used are shown
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
                         src={ require('./Images/p0(d).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Micro-Pattern Fabrication
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        To enhance the response and sensitivity of a touch sensor, I fabricated the illustrated micro-pattern structure.
                                    </li>
                                        <li>
                                            SEM performed by SU5000 (HITACHI)
                                        </li>
                                        <p1 className="text-center">
                                        ------Protocol-----
                                    </p1>

                                        <li className= "list-none">    </li>

                                        <li>Prepare the Liftoff photoresist on the Si wafer</li>
                                        <li> Chrome and Gold are evaporated via E-Beam sequentially.</li>
                                        <li>The wafter is put inside acetone for liftoff. If the PR is crosslinked, try sonication</li>
                                        <li>Etching unsing 30% KOH @ 80 C. This results in an etch rate of approx. 1 microns/min.</li>
                                        <li>Rinse the wafer and treat it with silane before pouring PDMS (Sylgard (10:1)</li>
                                        <li>Cure @ 120 C for 2 hours and remove the PDMS.</li>
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
                         src={ require('./Images/p0(c).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Pre + Post Processing
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        -------Pre and post processing steps in micro-fabrication------

                                        <li className= "list-none">    </li>

                                        <li>Asher </li>
                                        <li>Dicing</li>
                                        <li>Self- assembled monolayer deposition</li>
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
                         src={ require('./Images/p0(e).png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold text-center leading-tight text-gray-800">
                                        Mono-Layer Fabrication
                                    </h2>
                                    <p className="leading-normal pt-2 text-gray-800 list-disc">
                                    <li>
                                        To create anti-reflection surface, I used polystyrene nanoparticles to get a monolayer mold.
                                    </li>
                                        <p1 className="text-center">
                                        ------Protocol-----
                                    </p1>

                                        <li className= "list-none">    </li>

                                        <li>Washed in piranha (98% H2SO4and 30% H2O2, v/v = 3:1) at 100C for 20 min.</li>
                                        <li> Next, RCA cleaning (H2O2:NH4OH:H2O = 1:1:5) at 100C for 10 min. The cleaned substrates are kept in DI water until use.</li>
                                        <li>Before using, the fluorescent nanosphere suspension is centrifuged.</li>
                                        <li>A methanol + Tween 20 (48 µl : 2 µl) solution was made and then mixed with microsphere stock solution with a ratio of 3 parts stock and 1 part  (methanol + Tween 20).</li>
                                        <li>20 µl of the newly made nanosphere suspension is pipetted (2 µl at a time) onto the glass slide.</li>
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
                        Equipment
                    </h1>
                </div>
                <div className = "flex flex-wrap lg:w-4/5 sm:mx-auto sm: mb-2 -mx-2">{/* negative margin: pulls the element towards the previous element. Where margin pushes away, this pulls it closer to it*/}
                    {s0.map((skill) =>(
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