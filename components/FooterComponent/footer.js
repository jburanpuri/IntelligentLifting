import React from "react";
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-black text-white bottom-0 w-full py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-center">Intelligent Lifting</div>
          <div className="flex">
            <Link href="/home" className="px-4 py-2 text-white hover:bg-indigo-800 rounded-md">Home</Link>
            <Link href="/plans" className="px-4 py-2 text-white hover:bg-indigo-800 rounded-md">Plans</Link>
            <Link href="https://github.com/jburanpuri/IntelligentLifting" target="_blank" className="px-4 py-2 text-white hover:bg-indigo-800 rounded-md">GitHub</Link>
          </div>
        </div>
      </footer>
)};

