import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/HeroComponent/hero'
import Marketing from '../components/MarketingComponent/marketing'


export default function Home() {
   return (
    <>
      <Hero/>
      <Marketing/>
    </>
    
  )
}
