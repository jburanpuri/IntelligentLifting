import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavbarComponent/navbar'
import Hero from '../components/HeroComponent/hero'
import Marketing from '../components/MarketingComponent/marketing'
import Footer from '../components/FooterComponent/footer'
import Banner from '../components/BannerComponent/banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Banner/>
    <NavBar />
    <Hero />
    <Marketing />
    <Footer />
    </>
  )
}
