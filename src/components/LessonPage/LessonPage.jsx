import React from 'react'
import Header from '../Header/Header'
import './LessonPage.css'
import lessons from '../data/lessons'
import { Link } from 'react-router-dom'

const LessonPage = () => {
  return (
    <div className='appContainerMain'>
      <Header />
      <div className="lessonPage-container">
        <div className="lessons-list-block">
          <h2 className='lessons-list-title'>Уроки</h2>
          <div className="lessons-list">
            {lessons.map((lesson) => (
              <Link to={`/lessons/lesson/${lesson.id}`} key={lesson.id}>
                <div 
                  className='lesson-list--item'
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${lesson.colorScheme[0]}, ${lesson.colorScheme[1]})`
                  }}
                >
                  <h3 className='lesson-list--emoji'>{lesson.lessonEmoji}</h3>
                  <h3 className='lesson-list--name'>{lesson.lessonName}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonPage