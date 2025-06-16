import React, { useState, useEffect } from "react";
import "./SentenceBuilder.scss";

const SentenceBuilder = ({sentences}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [userSentence, setUserSentence] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffle(sentences[currentSentenceIndex].words));
    setUserSentence([]);
    setIsCorrect(null);
  }, [currentSentenceIndex]);

  const onDragStart = (e, word) => e.dataTransfer.setData("text/plain", word);

  const onDrop = (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData("text/plain");
    if (!userSentence.includes(word)) setUserSentence([...userSentence, word]);
  };

  const onDragOver = (e) => e.preventDefault();

  const removeWord = (word) => setUserSentence(userSentence.filter((w) => w !== word));

  const checkSentence = () => {
    const userResult = userSentence.join(" ");
    const correctResult = sentences[currentSentenceIndex].correct;
    const correct = userResult === correctResult;
    setIsCorrect(correct);

    if (correct) {
      if (currentSentenceIndex < sentences.length - 1) {
        setTimeout(() => setCurrentSentenceIndex((i) => i + 1), 1000);
      } else {
        setIsComplete(true);
      }
    }
  };

  const retry = () => {
    setUserSentence([]);
    setIsCorrect(null);
  };

  if (isComplete) {
    return (
      <div className="completion">
        <h2>Поздравляем!</h2>
        <p>Вы правильно составили все предложения!</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="sentence-builder-title">Составьте предложения</h2>
      <div className="sentence-builder-container">
        <div className="sentence-progress">
          <p>Предложение {currentSentenceIndex + 1} из {sentences.length}</p>
          <div className="sentence-progress-dots">
            {sentences.map((_, i) => (
              <div
                key={i}
                className={`progress-dot ${i <= currentSentenceIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="word-list">
          {shuffledWords.map((word) => (
            <div
              key={word}
              draggable
              onDragStart={(e) => onDragStart(e, word)}
              onClick={() => {
                if (!userSentence.includes(word)) {
                  setUserSentence([...userSentence, word]);
                }
              className={`word ${userSentence.includes(word) ? "used" : ""}`}
            >
              {word}
            </div>
          ))}
        </div>

        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          className={`drop-zone ${isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : ""}`}
        >
          {userSentence.map((word) => (
            <div
              key={word}
              onClick={() => removeWord(word)}
              className="user-word"
            >
              {word}
            </div>
          ))}
        </div>

        <div className="button-group">
          <button onClick={checkSentence} className="button button-check">
            Проверить
          </button>
          <button onClick={retry} className="button button-retry">
            Заново
          </button>
        </div>
      </div>
    </>
  );
};

export default SentenceBuilder;
