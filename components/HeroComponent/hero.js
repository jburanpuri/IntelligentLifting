import React from "react";
import Link from "next/link";

export default function Hero() {
    return (
      <div>
<section className="flex flex-col min-h-screen bg-gradient-to-t from-gray-900 to-black">
            <div className="flex-1 flex items-center">
            <div className="text-center mx-auto">
              <h1 className="font-extrabold text-7xl text-primary">Intelligent Lifting</h1>
              <p className="px-4 font-normal text-white text-4xl mt-5 ">All your fitness needs covered</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="px-2">
        <Link className="block w-full rounded bg-primary px-8 py-3 text-xl font-lg  text-black shadow hover:bg-white focus:outline-none focus:ring active:bg-red-500 sm:w-auto" href="/custom">
          Personal Coaching
        </Link>
        </div>
        <div className="px-2">
        <Link className="block w-full rounded px-8 py-3 text-xl border-primary border-4 font-lg text-primary shadow hover:bg-black hover:text-white focus:outline-none focus:ring sm:w-auto" href="/plans">
          Free Plans
        </Link>
        </div>
        </div>
            </div>
          </div>
        </section>
      </div>
);
}
