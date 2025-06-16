import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import "./HomePage.scss";
import logo from "../Header/logo.svg";
import bg from "./bg.webp";
import stars from "./stars.png";
import phone from "./phone.png";
import slides from "../data/slidesData";
import star from './star.svg';
import author1 from "./author1.png";
import author2 from "./author2.png";
import author3 from "./author3.png";
import Footer from '../Footer/Footer.jsx';

const HomePage = () => {

  const reviews = [
    {
      name: 'Антон Назаров',
      image: author1,
      text: 'Я использую сайт для изучения английского языка и очень доволен его функциональностью. Платформа имеет простой и понятный интерфейс, что позволяет легко ориентироваться даже тем, кто не особо знаком с подобными сайтами.',
      stars: 5,
    },
    {
      name: 'Мария Иванова',
      image: author2,
      text: 'Платформа очень помогает в изучении английского. Я часто использую её для тренировки словарного запаса и улучшения грамматики. Интерфейс интуитивно понятный, и процесс обучения становится увлекательным.',
      stars: 5,
    },
    {
      name: 'Иван Петров',
      image: author3,
      text: 'Отличный ресурс для изучения английского языка! Очень понравился функционал по созданию собственных карточек для запоминания новых слов. Также поддержка мобильной версии очень удобна для занятий в дороге.',
      stars: 5,
    }
  ]

  return (
    <>
      <Header />
      <div className='homepage-container'>
        <div className='hero-block' style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'contain',
          backgroundSize: 'cover',
        }}>
          <Link className='hero-logo' to="/">
            <img src={logo} alt="logo" />
            Язык.учи
          </Link>
          <h2 className='hero-title'>
            Откройте мир новых возможностей с помощью изучения иностранных языков!
          </h2>
          <Link to="/register/student"><button className='hero-btn'>Начать!</button></Link>
        </div>
      </div>
      <div className="home-page--auth-container">
        <div className="home-page--auth-container--wrapper">
          <div className="home-page--auth-container--text-block">
            <p><span>Авторизуйся</span>, чтобы получить полный доступ 
            к функциям сайта и начать свое обучение!</p>
            <Link to="/login/"><button className='hp-auth-btn'>Войти</button></Link>
          </div>
          <div className="home-page--auth-container--img-container">
            <img src={phone} alt="phone-img" className='phone-img' />
          </div>
        </div>
      </div>
      <div className='teachers-container'>
        <div className="teachers-title">
          Наши преподаватели <img src={stars} alt="stars" className='stars'/>
        </div>
        <div className="teacher-cards--block">
          {slides.map((data) => (
            <div className='teacher-block'>
              <img src={data.url} alt={data.title} />
              <h2>{data.title}</h2>
              <p>Стаж работы {data.workExperience} лет</p>
            </div>
          ))}
        </div>
      </div>
      <div className="reviews-container">
          <h3>Отзывы⚡</h3>
          <h2>Как наша платформа помогает<br/> в изучении языков</h2>
          <div className="reviews-cards-container">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-card--header">
                  <img src={review.image} alt="image" />
                  <h4>{review.name}</h4>
                </div>
                <div className="review-card--body">
                  <p>{review.text}</p>
                  <div className="stars-rating">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <img style={{width: '30px', marginLeft: '0.5rem'}} key={i} src={star} alt={`star ${i + 1}`} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default HomePage
