import React from 'react'
import Link from 'next/link'
import ThreeFullBody from '../components/PlansComponent/3DayPlans/FullBody'
import FourFullBody from '../components/PlansComponent/4DayPlans/FullBody'
import FiveFullBody from '../components/PlansComponent/5DayPlans/FullBody'



export default function Plans() {
  return (
    <>
        <div className="bg-black py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10">
            <span className="text-indigo-500">THREE DAY ROUTINES</span>
        </h2>
    </div>
        <ThreeFullBody/>

        <div className="bg-black py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10">
            <span className="text-indigo-500">FOUR DAY ROUTINES</span>
        </h2>
    </div>
        <FourFullBody/>

        <div className="bg-black py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10">
            <span className="text-indigo-500">FIVE DAY ROUTINES</span>
        </h2>
    </div>
        <FiveFullBody/>
    </>

  )
}
