import React from 'react';
import Header from '../Header/Header';
import tests from "../data/tests";
import './Test.css'
import { Link } from 'react-router-dom';

const TestPage = () => {
  const dificultyMatch = {
    '1': ['🌱', 'Начальный'],
    '2': ['😊', 'Средний '],
    '3': ['🤔', 'Продвинутый'],
    '4': ['😰', 'Продвинутый 2'],
    '5': ['🔥', 'Эксперт'],
  }

  tests.sort((a, b) => a.testDificulty - b.testDificulty);

  return (
    <>
      <div className="appContainerMain">
        <Header />
        <div className="testPage--container">
          <section className='tests-block'>
            <div className="tests-block--header">
              <h2>Тесты</h2>
            </div>
            <div className="tests">
              {tests.map((test) => (
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
                    <h3 className='difficultyEmoji' title={`Уровень теста: ${dificultyMatch[test.testDificulty][1]}`}>{dificultyMatch[test.testDificulty][0]}</h3>
                  </button>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default TestPage