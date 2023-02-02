import React, { useState } from 'react';


export default function Custom() {
  return (
    <div className="bg-gray-900">
      <section className="bg-white bg-gradient-to-t from-gray-900 to-black">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Personal Coaching</h1>
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

<section>
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-24 space-y-12 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-1/2 text-white">
			<div className="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Fully Customized</p>
					<p className="leading-snug">Experience the exceptional quality that you've come to know and love from our free plans, elevated to new heights with a personal aspect</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Unique For Everyone</p>
					<p className="leading-snug">Want to focus on glutes and shoulders? Chest and hamstrings? We got you! The plan will be completely unique to you</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Tailoried with Science</p>
					<p className="leading-snug">We don't use bro-science. We use scientific principles to make our plans stand out. 
          We also make them more fun than any plan on the market. Hard work, consistency, and a good plan will transform your physique</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
      <div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Perfect for Natural Lifters</p>
					<p className="leading-snug">Natural lifters need to dial in sleep, training, and diet. We can help you do all three with our complete wellness plan</p>
				</div>
      </div>



      <div className="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
      <div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Supplement Routine</p>
					<p className="leading-snug">Get an entire supplement profile to enhance your quality of life, training, recovery and performance</p>
				</div>
		</div>
    <div className="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
      <div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Vegetarian and Vegan Meal Plans</p>
					<p className="leading-snug">Most places provide meal plans which don't work for vegetarians! 
          They only contain animal protein, whereas our meal plans will be perfect for your needs! Pasta, tofu, Indian food and more meals!</p>
				</div>
		</div>
    <div className="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
    <div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Rivisions! Rivisions! Rivisions!</p>
					<p className="leading-snug">Give me feedback on what you like! We will work together to make a routine that works for you</p>
				</div>
		</div> 
</div>                
		<div className="lg:w-1/2 xl:w-1/2 ">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img src="/transformation.png" alt="" className="rounded-lg shadow-lg bg-gray-500 sm:min-h-96" />
			</div>
		</div>
	</div>
</section>

    <div>
<section>
  <div className="bg-gray-900 text-white py-12">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-5 md:mt-12 px-8">
        <p className="ml-2 text-primary uppercase tracking-loose">Approximate Timeline</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Great Products Delivered Fast</p>
        <p className="text-sm md:text-base text-gray-50 mb-4">
          This is an estimated timeline of when you can expect your custom workout plan to be ready.
        </p>

      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-primary absolute h-full border" style={{right: '50%', border: '2px solid #FFC100', borderRadius: '1%'}} />
            <div className="border-2-2 border-primary absolute h-full border" style={{left: '50%', border: '2px solid #FFC100', borderRadius: '1%'}} />
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-primary">Within 48 Hours</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Questionaire Email</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    You will receive an email with a link to a google form. This google form will ask you everything to create your ideal workout plan.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-primary">Within Five Days</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Prototype Plan</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    After you fill the google form, we will create a prototype workout plan for you. This will be sent to you via email. 
                    This plan will be our starting point, we will make changes to it based on your feedback.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-primary">Within Eight Days</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Final Plans</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  After constant revisions and feedback, we will create your final workout plan
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-primary">Within Six Months</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Insane Gains</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  If you don't make progress with your plan within 6 months, we will refund you 100% of your money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
        <div id="buy" className="py-5">
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table pricing-table-id="prctbl_1MWoEcGDnKaPJ8BWon1nJCNA"
        publishable-key="pk_live_51L8ZmeGDnKaPJ8BW6K6t4gny0fXqSuQw6f6ODSZw0j1Cb4lpNKJaf67X0D4MkJkQwuVJYo8XT1V4W1udNmoYzZxB003CXbcPWB">
        </stripe-pricing-table>
        </div>
    </div>
    );
};


