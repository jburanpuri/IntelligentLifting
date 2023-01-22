import React from "react";
import Link from "next/link";

export default function Hero() {
    return (
      <div>
        <section className="flex flex-col min-h-screen bg-gradient-to-b from-primary via-yellow-300 to-primary">
          <div className="flex-1 flex items-center">
            <div className="text-center mx-auto">
              <h1 className="font-extrabold text-7xl text-black">Intelligent Lifting</h1>
              <p className="px-4 font-normal text-black text-4xl mt-5">The place to get the best workout plans, for free</p>
              <Link className="px-6 py-3 text-xl inline-block rounded-md bg-black text-white hover:bg-cyan-400 transition-colors mt-10" href="/plans">See Plans</Link>
            </div>
          </div>
        </section>
      </div>
);
}
