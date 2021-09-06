import React from "react";
import { useState } from "react";


export default function Contact(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    
    function encode(data) {
        return Object.keys(data).map(
            (key) => encodeURIComponent + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/" ,{
            method: "POST",
            headers: { "Content-Type" : "application/x-www-form-urlencoded"},
            body: encode({ "form-name" :"contact", name, email, message })
        })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));

    }
    
    
    return(
        <section id = "contact" className = "relative"> {/*Offsets are calculated relative to the element’s normal position and the element will act as a position reference for absolutely positioned children. */}
            <div className = "container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"> {/*flex no wrap means that tings will overflow out the screen and flex wrap will mean things will go to newline at container overflow*/}
                <div className = "lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    {/*inline-frame: used to embed a doc within the html doc, inset-0 means fill container*/}
                    <iframe
                        width = "100%"
                        height = "100%"
                        title = "map"
                        className = "absolute inset-0"
                        frameBorder = {0}
                        marginHeight = {0}
                        marginWidth = {0}
                        style = {{filter: "opacity(0.7)"}}
                        src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1606.2529071684903!2d127.35986965082893!3d36.372747404415215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9fa607e06759a2c9!2zS0FJU1Qg7ZWc6rWt6rO87ZWZ6riw7Iig7JuQIOuMgOuNley6oO2NvOyKpA!5e0!3m2!1sen!2skr!4v1626513946313!5m2!1sen!2skr&fbclid=IwAR2OzgQOkRGqMgfi24Fb7OHCaL72CThGMlpjtYtmonb3VQ0tTHrETl1-iT4"
                    />
                    <div className = "bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className = "title-font font-semibold text-white tracking-widest text-xs">
                            <h2 className = "title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className = "mt-1">
                                #7120 Mech. Eng. Bldg. (N7) <br />
                                Guseong-dong, Yuseong-gu, Daejeon
                            </p>
                        </div>
                        <div className = "lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className = "title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                ibrahimbinyasir@kaist.ac.kr
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">
                                +82-10-2937-8980
                            </p>
                        </div>
                    </div>
                </div>
                <form
                netlify
                name = "contact"
                className = "lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                >
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        If you are looking for a design engineer or have any project for collaboration, Feel free to contact.
                        I’ll try my best to get back to you as soon as I can! {/*why hire? */}
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-white">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange = {(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-white">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                        htmlFor="message"
                        className="leading-7 text-sm text-white">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}