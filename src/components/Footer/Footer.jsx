import footerLogo from "./footer-logo.svg";
import { Link } from 'react-router-dom';  
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-upper">
        <Link to="/login" className='footer-logo'>
          <img src={footerLogo} alt="logo" />
          <span>Язык.учи</span>
        </Link>
        <div className="footer-info">
          <p>yazik.ychi@mail.com</p>
          <p>+77475857979</p>
        </div>
      </div>
      <div className="footer-down">
        <p>© 2025 · Язык.учи LLC</p>
      </div>
      </footer>
  )
}

export default Footer