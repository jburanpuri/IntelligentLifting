import Hero from '../components/HeroComponent/hero'
import Checklist from '../components/MarketingComponent/checklist'
import Box from '../components/MarketingComponent/box'
import Head from 'next/head';


export default function Home() {
   return (
    <>
    <Head>
        <title>
         Intelligent Lifting
        </title>
        <meta
          name="description"
          content="The best place for all your fitness needs. From free plans to monthly coaching, we have it all. 
          We are confident our plans will help you reach your fitness goals and are better than any other plans on the market. "
          key="desc"
        />
      </Head>
      <Hero/>
      <Box/>
      <Checklist/>
    </>
    
  )
}
