import React from "react";
import Link from 'next/link'

export default function Footer() {
    return (

<footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-black">
    <span class="text-base text-white sm:text-center">© 2023 <Link href="/home" class="hover:underline">Intelligent Lifting</Link>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-white sm:mt-0 text-base">
        <li>
            <Link href="/plans" class="mr-4 hover:underline md:mr-6 ">Plans</Link>
        </li>
        <li>
            <Link href="https://github.com/jburanpuri/IntelligentLifting" target="_blank" class="mr-4 hover:underline md:mr-6">GitHub Repository</Link>
        </li>
    </ul>
</footer>

)};

