import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


export const Nav = ({toggleMenuIconTransform, toggleMenu}) => {
    return (
        <nav>
            <div className="nav-menu">
                <div className="social-icons-container">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>

                <div className="menu-icon" onClick={toggleMenuIconTransform}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {toggleMenu && 
                    <>
                        <ul className='mobile-menu'>
                            <li><Link to='/' onClick={toggleMenuIconTransform}>Home</Link></li>
                            <li><Link to='portfolio' onClick={toggleMenuIconTransform}>Portfolio</Link></li>
                            <li><Link to='about' onClick={toggleMenuIconTransform}>About</Link></li>
                        </ul>
                    </>
                }
            </div>
        </nav>
    )
}

Nav.propTypes = {
    toggleMenuIconTransform: PropTypes.func,
    toggleMenu: PropTypes.bool
};