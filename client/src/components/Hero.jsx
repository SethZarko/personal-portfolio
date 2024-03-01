import { Link } from 'react-router-dom'

import HeroImg from '../assets/hero.jpg'

export const Hero = () => {

  return (
    <>
        <section id='hero'>     
            <img src={HeroImg} className='hero-img' alt="hero-image" />
            <div className="hero-overlay"></div>   
            
            <div className="hero-text-container">
                <h1 className='hero-title'>Hello!</h1>
                <h3 className='hero-sub-title'>I&apos;m <span className='bolder-hero-text'>Seth Zarkovich</span></h3>
                <p className='hero-para'>Web Developer</p>

                <div className="link-container">
                  <Link to='/portfolio' className='portfolio-btn'>Portfolio</Link>
                  <Link to='/about' className='portfolio-btn'>About</Link>
                </div>
            </div>
        </section>
    </>
  )
}
