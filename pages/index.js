import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavbarComponent/navbar'
import Hero from '../components/HeroComponent/hero'
import Marketing from '../components/MarketingComponent/marketing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <Marketing />
    </>
  )
}
