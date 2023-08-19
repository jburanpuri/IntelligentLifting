import React from 'react';
import Image from 'next/image';

const Accountability = () => {
    return (
        <section className="relative pt-12 bg-blueGray-50 py-20">
            <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <Image
                        alt="Accountability"
                        className="max-w-full rounded-lg shadow-lg"
                        src="/coaching/2.png"
                        width={800}
                        height={800}
                    />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">

                        <h3 className="text-3xl font-semibold text-white mt-5">Collaborative Effort</h3>
                        <p className="mt-4 text-lg leading-relaxed text-white">
                            We prioritize your success and will work collaboratively with you to ensure that your goals are met.
                            We understand that progress requires consistent effort and attention, which is why we provide weekly check-ins to help keep you on track.
                            During these check-ins, we'll review your progress and identify any necessary adjustments to ensure that you stay on course and achieve your goals in a timely and efficient manner.
                            We believe that our partnership with you is key to your success, and we're committed to providing you with the support and guidance you need to excel
                        </p>
                        <ul className="list-none mt-6">
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-primary mr-3 "><i className="fas fa-fingerprint" /></span>
                                    </div>
                                    <div>
                                        <h4 className="text-white">
                                            Collaborative approach to goal-setting and progress tracking
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
                                            Weekly check-ins to monitor progress
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
                                            24/7 help via email or text
                                        </h4>
                                    </div>
                                </div>
                            </li>

                        </ul>
                        <div className='py-5'><a href="#buy" className="inline-flex justify-center items-center py-2 px-5 text-l font-2xl text-center text-black rounded-lg bg-primary hover:bg-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Buy Now
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accountability;