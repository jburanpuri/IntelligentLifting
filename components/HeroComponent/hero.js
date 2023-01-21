import React from "react";
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="bg-gray-100 pb-12 overflow-y-hidden" style={{ minHeight: 300 }}>
        <dh-component>
            <div className="bg-gray-100">
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-16">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">

                        <span className="text-red-500">FREE </span>
                            workout plans that adapt to your
                            <span className="text-indigo-700"> RECOVERY </span>
                            to maximize results
                            
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-black-100 font-normal text-center text-sm sm:text-lg">Transform Your Body with an Adaptable Workout Plan - No More Overpaying for Personal Trainers or Settling for One-Size-Fits-All Plans!</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/plans" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">See Plans</Link>
                    </div>
                </div>
            </div>
        </dh-component>
    </div>

    );
}
