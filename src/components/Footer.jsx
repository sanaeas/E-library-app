import React from 'react';
import LibraryLogo from '../assets/Library.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/">
                    <figure className='footer__log'>
                        <img src={LibraryLogo} alt="" className="footer__logo--img" />
                    </figure>
                </Link>
                <div className="footer__list">
                    <Link to="/" className='footer__link'>Home</Link>
                    <Link to="/" className='footer__link no-cursor'>About</Link>
                    <Link to="/books" className='footer__link'>Books</Link>
                    <Link to="/cart" className='footer__link'>Cart</Link>
                </div>
                <div className="footer__copyright">Copyright &copy; 2022 Library</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;