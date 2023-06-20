import React from 'react';
import Image from 'next/image';

const Data = () => {
    return (
        <section className="relative pt-12 bg-blueGray-50 py-20">
                <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Image 
                        alt="Data Driven" 
                        className="max-w-full rounded-lg shadow-lg" 
                        src="/coaching/3.png" 
                        width={800}
                        height={800}
                    />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                    
                    <h3 className="text-3xl font-semibold text-white mt-5">Data Driven</h3>
                    <p className="mt-4 text-lg leading-relaxed text-white">
                    We take a data-driven approach to help you achieve your health and fitness goals. 
                    We believe in monitoring progress through regular check-ins, and we make it a priority to help you stay on track every step of the way. 
                    We understand that sustainable progress requires a workout plan that is both enjoyable and effective, which is why we work with you to create a customized plan tailored to your specific needs and preferences. 
                    Our ultimate goal is to improve every aspect of your health over the long-term, and we're committed to supporting you on this journey with personalized attention and guidance.
                    </p>
                    <ul className="list-none mt-6">
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-primary mr-3 "><i className="fas fa-fingerprint" /></span>
                            </div>
                            <div>
                            <h4 className="text-white">
                                Weight measurements every week
                            </h4>
                            </div>
                        </div>
                        </li>
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-primary mr-3"><i className="fas fa-fingerprint" /></span>
                            </div>
                            <div>
                            <h4 className="text-white">
                                Ensure the plan is sustainable and fun
                            </h4>
                            </div>
                        </div>
                        </li>
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-primary mr-3"><i className="fas fa-fingerprint" /></span>
                            </div>
                            <div>
                            <h4 className="text-white">
                                Make sure your joints and connective tissues are safe
                            </h4>
                            </div>
                        </div>   
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
    )}

export default Data;