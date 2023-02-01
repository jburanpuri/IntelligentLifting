import React, { useState } from 'react';

export default function Custom() {
  return (
    <div className="bg-gray-900">
    <div className="bg-gradient-to-t from-gray-900 to-black text-center py-52">
    <h1 className="text-4xl font-bold text-primary">Custom Made Workout Plans</h1>
    <h1 className="text-3xl font-semibold py-5 text-white">Coming Soon</h1>
</div>
<div>
<section>
  <div className="bg-gray-900 text-white py-12">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="ml-2 text-primary uppercase tracking-loose">Approximate Timeline</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Great Products Delivered Fast</p>
        <p className="text-sm md:text-base text-gray-50 mb-4">
          This is an estimated timeline of when you can expect your custom workout plan to be ready.
        </p>

      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
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
                <p className="mb-3 text-base text-primary">Within 14 Days after Recieving Final Plan</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Return Policy</h4>
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
        <div className="py-5">
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table pricing-table-id="prctbl_1MWoEcGDnKaPJ8BWon1nJCNA"
        publishable-key="pk_live_51L8ZmeGDnKaPJ8BW6K6t4gny0fXqSuQw6f6ODSZw0j1Cb4lpNKJaf67X0D4MkJkQwuVJYo8XT1V4W1udNmoYzZxB003CXbcPWB">
        </stripe-pricing-table>
        </div>
    </div>
    );
};


