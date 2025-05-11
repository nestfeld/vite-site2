import React from 'react';
import "./Dictionary.scss";
import Header from '../Header/Header';
import DeckList from '../DeckList/DeckList';
import Deck from '../Deck/Deck';
import Footer from '../Footer/Footer';

const Dictionary = () => {

  return (
    <>
      <div className="appContainerMain">
        <Header />
        <div className="dictCon2">
          <div className="dictionary-page--container">
              <DeckList />
              <Deck />
          </div>
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default Dictionary