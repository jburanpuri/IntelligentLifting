import React from "react";
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-indigo-600 text-white bottom-0 w-full py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-center">Intelligent Lifting</div>
          <div className="flex">
            <Link href="/" className="px-4 py-2 text-white hover:bg-indigo-800">Home</Link>
            <Link href="/plans" className="px-4 py-2 text-white hover:bg-indigo-800">All Plans</Link>
          </div>
        </div>
      </footer>
)};

