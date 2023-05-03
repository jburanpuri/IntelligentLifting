import React from 'react'
import Link from 'next/link'
import FivePower from '../components/PlansComponent/FiveDayPlans/powerlifting' 
import FourFull from '../components/PlansComponent/FourDayPlans/fullbody'
import Head from 'next/head';

export default function Plans() {
  return (
    <>
        <Head>
        <title>
         Free Training Plans
        </title>
        <meta
          name="Free Workout Plans"
          content="Looking for the ultimate workout plan that is free, adaptable, and customizable just for you? Look no further! 
          Our cutting-edge workout plans are available at no cost and with no strings attached. 
          No emails, no credit cards required - just try it out and see the results for yourself! 
          Our plans are tailored to your body type and adapt to your progress, providing a more personal coaching experience than cookie-cutter plans. 
          And with new plans released weekly, you'll never run out of options for reaching your fitness goals. 
          So what are you waiting for? Get started today and transform your body and life! "
          key="desc"
        />
      </Head>
    <div className="bg-black text-center py-36">
    <h1 className="text-4xl font-bold text-primary">Free Workout Plans</h1>
</div>
      <FivePower />
      <FourFull />
        </>

  )
}
