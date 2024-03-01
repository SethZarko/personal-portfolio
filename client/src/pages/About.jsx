import { Link } from 'react-router-dom';

import PortfolioImg from '../assets/portfolio.jpg';

// Components
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

export const About = () => {
  return (
    <>
      <section id="about">
        <Header />
        <div className="portfolio-heading-title">
          <div className="portfolio-img-overlay"></div>
          <img
            className="portfolio-img"
            src={PortfolioImg}
            alt="image heading"
          />
          <h1 className="portfolio-title">ABOUT</h1>
          <p className="portfolio-para">
            Here&apos;s a little bit about me
          </p>
        </div>

        <div className="about-text-container">
          <div className="about-me-container">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloribus nostrum omnis molestias ipsam saepe aspernatur vitae quidem. Ipsam, iste recusandae inventore quo, fuga libero neque magni accusantium, sunt repellendus sint voluptatum deleniti aperiam fugiat? Fuga dolore ut quas dolor officiis ipsa nisi animi, sed delectus magni culpa distinctio aut.
            </p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae assumenda nostrum laboriosam accusantium vel eaque unde nam. Vero, beatae facilis delectus corporis maiores rem saepe explicabo tenetur quod doloremque.</p>
          </div>

          <div className="about-me-contact-info-container">
            <h1>Name</h1>
            <p>Seth Zarkovich</p>
            <h1>Contact</h1>
            <p>519-851-5952</p>
            <p>sethzarkovich@gmail.com</p>
            <h1>Location</h1>
            <p>Ontario, Canada</p>
          </div>
        </div>
        <br />
        <br />
        <Link className="return-home-btn" to="/">
          Return Home
        </Link>
        <br />
        <br />
        <br />
      </section>
      <Footer />
    </>
  );
};
