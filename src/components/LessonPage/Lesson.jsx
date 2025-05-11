import React from "react";
import { useParams } from "react-router-dom";
import lessons from "../data/lessons";
import Header from '../Header/Header';
import "./Lesson.scss"
import { Link } from "react-router-dom";
import tests from "../data/tests";
import Footer from "../Footer/Footer";

const Lesson = () => {
  let { lessonId } = useParams();

  // Находим нужный урок по id
  const lessonData = lessons.find((lesson) => +lesson.id === +lessonId);

  if (!lessonData) {
    return <div>Урок не найден</div>; // Если урока нет, показываем заглушку
  }

  const test = tests.find((test) => +test.id === +lessonData.relatedTestId)

  const LessonComponent = lessonData.lesson; // Достаем сам компонент урока

  return (
    <div className="appContainerMain">
      <Header />
      <div 
        className="lesson-container"
        style={{
          // backgroundImage: `linear-gradient(to bottom, ${lessonData.colorScheme[0]}, ${lessonData.colorScheme[1]})`,
        }}
      >
        <div className="lesson-block">
          <h1> <Link to='/lessons/' style={{color: '#AA18CA'}} title='Назад'>←</Link> {lessonData.lessonName}</h1>
          <LessonComponent />
          { test ? (
            <div className="relatedTest-block">
              <h3>Пройдите тест связанный с этим уроком что-бы закрепить материал ↓</h3>
              <Link to={`/testpage/${test.id}`} key={test.id}>
                <button className="testsItem">
                  <div>
                    <div 
                      className='testEmojiBlock'
                      style={{
                        backgroundImage: `linear-gradient(to bottom, ${test.colorScheme[0]}, ${test.colorScheme[1]})`
                      }}
                    >
                      {test.testEmoji}
                    </div>
                    <h3 className='testName'>{test.testName}</h3>
                  </div>
                </button>
              </Link>
            </div>
          ): (
            ''
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Lesson;
