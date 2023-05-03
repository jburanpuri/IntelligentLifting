import React, { useState } from 'react';
import Head from 'next/head';
import Description from '../components/CoachingComponent/description';
import Checklist from '../components/CoachingComponent/checklist';
import Timeline from '../components/CoachingComponent/timeline';
import Payments from '../components/CoachingComponent/payments';
import CoachingInfo from '../components/CoachingComponent/coachingInfo';

export default function Custom() {
  return (
    <div className="bg-gray-900">
    <Head>
        <title>
         Personal Coaching and Wellness Plans
        </title>
        <meta
          name="description"
          content="Looking to improve your quality of life and physical strength and size? Look no further! 
          Our tailored fitness solutions are specifically designed for you, using your fitness profile. 
          We offer monthly consultations for coaching, as well as one-time payment wellness plans that include everything you need for optimal wellness - cardio, training, supplements, diet, sleep optimization and more! 
          And the best part? Our prices are unbeatable compared to our competitors. 
          Get started today and see the results for yourself! "
          key="desc"
        />
      </Head>
<div className="bg-gradient-to-t from-gray-900 to-black">
      <Description />
      </div>
      <div className="bg-gray-900">
      <Checklist />
      <CoachingInfo />
      <Timeline />
      </div>

      <Payments />
    </div>
    );
};


