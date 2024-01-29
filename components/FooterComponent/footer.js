import React from "react";
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h5 className="text-xl fonat-semibold text-white">Any feedback or questions? Contact me on Instagram!</h5>
              <h5 className="text-lg mt-0 mb-2 text-white py-3">
                We respond within 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a href="https://www.instagram.com/sonulifts/" aria-label="Link to SonuLifts Instagram" className="bg-black text-lightBlue-400 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-10 h-10" style={{ color: '#c13584' }}>
                    {<path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />}
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-lg font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-white font-semibold block pb-2 text-normal" href="/">Home</Link>
                    </li>
                    <li>
                      <Link className="text-white font-semibold block pb-2 text-normal" href="/plans">Free Plans</Link>
                    </li>
                    <li>
                      <Link className="text-white font-semibold block pb-2 text-normal" href="/custom">Personal Coaching</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-normal text-white font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span><Link href="/" className="text-white hover:text-primary"> Intelligent Lifting by
                </Link><Link href="/" className="text-white hover:text-primary"> Sonu Lifts</Link>.
              </div>
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
};

