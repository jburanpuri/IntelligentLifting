import React from 'react'

const Description = () => {
    return (
        <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Custom Training</h1>
            <p className="max-w-2xl mb-6 font-large text-gray-200 lg:mb-8 md:text-xl lg:text-2xl">By simply filling out our comprehensive questionnaire, we'll use your unique fitness profile to create a personalized workout plan that takes into account your goals, physical abilities, schedule, preferred exercises, and available equipment. 
            Say goodbye to generic workout routines and hello to a customized plan that's all about you! In addition, we offer a wellness package to help transform your life even further!</p>
           <a href="#buy" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-primary hover:bg-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
        Buy Now
        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/custom.png" alt="mockup" className="rounded-xl" />
          </div>                
        </div>
      </section>
    )
}

export default Description