import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials(){
    return(
        <section id = "testimonials">
            <div className = "container px-5 py-10 auto text-center">
                <UsersIcon className = "w-10 inline-block mb-4"/>
                <h1 className = "sm:text-4xl text-3xl font-medium title-font text-black mb-12">
                    Testimonials
                </h1>
                <div className = "flex flex-wrap m-4">
                    {testimonials.map((testimonial) => (
                        <div className = "p-4 md:w-1/2 w-full">
                            <div className = "h-full bg-gray-600 bg-opacity-40 p-8 rounded">
                                <p className = "leading-relaxed mb-6 italic">
                                    {testimonial.quote}
                                </p>
                                <div className = "inline-flex items-center text-2 lg:-4 md:-3 sm:-2  sm:px-6 ">
                                <img 
                                    alt = "testimonial"
                                    src = {testimonial.image}
                                    className = "w-12 rounded-full flex-shrink-0 object-cover object-center" 
                                /> {/*resize object to fill the entire container */}
                                <span className = "flex-grow flex flex flex-col pl-4">
                                    <span className = "title-font font-medium text-white">
                                        {testimonial.name}
                                    </span>
                                    <span className = "text-white text-sm uppercase">
                                        {testimonial.company}
                                    </span>

                                </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}