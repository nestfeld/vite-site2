import React from 'react';
import SentenceBuilder from '../../SentenceBuilder/SentenceBuilder';
import DialogueBlock from '../../DialogueBlock/DialogueBlock';

const Lesson4 = () => {
  const sentences = [
    { words: ["You", "should", "drink", "more", "water"], correct: "You should drink more water" },
    { words: ["Can", "you", "help", "me", "please"], correct: "Can you help me please" },
    { words: ["He", "must", "finish", "his", "homework"], correct: "He must finish his homework" },
    { words: ["We", "could", "go", "to", "the", "beach"], correct: "We could go to the beach" },
    { words: ["She", "might", "visit", "us", "next", "week"], correct: "She might visit us next week" }
  ];
  
  const dialogues = [
    { speaker: "Olivia:", text: "Can you open the window?", translation: "Можешь открыть окно?" },
    { speaker: "Noah:", text: "Sure! It’s very hot here.", translation: "Конечно! Здесь очень жарко." },
    { speaker: "Olivia:", text: "We should buy a fan.", translation: "Нам стоит купить вентилятор." },
    { speaker: "Noah:", text: "Good idea. We must go shopping tomorrow.", translation: "Хорошая идея. Мы должны пойти за покупками завтра." }
  ];
  
  const notes = [
    "Modal verbs (can, should, must) используются без 'to'.",
    "Они показывают возможность, необходимость или совет.",
    "После модального глагола идет основной глагол без изменений."
  ];
  
  return (
    <>
      <div class="lesson-section">
          <h2>Что такое модальные глаголы?</h2>
          <p>Модальные глаголы – это особые глаголы, которые используются для выражения возможности, необходимости, разрешения или совета.</p>
          <ul>
              <li><strong>Can</strong> – выражает возможность или умение. <br/><em>I can swim.</em> – Я умею плавать.</li>
              <li><strong>Must</strong> – выражает необходимость или обязанность. <br/><em>You must wear a seatbelt.</em> – Ты должен пристегнуть ремень безопасности.</li>
              <li><strong>Should</strong> – выражает совет или рекомендацию. <br/><em>You should eat more vegetables.</em> – Тебе стоит есть больше овощей.</li>
              <li><strong>May</strong> – выражает разрешение или возможность. <br/><em>May I come in?</em> – Можно войти?</li>
              <li><strong>Could</strong> – выражает вежливую просьбу или возможность в прошлом. <br/><em>Could you help me?</em> – Не могли бы вы мне помочь?</li>
              <li><strong>Would</strong> – используется в условных предложениях и вежливых просьбах. <br/><em>Would you like some tea?</em> – Хотите чаю?</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Как использовать модальные глаголы?</h2>
          <p>Модальные глаголы имеют несколько особенностей:</p>
          <ul>
              <li>Они не изменяются по лицам и числам. <br/><em>He can swim.</em> – Он умеет плавать. (не *He cans swim*)</li>
              <li>После них используется основной глагол без частицы to. <br/><em>She must go now.</em> – Ей нужно идти сейчас.</li>
              <li>Вопросы и отрицания образуются без вспомогательных глаголов. <br/><em>Can you help me?</em> – Ты можешь мне помочь? <br/><em>He can't drive.</em> – Он не умеет водить.</li>
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
          <h2>Работа в классе: Модальные глаголы (can, must, should)</h2>
          <p class="task-description">
          Работайте в группах, чтобы практиковать модальные глаголы! Вы научитесь советовать, разрешать и указывать обязанности на английском языке.
          </p>
          <div class="task-steps">
          <h3>Что нужно сделать:</h3>
          <ol>
              <li>Обсудите ситуации (например: "A new student at school", "Preparing for an exam") и дайте советы с помощью "should", "must", "can".</li>
              <li>Каждый пишет 2 совета для одной ситуации (например: "You should make new friends." "You must be on time.").</li>
              <li>Обменяйтесь советами с другими группами.</li>
              <li>Сделайте короткую презентацию о правилах поведения для новой школы/класса.</li>
          </ol>
          </div>
      </div>
      <div class="lesson-video-section">
          <h2>Видео-урок про <strong className='lesson-strong'>Модальные глаголы</strong></h2>
          <p>Посмотрите это видео, чтобы лучше понять, как использовать <strong className='lesson-strong'>модальные глаголы</strong></p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_JirrxjqKgk" frameborder="0" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default Lesson4