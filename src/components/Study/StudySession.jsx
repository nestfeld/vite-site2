import React, { useState, useEffect } from 'react';
import { useDecks } from "../../context/DeckContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom"; // Для перехода на другую страницу
import Arrow from './Arrow';
import "./StudySession.css";

const StudySession = ({ deckId }) => {
  const [cards, setCards] = useState([]);
  const { deckList } = useDecks();
  const deck = deckList.find((d) => d.id === deckId);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isWordNotHidden, setIsWordNotHidden] = useState(false);
  const navigate = useNavigate(); // Используем для перехода

  // Функция для получения карточек
  const fetchCards = async (deckId) => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users", deck.owner, "decks", deckId, "cards"));
      const cardsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCards(cardsList); // Сохраняем все карточки без фильтрации
    } catch (error) {
      console.error('Error fetching cards:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (deckId) {
      fetchCards(deckId);
    }
  }, [deckId]);

  if (loading) {
    return <div className="load-div">Загрузка...</div>;
  }

  if (cards.length === 0) {
    return (
    <div className='emptyDeck-block'>
      <h3>Нет карточек в этой колоде!</h3>
      <button onClick={() => navigate("/dictionary")}>Назад в словарь</button>
    </div>);
  }

  // Текущая карточка
  const currentCard = cards[currentCardIndex];

  // Функция для переключения карточек
  const handleNextCard = () => {
    if (currentCardIndex < cards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsWordNotHidden(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsWordNotHidden(false);
    }
  };

  return (
    <>
      <h3 className='sessionDeckName'>{deck ? deck.name : "Неизвестная колода"}</h3>
      <div className='card-main-container' onClick={() => setIsWordNotHidden(!isWordNotHidden)} style={{cursor: "pointer"}}>
        {/* Если все карточки просмотрены, показываем кнопку перехода */}
        {currentCardIndex >= cards.length ? (
          <div className="session-end-block">
            <button className='end-btn' onClick={() => navigate("/dictionary")}>Закончить сессию <br /> 👍</button>
          </div>
        ) : (
          <>
            {/* <div className='cardSessionBlock--word'>
              {isWordNotHidden ? <p>{currentCard.translate}</p> : <h3>{currentCard.word}</h3>}
            </div> */}
            <div className="card-container">
              <div className={`thecard ${isWordNotHidden ? 'activecard' : ''}`}>
                <div className="thefront cardSessionBlock">{currentCard.word}</div>
                <div className="theback cardSessionBlock">{currentCard.translate}</div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className='study-control'>
        <button onClick={handlePrevCard} disabled={currentCardIndex === 0}><Arrow isMirrored={true}/></button>
        
        <p>{currentCardIndex + 1} / {cards.length + 1}</p>
        <button onClick={handleNextCard}><Arrow /></button>
      </div>
    </>
  );
};

export default StudySession;
