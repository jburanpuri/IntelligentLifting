import React from "react";


export default function Hero() {
    return (
      <div>
        <section className="flex flex-col min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700">
          <div className="flex-1 flex items-center">
            <div className="text-center mx-auto">
              <h1 className="font-extrabold text-7xl text-primary">Intelligent Lifting</h1>
              <p className="font-light text-3xl mt-5">A place to get the best workout plans, for free.</p>
              <a className="px-6 py-3 text-xl inline-block rounded-md bg-primary text-white hover:bg-cyan-400 transition-colors mt-10" href>Get Started</a>
            </div>
          </div>
        </section>
      </div>
);
}
