import React from "react";
import { Outlet, Link } from "react-router-dom";


export default function Project1(){
    return(

         <div className = "lg:flex-grow md:w lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center">
                    <h1 className = "title-font sm:text-4xl text-3xl mb-4 mx-auto font-medium text white">
                        This is Project 1
                        <br className = "hidden lg:inline-block" />
                    </h1>
                    <div className = "flex justify-around">
                    <img className = "object-contact object-left-top"
                         alt = "hero"
                         src = ""
                    >
                    </img>

                    <p className = "container px-10 py-10 mx-auto text-center leading-relaxed">

                        Description of Project 1
                    </p>
                    </div>
             <Outlet />
                </div>

    );
}