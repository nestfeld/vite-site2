import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ChatBotPage from './components/ChatBotPage/ChatBotPage';
import Dictionary from './components/Dictionary/Dictionary';
import StudyPage from './components/Study/StudyPage';
import TestPage from './components/Test/TestPage';
import Test from './components/Test/Test';
import LessonPage from './components/LessonPage/LessonPage';
import Lesson from './components/LessonPage/Lesson';

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <Router >
        <Routes>
          <Route path="*" element={<div>Не найдено</div>} />
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register/:type' element={<RegisterPage />} />
          <Route path='/chat-bot' element={<ChatBotPage />}/>
          <Route path='/testpage' element={<TestPage/>} />
          <Route path='/lessons' element={<LessonPage/>} /> 
          <Route path="/study/:deckId" element={<StudyPage />} />
          <Route path="/testpage/:testId" element={<Test />} />
          <Route path="/lessons/lesson/:lessonId" element={<Lesson />}/>
          <Route path='/dictionary' element={
            <PrivateRoute user ={user}>
              <Dictionary />
            </PrivateRoute>}/>
          <Route path='/profile' element={
            <PrivateRoute user ={user}>
              <ProfilePage />
            </PrivateRoute>} />
        </Routes>
      </Router>
    </>
  )
}

export default App