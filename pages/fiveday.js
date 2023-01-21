import React from "react"
import FullBody from "../components/PlansComponent/FiveDayPlans/fullbody"
import UpperBody from "../components/PlansComponent/FiveDayPlans/upperfocused"

export default function FiveDay() {
    return (
        <>
                <div className="bg-gray-300 py-4">
        <h2 className="text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-gray-800 font-black leading-7 md:leading-10 py-2 px-4">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-600 to-indigo-700">FIVE DAY ROUTINES</span>        </h2>
    </div>
            <FullBody />
            <UpperBody />
        </>
        
    )
}