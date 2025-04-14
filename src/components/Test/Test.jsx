import React, { useState } from 'react';
import './Test.css';
import Header from '../Header/Header';
import { Link, useParams } from 'react-router-dom';
import tests from '../data/tests.jsx'; // Импортируем данные тестов

export const Test = () => {
  const { testId } = useParams();
  const test = tests.find((test) => +test.id === +testId);

  if (!test) {
    return <div>Тест не найден</div>;
  }

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState([]); // Отслеживание неверных ответов

  const dificultyMatch = {
    '1': ['🌱', 'Начальный'],
    '2': ['😊', 'Средний '],
    '3': ['🤔', 'Продвинутый'],
    '4': ['😰', 'Продвинутый 2'],
    '5': ['🔥', 'Эксперт'],
  };

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    let newWrongAnswers = [];

    test.questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        newScore++;
      } else {
        newWrongAnswers.push(question.id);
      }
    });

    setScore(newScore);
    setWrongAnswers(newWrongAnswers);
  };

  return (
    <div className="appContainerMain">
      <Header />
      <section
        className='test-sec'
        style={{
          backgroundImage: `linear-gradient(to bottom, ${test.colorScheme[0]}, ${test.colorScheme[1]})`
        }}
      >
        <div className="quiz-container">
          <h2 className='test-name'> 
            <Link to='/testpage' style={{ color: '#AA18CA' }} title='Назад'>←</Link> {test.testName}
          </h2>
          <p className='testDescription'>Уровень теста: <b>{dificultyMatch[test.testDificulty][1]}</b></p>
          <form onSubmit={handleSubmit}>
            {test.questions.map((question) => (
              <div 
                key={question.id} 
                className={`question ${wrongAnswers.includes(question.id) ? 'wrong-answer' : ''}`}
              >
                <p>{question.question}</p>
                <div className="options-container">
                  {Object.keys(question.options).map((key) => (
                    <label key={key} style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="radio"
                        name={question.id}
                        value={key}
                        checked={answers[question.id] === key}
                        onChange={handleAnswerChange}
                        style={{ marginRight: "1rem" }}
                      />
                      {key}) {question.options[key]}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button className="test-submit-btn" type="submit">Отправить</button>
          </form>
          {score !== null && (
            <div className={`score ${score === test.questions.length ? 'full-score' : ''}`}>
              <h3>Ваш счет: {score} / {test.questions.length}</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Test;
