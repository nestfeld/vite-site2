import React, { useState, useEffect } from 'react';
import "./Deck.css";
import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useDecks } from '../../context/DeckContext';
import { db } from '../../config/firebase-config';
import translate from "./translate.svg";
import { translateText } from '../TextTranslator/translateText';

const Deck = () => {
  const { activeDeck, user, deckList, fetchDecks, setDeckList}= useDecks();
  const [word, setWord] = useState("");
  const [wordTranslate, setWordTranslate] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  // Загружаем карты при выборе колоды
  useEffect(() => {
    if (activeDeck) {
      fetchCards();
    } else {
      setCards([]);
    }
  }, [activeDeck, user]);

  // Получение карт из Firestore
  const fetchCards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users", user?.uid, "decks", activeDeck?.id, "cards"));
      const fetchedCards = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCards(fetchedCards);
    } catch (err) {
      console.error("Ошибка при получении карт:", err);
    }
  };

  // Удаление карты из колоды
  const deleteCard = async () => {
    if (selectedCard) {
      try {
        const cardRef = doc(db, "users", user.uid, "decks", activeDeck?.id, "cards", selectedCard.id);

        // Удаляем карту из Firestore
        await deleteDoc(cardRef);

        // Обновляем количество карт в колоде
        const deckRef = doc(db, "users", user.uid, "decks", activeDeck?.id);
        await updateDoc(deckRef, {
          cardsCount: Math.max((activeDeck?.cardsCount || 0) - 1, 0),
        });

        setDeckList((prevDeckList) => {
          return prevDeckList.map((deck) =>
            deck.id === activeDeck.id
              ? { ...deck, cardsCount: Math.max(deck.cardsCount - 1, 0) }  
              : deck
          );
        });

        
        // Локальное обновление списка карт
        setCards(cards.filter((card) => card.id !== selectedCard?.id));
        setSelectedCard(null);
      } catch (err) {
        console.error("Ошибка при удалении карты:", err);
      }
    }
  };

  // Добавление новой карты в колоду
  const addCard = async (e) => {
    e.preventDefault();

    if (activeDeck) {
      if (word.trim() && wordTranslate.trim()) {
        try {
          // Добавляем карту в Firestore
          await addDoc(collection(db, "users", user.uid, "decks", activeDeck?.id, "cards"), {
            word: word,
            translate: wordTranslate,
            updated: new Date(),
            interval: 1,
            nextReview: new Date().toISOString(),
          });

          // Обновляем количество карт в колоде
          const deckRef = doc(db, "users", user.uid, "decks", activeDeck?.id);
          await updateDoc(deckRef, {
            cardsCount: (activeDeck?.cardsCount || 0) + 1,
          });

          // Локальное обновление состояния для добавления карты в UI
          setCards((prevCards) => [
            ...prevCards,
            { word, translate: wordTranslate, updated: new Date(), ratio: 1, id: Date.now().toString() }, // Временно добавляем карту в локальное состояние
          ]);
          
          setDeckList((prevDeckList) => {
            return prevDeckList.map((deck) =>
              deck.id === activeDeck.id
                ? { ...deck, cardsCount: deck.cardsCount + 1 }  // Для добавления карты
                : deck
            );
          });
          

          // Очищаем поля ввода
          setWord("");
          setWordTranslate("");
        } catch (err) {
          console.error("Ошибка при добавлении карты", err);
        }
      } else {
        alert("Заполните поля!");
      }
    } else {
      alert("Выберите колоду");
    }
  };

  // Выбор/снятие выделения карты
  const selectCard = (card) => {
    setSelectedCard((prevCard) => (prevCard?.id === card.id ? null : card));
  };

  // Функция перевода
  const handleTranslate = async (e) => {
    e.preventDefault()

    if (word) {
      try {
        let translatedText = await translateText(word);
        setWordTranslate(translatedText);
      } catch(err) {
        console.error(err)
      }
      
      // Здесь можно интегрировать API для перевода
    } else {
      alert("Введите текст для перевода");
    }
  };

  const changeDeckCount = () => {

    setDeckList()
  }

  return (
    <section className="deck">
      {/* <button onClick={() => {console.log(activeDeck)}}>лог актив </button>
      <button onClick={() => {console.log(deckList)}}>лог деки</button> */}

      
      {activeDeck ? (
        <>
          <div className="deck-header">
            <h2>{activeDeck?.name}</h2>
          </div>
          <div className="word-creator-form-container">
            <form action="#" className="word-creator-form">
              <h3>Текст на английском</h3>
              <div className="word-creator-input-word-block">
                <button className="translate-btn" onClick={handleTranslate}>
                  <img src={translate} alt="Перевести" />
                </button>
                <input
                  className="word-creator-input"
                  type="text"
                  required
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </div>
              <h3>Перевод</h3>
              <input
                type="text"
                required
                value={wordTranslate}
                onChange={(e) => setWordTranslate(e.target.value)}
              />
              <div className="add-btn-container">
                <button className="add-btn" onClick={addCard}>
                  Добавить
                </button>
              </div>
            </form>
          </div>
          <div className="word-list-container">
            <div className="word-list">
              {cards.length ? (
                cards.map((card) => (
                  <button
                    className={`word-list-item ${
                      selectedCard?.id === card.id ? "wl-active-item" : ""
                    }`}
                    key={card.id}
                    onClick={() => selectCard(card)}
                  >
                    {card.word}
                  </button>
                ))
              ) : (
                <p>Колода пуста</p>
              )}
            </div>
            <div className="word-list-action">
              <button className="delete" onClick={deleteCard}>
                Удалить
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="deck-header">
          <h2>Колода не выбрана</h2>
        </div>
      )}
    </section>
  );
};

export default Deck;
