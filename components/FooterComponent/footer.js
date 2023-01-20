import React from "react";

export default function Footer() {
    return (

<footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 flex flex-col">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="intelligentlifting.com" class="hover:underline">Intelligent Lifting</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">All Plans</a>
        </li>
    </ul>
</footer>
)};

