import React from 'react'
import Link from 'next/link'
import FivePower from '../components/PlansComponent/FiveDayPlans/powerlifting' 
import FiveFull from '../components/PlansComponent/FiveDayPlans/fullbody'

export default function Plans() {
  return (
    <>
        <div className="bg-gray-900 py-4">
        <h2 className="px-4 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-black leading-7 md:leading-10">
        <span className="font-extrabold text-transparent bg-clip-text text-primary">ALL ROUTINES</span>        </h2>
        </div>
      <FivePower />
      <FiveFull />
        </>

  )
}
