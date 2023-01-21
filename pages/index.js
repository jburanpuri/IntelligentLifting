import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/HeroComponent/hero'
import Marketing from '../components/MarketingComponent/marketing'
import Marketing2 from '../components/MarketingComponent/marketing2'


export default function Home() {
   return (
    <>
      <Hero/>
      <Marketing2/>
      <Marketing/>
    </>
    
  )
}
