import React from 'react';
import Value from './MarketingItems/value';
import Accountability from './MarketingItems/accountability';
import Data from './MarketingItems/data';
import Custom from './MarketingItems/custom';
import Limited from './MarketingItems/limited';
import Strength from './MarketingItems/strength';

export default function Test() {
    return (
        <div>
        
        <h1 className="mt-20 text-4xl font-extrabold tracking-tight text-center md:text-5xl xl:text-6xl text-white">Why Intelligent Lifting</h1>
            <Value />
            <Accountability/>
            <Data />
            <Custom />
            <Limited />
            <Strength />
        </div>

    )}