import React from "react"
import FullBody from "../components/PlansComponent/FiveDayPlans/fullbody"
import UpperBody from "../components/PlansComponent/FiveDayPlans/upperfocused"

export default function FiveDay() {
    return (
        <>
        <div className="bg-gray-900 py-4">
        <h2 className="px-4 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-black leading-7 md:leading-10">
        <span className="font-extrabold text-transparent bg-clip-text text-primary">FIVE DAY ROUTINES</span>        </h2>
        </div>
            <FullBody />
            <UpperBody />
        </>
        
    )
}