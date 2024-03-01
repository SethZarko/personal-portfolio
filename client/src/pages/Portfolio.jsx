import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortImage from '../assets/hero.jpg'

import InsuranceImage from '../assets/projectImgs/insurance-site/insurance-home.png'
import PortfolioImg from '../assets/portfolio.jpg'
 
// Components
import { Header } from '../components/Header.jsx'
import { Footer } from '../components/Footer.jsx'

export const Portfolio = () => {
    const [selectedLink, setSelectedLink] = useState('A');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const portfolioItems = [
        { id: 1, image: InsuranceImage, tags: 'all, full' },
        { id: 2, image: PortImage, tags: 'all, fron'},
        { id: 3, image: PortImage, tags: 'all, back' },
        { id: 4, image: PortImage, tags: 'all, desi' },
        { id: 5, image: PortImage, tags: 'all, desi' },
        { id: 6, image: PortImage, tags: 'all, fron' }
    ];

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleWindowScroll = ()=> {
        window.scrollTo(0, 0);
    }
    
  return (
    <>
        <Header/>
        <div className='portfolio-heading-title'>
            <div className="portfolio-img-overlay"></div>
            <img className='portfolio-img' src={PortfolioImg} alt="image heading" />
            <h1 className='portfolio-title'>PORTFOLIO</h1>
            <p className='portfolio-para'>Have a look at my portfolio! If you like what you see, let&apos;s work together on one of your projects!</p>
        </div>

        <section id="portfolio">
            <div className="portfolio-content">
                <div className="portfolio-sort-menu">
                    <ul className='list-with-slashes'>
                        <li>
                            <span 
                                className={`active ${selectedLink === 'A' ? 'selected' : ''}`}
                                onClick={() => {
                                    handleLinkClick('A'),
                                    handleCategoryClick('all')
                                }}
                            >All</span>
                        </li>
                        <li>
                            <span 
                                className={`active ${selectedLink === 'W' ? 'selected' : ''}`}
                                onClick={() => {
                                    handleLinkClick('W'),
                                    handleCategoryClick('desi')
                                }}
                            >Web Design</span>
                        </li>
                        <li>
                            <span 
                                className={`active ${selectedLink === 'F' ? 'selected' : ''}`}
                                onClick={() => {
                                    handleLinkClick('F'),
                                    handleCategoryClick('fron')
                                }}
                            >Frontend Dev</span>
                        </li>
                        <li>
                            <span 
                                className={`active ${selectedLink === 'B' ? 'selected' : ''}`}
                                onClick={() => {
                                    handleLinkClick('B'),
                                    handleCategoryClick('back')
                                }}
                            >Backend Dev</span>
                        </li>
                        <li>
                            <span 
                                className={`active ${selectedLink === 'S' ? 'selected' : ''}`}
                                onClick={() => {
                                    handleLinkClick('S'),
                                    handleCategoryClick('full')
                                }}
                            >FullStack</span>
                        </li>
                    </ul>
                </div>

                <div className="portfolio-projects-container">
                    {portfolioItems.map((item) => {
                        if (
                            item.tags.slice(0, 3) === selectedCategory || item.tags.slice(5, 9) === selectedCategory
                        ) {

                        return (
                            <div className="portfolio-item"key={item.id}>
                                <div className="portfolio-image-overlay"></div>
                                <img className='portfolio-title-image' src={item.image} alt="portfolio image" />
                                <Link 
                                    className='portfolio-item-btn'
                                    to={`/project/${item.id}`} 
                                    onClick={handleWindowScroll}
                                >Details</Link>
                            </div>
                        )}
                    })}
                </div>
            </div>
            <br />

            <div className="portfolio-btn-container">
                <Link 
                    className='return-home-btn' 
                    to='/full-portfolio'>See All
                </Link>
                <Link 
                    className='return-home-btn' 
                    to ='/' 
                >RETURN HOME</Link>
            </div>
       
        </section>
        <Footer />
    </>
  )
}