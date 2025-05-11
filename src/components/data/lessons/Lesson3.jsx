import React from 'react';
import SentenceBuilder from '../../SentenceBuilder/SentenceBuilder';
import DialogueBlock from '../../DialogueBlock/DialogueBlock';

const Lesson3 = () => {
    const sentences = [
        { words: ["I", "will", "visit", "Paris", "next", "year"], correct: "I will visit Paris next year" },
        { words: ["She", "will", "call", "you", "tomorrow"], correct: "She will call you tomorrow" },
        { words: ["They", "will", "have", "a", "party", "soon"], correct: "They will have a party soon" },
        { words: ["He", "will", "finish", "the", "project", "tonight"], correct: "He will finish the project tonight" },
        { words: ["We", "will", "meet", "at", "the", "café"], correct: "We will meet at the café" }
      ];
      
      const dialogues = [
        { speaker: "Lucy:", text: "Will you come to my birthday party?", translation: "Ты придешь на мой день рождения?" },
        { speaker: "Ben:", text: "Of course! I will bring a gift.", translation: "Конечно! Я принесу подарок." },
        { speaker: "Lucy:", text: "Thank you! It will be fun.", translation: "Спасибо! Будет весело." },
        { speaker: "Ben:", text: "What time will it start?", translation: "Во сколько начнется вечеринка?" },
        { speaker: "Lucy:", text: "At 6 PM. Don’t be late!", translation: "В 6 вечера. Не опаздывай!" },
        { speaker: "Ben:", text: "I won’t! See you soon.", translation: "Не опоздаю! До скорого." }
      ];
      
      const notes = [
        "Используйте 'will' + глагол для описания будущих действий.",
        "Для отрицаний используйте 'won't' (will not).",
        "Future Simple используется для обещаний, предсказаний и решений, принятых в момент речи."
      ];
      
    
  return (
    <>
      <div class="lesson-section">
          <h2>Что такое Future Simple?</h2>
          <p>Future Simple – это будущее простое время в английском языке, которое используется для описания действий, которые произойдут в будущем.</p>
          <ul>
              <li><strong>I will visit my grandma tomorrow.</strong> – Я навещу свою бабушку завтра.</li>
              <li><strong>She will watch a movie tonight.</strong> – Она посмотрит фильм сегодня вечером.</li>
              <li><strong>We will travel to Paris next summer.</strong> – Мы поедем в Париж следующим летом.</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Как образуется Future Simple?</h2>
          <p>В утвердительных предложениях используется вспомогательный глагол <strong>will</strong> перед основной формой глагола.</p>
          <ul>
              <li><strong>I/You/We/They/He/She/It will play football.</strong></li>
          </ul>
          <p>В вопросах will ставится перед подлежащим:</p>
          <ul>
              <li><strong>Will you visit your parents?</strong> – Ты навестишь своих родителей?</li>
              <li><strong>Will she read the book?</strong> – Она прочитает книгу?</li>
          </ul>
          <p>В отрицаниях используется will not (won't):</p>
          <ul>
              <li><strong>I won't play football.</strong> – Я не буду играть в футбол.</li>
              <li><strong>He won't like the movie.</strong> – Ему не понравится фильм.</li>
          </ul>
      </div>

      <SentenceBuilder
        sentences={sentences}
        />
        <DialogueBlock
        title="Диалог"
        dialogues={dialogues}
        notes={notes}
      />
      <div class="classroom-task-block">
            <h2>Работа в классе: Future Simple</h2>
            <p class="task-description">
            Работайте в парах или группах, чтобы практиковать Future Simple! Это задание научит вас говорить о планах и обещаниях на английском языке.
            </p>
            <div class="task-steps">
            <h3>Что нужно сделать:</h3>
            <ol>
                <li>Каждый участник рассказывает о своих планах на выходные, используя Future Simple (например: "I will visit my friend. We will watch a movie.").</li>
                <li>Другие задают вопросы в Future Simple (например: "Will you go by bus?" "Will you buy popcorn?").</li>
                <li>Вместе придумайте историю о том, что вы будете делать всей группой на выходных, используя 6-8 предложений.</li>
                <li>Представьте эту историю другим группам.</li>
            </ol>
            </div>
      </div>
      <div class="lesson-video-section">
          <h2>Видео-урок про <strong className='lesson-strong'>Future Simple</strong></h2>
          <p>Посмотрите это видео, чтобы лучше понять, как использовать <strong className='lesson-strong'>Future Simple</strong></p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/EZQ9zHeObiU" frameborder="0" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default Lesson3