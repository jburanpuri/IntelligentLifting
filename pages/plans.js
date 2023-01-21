import React from 'react'
import Link from 'next/link'
import ThreeFullBody from '../components/PlansComponent/ThreeDayPlans/fullbody'
import FourFullBody from '../components/PlansComponent/FourDayPlans/fullbody'
import FiveFullBody from '../components/PlansComponent/FiveDayPlans/fullbody'
import ThreeUpper from '../components/PlansComponent/ThreeDayPlans/upperfocused'
import FourUpper from '../components/PlansComponent/FourDayPlans/upperfocused'
import FiveUpper from '../components/PlansComponent/FiveDayPlans/upperfocused'



export default function Plans() {
  return (
    <>
            <div className="bg-gray-400 py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl  font-black leading-7 md:leading-10 py-2 px-4">
        <span className="font-extrabold text-transparent bg-clip-text text-black">ALL ROUTINES</span>        </h2>
    </div>
        <div className="bg-gray-200 py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-gray-800 font-black leading-7 md:leading-10 py-2 px-4">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-600 to-indigo-700">THREE DAY ROUTINES</span>        </h2>
    </div>
        <ThreeFullBody/>
        <hr className="border-black w-full"></hr>
        <ThreeUpper/>

        <div className="bg-gray-200 py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-gray-800 font-black leading-7 md:leading-10 py-2 px-4">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-600 to-indigo-700">FOUR DAY ROUTINES</span>        </h2>
    </div>
        <FourFullBody/>
        <hr className="border-black w-full"></hr>
        <FourUpper/>
        <div className="bg-gray-200 py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-gray-800 font-black leading-7 md:leading-10 py-2 px-4">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-600 to-indigo-700">FIVE DAY ROUTINES</span>
        </h2>
    </div>
        <FiveFullBody/>
        <hr className="border-black w-full"></hr>
        <FiveUpper/>

    </>

  )
}
