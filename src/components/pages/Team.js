import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../Button'
import './Team.css'
import {
    FaLinkedin
  } from 'react-icons/fa';
import adil from '../../images/adil.jpeg'
function Team({
    lightBg,lightText,topLine,lightTextDesc,headline,description
}) {
  return (
    <>
    <div id="team" className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
    <div className='container'>
      <div className='row home__hero-row'  style={{display: 'flex' , }} >
       
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
                <Button buttonSize='btn--medium' buttonColor='blue' ><FaLinkedin/> LinkedIn</Button>
               </Link>
               
          </div>

        </div>  



      <div className='col'>
          <div className='hero-img-wrapper'>
            <div className='img-box'>
              <div className='content'>
                    <img className='img-profile' src={adil} />
                    <h2>Hafiz M. Adil Hussain<br/><span>Sr. Software Engineer</span></h2>
                    <a href='#'>Contact</a>
              </div>
            </div>
          </div>
        </div>
        
        
        
        </div>      
       

      </div> 

    </div>
    </>
  )
}

export default Team