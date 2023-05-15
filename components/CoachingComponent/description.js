import React from 'react'

const Description = () => {
    return (
        <section>
        <div className="grid max-w-fit px-4 py-6 lg:mx-16 lg:gap-0 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <h1 className="max-w-3xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Personal Coaching</h1>
            <p className="max-w-3xl mb-6 font-sm text-gray-200 lg:mb-8 md:text-xl lg:text-2xl">
            Investing in your health and fitness is one of the best things you can do for yourself, and we're here to make that journey as easy and enjoyable as possible. 

Our wellness center offers fully custom workout plans that are tailored to your specific goals, fitness level, and equipment availability. We also provide complete wellness plans that encompass every aspect of health optimization, including cardio, training, supplements, diet, sleep optimization, and more.

But our best offering is our monthly coaching package. With weekly consultations to keep you accountable and on track, 24/7 support for any questions or concerns, a 19-page fitness guide, and constantly changing plans and diets to stay ahead of your body's adaptation, our expert guidance will help you reach your goals and optimize your life.

Join us today and let's work together to achieve your desired level of fitness and health.
            </p>
           <a href="#buy" className="inline-flex justify-center items-center py-3 px-5 text-3xl font-medium text-center text-black rounded-lg bg-primary hover:bg-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
        Buy Now
        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-1 lg:flex">
            <img src="/custom.png" alt="mockup" className="rounded-xl h-auto w-48 lg:w-auto" />
          </div>                
        </div>
      </section>
    )
}

export default Description