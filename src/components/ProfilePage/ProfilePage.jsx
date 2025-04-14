import React from 'react'
import Header from '../Header/Header'
import { useAuth } from '../../context/AuthContext'
import "./ProfilePage.css"

const ProfilePage = () => {
  const {user, logout,} = useAuth();

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
            <button onClick={logout} className='profile-logout--btn'>Выйти</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage;