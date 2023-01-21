import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(true);

    function handleToggle() {
        setNavbarOpen(!navbarOpen);
    }

    return (
        
        <nav className={"w-full bg-black shadow fixed top-0"}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/home">
                            <h2 className="text-white text-2xl font-bold">Intelligent Lifting</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"} `}      
                    >

                    <div onClick={() => setNavbarOpen(false)}>
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-white hover:bg-indigo-500 rounded-md">
                        <Link href="/plans" className="px-4 py-4 text-white hover:bg-indigo-500 rounded-md">All Plans</Link>
                        </li>
                        <li className="text-white hover:bg-indigo-500 rounded-md">
                        <Link href="/threeday" className="px-4 py-4 text-white hover:bg-indigo-500 rounded-md">Three Day Plans</Link>
                        </li>
                        <li className="text-white hover:bg-indigo-500 rounded-md">
                        <Link href="/fourday" className="px-4 py-4 text-white hover:bg-indigo-500 rounded-md">Four Day Plans</Link>
                        </li>
                        <li className="text-white hover:bg-indigo-500 rounded-md">
                        <Link href="/fiveday" className="px-4 py-4 text-white hover:bg-indigo-500 rounded-md">Five Day Plans</Link>
                        </li>
                    </ul>
                    </div>


                    </div>
                </div>
            </div>
        </nav>
    );
}