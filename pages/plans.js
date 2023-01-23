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
        <div className="bg-gray-900 py-4">
        <h2 className="px-4 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-black leading-7 md:leading-10">
        <span className="font-extrabold text-transparent bg-clip-text text-primary">THREE DAY ROUTINES</span>        </h2>
        </div>
        <ThreeFullBody/>
        <ThreeUpper/>
        <div className="bg-gray-900 py-4">
        <h2 className="px-4 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-black leading-7 md:leading-10">
        <span className="font-extrabold text-transparent bg-clip-text text-primary">FOUR DAY ROUTINES</span>        </h2>
        </div>
        <FourFullBody/>
        <FourUpper/>
        <div className="bg-gray-900 py-4">
        <h2 className="px-4 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-black leading-7 md:leading-10">
        <span className="font-extrabold text-transparent bg-clip-text text-primary">FIVE DAY ROUTINES</span>        </h2>
        </div>
        <FiveFullBody/>
        <FiveUpper/>

        </>

  )
}
