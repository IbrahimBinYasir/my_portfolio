import React from "react";


export default function Project1(){
    return(
        <section id = "Project1">

         <div className = "lg:flex-grow md:w lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center">
                    <h1 className = "title-font sm:text-4xl text-3xl mb-4 mx-auto font-medium text white">
                        This is Project 1
                        <br className = "hidden lg:inline-block" />
                    </h1>
                </div>


            <div className="w-full my-12">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-white w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                   <img className = "object-contact object-left-top rounded border-solid border-4 border-steel-200"
                         alt = "hero"
                         src={ require('./Images/project-1.png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold leading-tight text-gray-800">Ready to use
                                        components</h2>
                                    <p className="leading-normal pt-2">It provides a very simple start, no need to write
                                        a lot of code, you just import it and start the primitive components and create
                                        the ones you need.</p>

                                    <a className="leading-normal pt-2 hover:underline text-blue-600" href="">Read
                                        more...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



                      <div className="w-full my-12">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-white w-full shadow rounded p-8">
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-6/12 rounded overflow-hidden">
                   <img className = "object-contact object-left-top rounded border-solid border-4 border-steel-200"
                         alt = "hero"
                         src={ require('./Images/project-1.png') }>
                    </img>
                                </div>
                                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                                    <h2 className="text-lg font-semibold leading-tight text-gray-800">Ready to use
                                        components</h2>
                                    <p className="leading-normal pt-2">It provides a very simple start, no need to write
                                        a lot of code, you just import it and start the primitive components and create
                                        the ones you need.</p>

                                    <a className="leading-normal pt-2 hover:underline text-blue-600" href="">Read
                                        more...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    );
}