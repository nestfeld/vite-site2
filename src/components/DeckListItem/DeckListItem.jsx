import React from 'react';
import "./DeckListItem.scss";
import { Link } from 'react-router-dom'; 

// Определяем компонент DeckListItem
const DeckListItem = ({ deck, active, onClick }) => {
  return (
    // Основной элемент списка
    <div className={`deck-list__item ${active}`} onClick={onClick}>
      {/* Заголовок, который отображает название колоды */}
      <h3 className='deck-list__title'>{deck.name}</h3>
      <div className="deck_list__item__info">
        {/* Ссылка на страницу тренировки для этой колоды */}
        <Link to={`/study/${deck.id}`}>
          {/* Кнопка для начала сессии тренировки с колодой */}
          <button className='deck-list__start-btn'>Начать</button> 
        </Link>
      </div>
    </div>
  );
};


export default DeckListItem;