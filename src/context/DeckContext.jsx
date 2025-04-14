import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { db } from '../config/firebase-config';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

const DeckContext = createContext();

const DeckProvider = ({ children }) => {
  const { user } = useAuth();
  const [activeDeck, setActiveDeck] = useState(null);
  const [deckList, setDeckList] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchDecks = async () => {
    setLoading(true);
    try {
      const deckRef = collection(db, 'users', user.uid, 'decks');
      const deckSnapshot = await getDocs(deckRef);
      const decks = deckSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDeckList(decks);
    } catch (error) {
      console.error('Ошибка при загрузке колод:', error);
    }
    setLoading(false);
  };

  // Загрузка колод из Firebase при изменении user
  useEffect(() => {
    if (!user) return;
    fetchDecks();
  }, [user]);

  // Добавление новой колоды
  const addDeck = async (name) => {
    if (!name.trim()) return alert('Введите название!');
    if (!user) return;
    try {
      const newDeck = { name, cardsCount: 0, owner: user.uid, ownerName: `${user.firstname} ${user.lastname}` };
      const docRef = await addDoc(collection(db, 'users', user.uid, 'decks'), newDeck);
      fetchDecks();
    } catch (error) {
      console.error('Ошибка при добавлении колоды:', error);
    }
  };

  // Удаление колоды
  const deleteDeck = async (deckId) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'decks', deckId));
      setDeckList((prev) => prev.filter((deck) => deck.id !== deckId));
      setActiveDeck(null);
    } catch (error) {
      console.error('Ошибка при удалении колоды:', error);
    }
  };

  // Обновление колоды (например, добавление карточек)
  const updateDeck = async (deckId, updatedData) => {
    if (!user) return;
    try {
      const deckRef = doc(db, 'users', user.uid, 'decks', deckId);
      await updateDoc(deckRef, updatedData);
      setDeckList((prev) =>
        prev.map((deck) => (deck.id === deckId ? { ...deck, ...updatedData } : deck))
      );
    } catch (error) {
      console.error('Ошибка при обновлении колоды:', error);
    }
  };

  return (
    <DeckContext.Provider
      value={{
        user,
        activeDeck,
        setActiveDeck,
        deckList,
        setDeckList,
        loading,
        addDeck,
        deleteDeck,
        updateDeck,
        fetchDecks,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};

export const useDecks = () => useContext(DeckContext);
export default DeckProvider;
