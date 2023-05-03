import React from 'react';

const Strength = () => {
    return (
        <section className="relative pt-12 bg-blueGray-50 py-20">
                <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." className="max-w-full rounded-lg shadow-lg" src="./coaching/7.png" />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                    
                    <h3 className="text-3xl font-semibold text-white mt-5">Best Strength and Size Gains</h3>
                    <p className="mt-4 text-lg leading-relaxed text-white">
                    Achieve incredible strength gains in record time by customizing your workout plan to fit your unique recovery needs. 
                    With our expert guidance, you'll optimize every aspect of your training regimen, including sleep, diet, and exercise, to help you push past your limits and achieve your fitness goals like never before. 
                    Get ready to unleash your inner strength and become the best version of yourself with our tailored approach to fitness.

                    </p>
                    <ul className="list-none mt-6">
                        <li className="py-2">
                        <div className="flex items-center">
                            <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-primary mr-3 "><i className="fas fa-fingerprint" /></span>
                            </div>
                            <div>
                            <h4 className="text-white">
                            Make over 1000 lbs total strength gains over a few years by tailoring your workout plan to your recovery
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
                                Improve other aspects of life such as diet and sleep to improve recovery
                            </h4>
                            </div>
                        </div>
                        </li>
                       
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            
    )
}

export default Strength