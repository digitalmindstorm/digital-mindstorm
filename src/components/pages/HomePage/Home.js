import React from 'react'
import Services from '../../Services'
import ContactUs from '../ContactUs'
import Hero from '../Hero'
import HeroSection from '../HeroSection'
import Pricing from '../Pricing'
import Team from '../Team'
import {homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data.js'

function Home() {
  return (
    <>

    {/* <HeroSection  {...homeObjOne} /> */}
    <Hero id="home" {...homeObjOne}/>
    <Services id='services' {...homeObjTwo} />
    <HeroSection id="vision"  {...homeObjThree} />
    <Pricing   {...homeObjFour} />
    <Team   {...homeObjFive} />
    <ContactUs/>

    </>
  )
}

export default Home