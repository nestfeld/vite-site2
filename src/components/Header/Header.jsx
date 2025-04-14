import logo from './logo.svg';
import "./Header.css";
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const {user} = useAuth();


  return (
    <header> 
      <div className="header--wrapper">
        <div className="header--logo-block">
            <Link to={'/'} className='logo--link'>
              <img className="header--logo" src={logo} alt="Язык.учи" />  
              <h1 className="header--title">Язык.учи</h1>
            </Link>
          </div>
          {user ? <Menu /> : 
            <div>
              <Link to="/login">
                <button className='header-login-button'>Войти</button>
              </Link>
              <Link to={`/register/student`}>
                <button className='header-register-button'>Регистрация</button>  
              </Link>
            </div>
          }
      </div>
    </header>
  )
}

export default Header;