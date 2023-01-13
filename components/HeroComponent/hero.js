import React from "react";

export default function Hero() {
    return (
        <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Get Bigger and Stronger, Faster.</span>
                        <span className="block">For an expensive price of $0</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
                        Training plans don't have to be expensive.
                        We believe fitness can change the world, and our platform will provide you with everything you need to get started.
                        Our plans are not simple cookie-cutter plans like you see on other sites. Our plans adabt to your body, To find out more, click below.
                    </p>
                    <div className="mt-8 flex justify-center">

                        <div className="ml-3 inline-flex">
                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                                Learn More 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
