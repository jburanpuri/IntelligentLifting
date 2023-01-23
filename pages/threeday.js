import React from "react"
import FullBody from "../components/PlansComponent/ThreeDayPlans/fullbody"
import UpperBody from "../components/PlansComponent/ThreeDayPlans/upperfocused"

export default function ThreeDay() {
    return (
        <>
        <div className="bg-gray-900 py-4">
        <h2 className="px-4 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-black leading-7 md:leading-10">
        <span className="font-extrabold text-transparent bg-clip-text text-primary">THREE DAY ROUTINES</span>        </h2>
        </div>
            <FullBody />
            <UpperBody />
        </>
        
    )
}