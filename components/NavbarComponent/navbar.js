import { useState } from 'react'
import Link from 'next/link'

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
        <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> 
            <Link className="text-lg font-semibold" href="/">Intelligent Lifting</Link>
        </div>
        <div className="flex flex-col ml-4">
            <Link className="text-3xl font-normal my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                Home
            </Link>
            <Link className="text-3xl font-normal my-4" href="/plans" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                Plans
            </Link>
            <Link className="text-3xl font-normal my-4" href="/custom" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                Coaching
            </Link>
            <Link className="text-3xl font-normal my-4" href="/learningcenter" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                Learning Center
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
                
                <Link href="/"><img className="w-60 h-50" src="/logo.png" alt="intelligent Lifting" /></Link>
            </div>
            <div className="w-6/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden text-white bg-black rounded-lg" onClick={() => {
                    setOpen(!open)
                }}>
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "bg-black w-0" : "w-full bg-black"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black -rotate-45 -translate-y-3.5 " : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <Link href="/" className="px-4 py:4 text-xl font-semibold text-primary">
                        Home
                    </Link>
                    <Link href="/plans" className="px-4 py:4 text-xl font-semibold text-primary">
                        Free Plans
                    </Link>
                    <Link href="/custom" className="px-4 py:4 text-xl font-semibold text-primary">
                        Coaching
                    </Link>
                    <Link href="/learningcenter" className="px-4 py:4 text-xl font-semibold text-primary">
                        Learning Center
                    </Link>
                </div>
            </div>
        </nav>
    )
}