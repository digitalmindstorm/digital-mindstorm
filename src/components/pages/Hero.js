import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../../videos/video4.mp4'
import { Button } from '../Button'
import {HeroContainer , HeroBg , VideoBg} from './HeroElement'
import './HeroSection.css'
import img from '../../images/logo.png'

function Hero( { topLine,lightText , lightTextDesc , headline , description ,
    buttonLabel , alt , imgStart}) {
  return (
    <HeroContainer id="home"  >
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <div  className='container'>
      <div className='row home__hero-row'  style={{display: 'flex' , flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}} >

        <div className='col'>
          <div className='home__hero-text-wrapper'>
               <div className='top-line'>{topLine}</div>
               <h1 className={lightText ? 'heading' : 'heading dark'}>
                {headline}
               </h1>
               <p className={lightTextDesc ?  'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                {description}
               </p>
               <Link to='/sign-up'>
                <Button buttonSize='btn--wide' buttonColor='blue' >{buttonLabel}</Button>
               </Link>
               
          </div>

        </div>      
        <div className='col'>
          <div className='home__hero-img-wrapper'>
            <img src={img} alt={alt} className='home__hero-img'  /> 
          </div>
        </div>

      </div> 

    </div>
    </HeroContainer>
  )
}

export default Hero