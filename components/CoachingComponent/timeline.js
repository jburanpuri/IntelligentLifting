import React from 'react'

const Timeline = () => {
    return (
        <section>
  <div className=" text-white py-12">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-5 md:mt-12 px-8">
        <p className="ml-2 text-primary uppercase tracking-loose">Approximate Timeline</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Great Products Delivered Fast</p>
        <p className="text-sm md:text-base text-gray-50 mb-4">
          This is an estimated timeline of when you can expect your custom workout plan to be ready
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
                    You will receive an email with a link to a google form. This google form will ask you everything to create your ideal workout plan
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
                    This plan will be our starting point, we will make changes to it based on your feedback
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-primary">Within Eight Days</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Finalize Your Plan</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  After constant revisions and feedback, we will create your ideal workout plan based on your goals and preferences
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-primary">Within Six Months</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Results</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Expect consistent results with your strength, muscle building, and weight journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )}

export default Timeline