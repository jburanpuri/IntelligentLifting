import React from "react";

export default function Hero() {
    return (
        <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to improve your physique?</span>
                        <span className="block">Get a plan today.</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
                        Make strength and hypertrophy gains like never before. Specialized plan or full body, we have you covered.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="inline-flex rounded-md shadow">
                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700">
                                Get started
                            </a>
                        </div>
                        <div className="ml-3 inline-flex">
                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}