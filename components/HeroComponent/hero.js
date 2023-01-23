import React from "react";
import Link from "next/link";

export default function Hero() {
    return (
      <div>
<section className="flex flex-col min-h-screen bg-gradient-to-t from-neutral-900 to-black">
            <div className="flex-1 flex items-center">
            <div className="text-center mx-auto">
              <h1 className="font-extrabold text-7xl text-primary">Intelligent Lifting</h1>
              <p className="px-4 font-normal text-primary text-4xl mt-5 ">The place to get the best workout plans, for free</p>
              <Link className="px-6 py-3 text-xl inline-block rounded-md bg-primary text-black hover:bg-white transition-colors mt-10 " href="/plans">See Plans</Link>
            </div>
          </div>
        </section>
      </div>
);
}
