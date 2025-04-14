import React from 'react'
import "./Dictionary.css"
import Header from '../Header/Header'
import DeckList from '../DeckList/DeckList'
import Deck from '../Deck/Deck'

const Dictionary = () => {

  return (
    <div className="appContainerMain">
      <Header />
      <div className="dictCon2">
        <div className="dictionary-page--container">
            <DeckList />
            <Deck />
        </div>
      </div>
    </div>
  )
}

export default Dictionary