import React from 'react'
import Link from 'next/link'
import FivePower from '../components/PlansComponent/FiveDayPlans/powerlifting' 
import FiveFull from '../components/PlansComponent/FiveDayPlans/fullbody'

export default function Plans() {
  return (
    <>
    <div className="bg-gradient-to-t from-gray-900 to-black text-center py-52">
    <h1 className="text-4xl font-bold text-primary">Free Workout Plans</h1>
    <h1 className="text-3xl font-semibold py-5 text-white">New Plan, Every Week</h1>
</div>
      <FivePower />
      <FiveFull />
        </>

  )
}
