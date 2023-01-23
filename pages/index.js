import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/HeroComponent/hero'
import Checklist from '../components/MarketingComponent/checklist'
import Box from '../components/MarketingComponent/box'


export default function Home() {
   return (
    <>
      <Hero/>
      <Box/>
      <Checklist/>
    </>
    
  )
}
