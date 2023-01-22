import { useState } from 'react'
import Link from 'next/link'

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> 
                <Link className="text-lg font-semibold" href="/home">Intelligent Lifting</Link>
            </div>
            <div className="flex flex-col ml-4">
                <Link className="text-xl font-medium my-4" href="/home" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </Link>
                <Link className="text-xl font-normal my-4" href="/plans" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    All Plans
                </Link>
                <Link className="text-xl font-normal my-4" href="/threeday" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Three Day Plans
                </Link>
                <Link className="text-xl font-normal my-4" href="/fourday" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Four Day Plans
                </Link>
                <Link className="text-xl font-normal my-4" href="/fiveday" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Five Day Plans
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-black px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-6/12 flex items-center">
                <img className="w-20 h-12" src="/logo.png" alt="logo" />
                <Link className="text-2xl font-semibold text-white" href="/home">INTELLIGENT LIFTING</Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden text-white bg-black rounded-lg" onClick={() => {
                    setOpen(!open)
                }}>
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "bg-black w-0" : "w-full bg-black"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black -rotate-45 -translate-y-3.5 " : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <Link href="/home" className="px-4 py:4 text-xl font-normal	text-white">
                        Home
                    </Link>
                    <Link href="/plans" className="px-4 py:4 text-xl font-normal text-white">
                        All Plans
                    </Link>
                    <Link href="/threeday" className="px-4 py:4 text-xl font-normal text-white">
                        Three Day Plans
                    </Link>
                    <Link href="/fourday" className="px-4 py:4 text-xl font-normal text-white">
                        Four Day Plans
                    </Link>
                    <Link href="/fiveday" className="px-4 py:4 text-xl font-normal text-white">
                        Five Day Plans
                    </Link>
                </div>
            </div>
        </nav>
    )
}
