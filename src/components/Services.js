import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Services.css'

function Services({
    lightBg, topLine, lightText, lightTextDesc,
    buttonLabel, img, alt, imgStart
}) {
    return (
        <>
            <div id='services' className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className='container'>
                    <div className='row home__hero-row' style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }} >

                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                  <ul>
                                    <li>Web, Desktop and Mobile Application Development</li>
                                    <li>E-commerce (B2B /B2C Systems)</li>
                                    <li>Financial & Trading systems</li>
                                    <li>ERP Systems/Enterprise Application Integration</li>
                                    <li>Quality Assurance</li>
                                    <li>Any Customized software</li>


                                  </ul>
                                </h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                </p>
                                <Link to='/sign-up'>
                                    <Button buttonSize='btn--wide' buttonColor='blue' >{buttonLabel}</Button>
                                </Link>

                            </div>

                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Services