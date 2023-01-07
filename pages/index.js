import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar/navbar'
import Hero from '../components/HeroComponent/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    </>
  )
}
