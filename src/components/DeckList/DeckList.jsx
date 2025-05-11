import React from 'react';
import "./DeckList.scss";
import DeckListItem from '../DeckListItem/DeckListItem';
import { useDecks } from '../../context/DeckContext';

const DeckList = () => {
  const { activeDeck, setActiveDeck, deckList, addDeck, deleteDeck, loading } = useDecks();

  const selectDeck = (deck) => {
    setActiveDeck(deck?.id === activeDeck?.id ? null : deck);
  };

  return (
    <section className='deck-list'>
      <div className="deck-list-header">
        <h2>Колоды</h2>
      </div>
      <div className="deck-list-scroll">
        {loading ? (
          <p>Загрузка...</p>
        ) : deckList.length ? (
          deckList.map((deck) => (
            <DeckListItem 
              key={deck.id} 
              deck={deck} 
              active={activeDeck?.id === deck.id ? "active-deck" : ""} 
              onClick={() => selectDeck(deck)}
            />
          ))
        ) : (
          <div className='empty-list'>
            <p>
              Нажмите на кнопку создать, <br/>
              чтобы добавить новую колоду
            </p>
          </div>
        )}
      </div>
      <div className="deck-list-footer">
        <button className='create' onClick={() => addDeck(prompt("Введите название новой колоды", ""))}>
          Создать
        </button>
        {activeDeck && (
          <button className="deck-del-btn" onClick={() => deleteDeck(activeDeck.id)}>
            Удалить
          </button>
        )}
      </div>
    </section>
  );
};

export default DeckList;
