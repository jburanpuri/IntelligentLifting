import React from 'react'
import Link from 'next/link'
import ThreeFullBody from '../components/PlansComponent/3DayPlans/fullbody'
import FourFullBody from '../components/PlansComponent/4DayPlans/fullbody'
import FiveFullBody from '../components/PlansComponent/5DayPlans/fullbody'
import ThreeUpper from '../components/PlansComponent/3DayPlans/upperfocused'
import FourUpper from '../components/PlansComponent/4DayPlans/upperfocused'
import FiveUpper from '../components/PlansComponent/5DayPlans/upperfocused'



export default function Plans() {
  return (
    <>
        <div className="bg-gray-300 py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10">
            <span className="text-indigo-500">THREE DAY ROUTINES</span>
        </h2>
    </div>
        <ThreeFullBody/>
        <hr className="border-black w-full"></hr>
        <ThreeUpper/>

        <div className="bg-gray-300 py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10">
            <span className="text-indigo-500">FOUR DAY ROUTINES</span>
        </h2>
    </div>
        <FourFullBody/>
        <hr className="border-black w-full"></hr>
        <FourUpper/>
        <div className="bg-gray-300 py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10">
            <span className="text-indigo-500">FIVE DAY ROUTINES</span>
        </h2>
    </div>
        <FiveFullBody/>
        <hr className="border-black w-full"></hr>
        <FiveUpper/>
    </>

  )
}
