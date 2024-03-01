import { useState } from 'react';
import { Link } from 'react-router-dom';

import PortfolioImg from '../assets/portfolio.jpg';

// Project Images
import InsuranceImageHome from '../assets/projectImgs/insurance-site/insurance-home.png';
import InsuranceImageHome2 from '../assets/projectImgs/insurance-site/Screen Shot 2024-02-29 at 3.11.05 PM.png';
import InsuranceImageHome3 from '../assets/projectImgs/insurance-site/Screen Shot 2024-02-29 at 3.11.35 PM.png';
import InsuranceImageHome4 from '../assets/projectImgs/insurance-site/Screen Shot 2024-02-29 at 3.11.57 PM.png';
import InsuranceImageHome5 from '../assets/projectImgs/insurance-site/Screen Shot 2024-02-29 at 3.12.16 PM.png';
import InsuranceImageHome6 from '../assets/projectImgs/insurance-site/Screen Shot 2024-02-29 at 3.12.45 PM.png';

import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

const images = [
  { id: 1, img: InsuranceImageHome },
  { id: 2, img: InsuranceImageHome2 },
  { id: 3, img: InsuranceImageHome3 },
  { id: 4, img: InsuranceImageHome4 },
  { id: 5, img: InsuranceImageHome5 },
  { id: 6, img: InsuranceImageHome6 },
];

export const InsuranceWebsite = () => {
  const [imageNumber, setImageNumber] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages] = useState(images.length);

  const handleArrowClick = (num) => {
    let summedNum = imageNumber + num;

    if (summedNum <= 0) {
      setImageNumber(1);
      setImageNumber(1);
    } else if (summedNum > images.length) {
      setImageNumber(1);
      setPageNum(1);
    } else {
      setImageNumber(summedNum);
      setPageNum(summedNum);
    }
  };

  const handleWindowScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id="single-portfolio">
      <Header />
      <div className="portfolio-heading-title">
        <div className="portfolio-img-overlay"></div>
        <img className="portfolio-img" src={PortfolioImg} alt="image heading" />
        <h1 className="portfolio-title">PORTFOLIO</h1>
        <p className="portfolio-para">
          Have a look at my portfolio! If you like what you see, let&apos;s work
          together on one of your projects!
        </p>
      </div>

      <div className="entire-single-project-container">
        <div className="single-project-image-container">
          <div className="portfolio-single-container">
            {images.map((image, index) => {
              if (imageNumber === image.id) {
                return (
                  <div key={index}>
                    <img
                      className="portfolio-single-image"
                      src={image.img}
                      alt="portfolio-image"
                    />
                  </div>
                );
              }
            })}
            <br />
            <div className="slider-arrow-container">
              <i
                className="fa-solid fa-arrow-left"
                onClick={() => {
                  handleArrowClick(-1);
                }}
              ></i>
              <i
                className="fa-solid fa-arrow-right"
                onClick={() => {
                  handleArrowClick(1);
                }}
              ></i>
            </div>
            <p className="single-portfolio-image-counter-display">
                {`${pageNum} of ${totalPages}`}
            </p>
          </div>
        </div>

        <div className="project-container">
          <div className="project-text-container">
            <h3>PROJECT INFO</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos obcaecati assumenda ipsa voluptates esse impedit
              libero reprehenderit veniam in ab odit exercitationem soluta
              temporibus perspiciatis magnam, est atque fugiat excepturi.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, deserunt.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at
              eius voluptates, eaque sequi excepturi nihil laudantium recusandae
              iure dolores minus neque, voluptate magnam. Nostrum doloribus
              perferendis beatae sunt itaque, cupiditate deserunt qui
              repellendus aperiam?
            </p>
          </div>
          <div className="project-client-container">
            <h3>CLIENT</h3>
            <br />
            <p>
              <strong>Client Name</strong>
            </p>
          </div>
          <div className="project-tech-container">
            <h3>TECHNOLOGIES USED</h3>
            <br />
            <p>
              React, Node.Js/Express.js, MongoDB, passport.js, framer-motion
            </p>
          </div>
          <div className="project-url-container">
            <h3>URL</h3>
            <br />
            <a href="#" target="_blank">
              www.example.com
            </a>
          </div>
          <br />
          <br />
          <Link
            className="portfolio-project-btn"
            to="/portfolio"
            onClick={handleWindowScroll}
          >
            Back to All Projects
          </Link>
          <br />
          <br />
          <br />
        </div>
      </div>

      <Footer />
    </section>
  );
};
