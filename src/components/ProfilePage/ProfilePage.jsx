import React from 'react';
import Header from '../Header/Header';
import { useAuth } from '../../context/AuthContext';
import "./ProfilePage.scss";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const {user, logout,} = useAuth();
  const navigator = useNavigate();

  const logoutAndRedirect = async() => {
    await logout();
    navigator('/');
  };

  return (
    <>
      <div className='appContainerMain'>
        <Header />
        <div className='profile-container'> 
          <div className="profile-block">
            <div className='profile-pic'>👤</div>
            <h1 className='user-name-title'>{user.firstname} {user.lastname}</h1>
            <div className='profile-info-block'>
              <div className="info-row">
                <p><b>Статус:</b></p>
                <p style={{color: "blue"}}>{user.status}</p>
              </div>
              {user.status == 'Студент' ? (
                <div className="info-row">
                    <p><b>Группа:</b></p>
                    <p>{user.group ? user.group : 'неизвестно'}</p>
                </div>
                ) : ('')
              }
            </div>
            <button onClick={logoutAndRedirect} className='profile-logout--btn'>Выйти</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ProfilePage;