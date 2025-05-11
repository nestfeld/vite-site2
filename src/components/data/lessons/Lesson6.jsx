import React from 'react';
import SentenceBuilder from '../../SentenceBuilder/SentenceBuilder';
import DialogueBlock from '../../DialogueBlock/DialogueBlock';

const Lesson6 = () => {
    const sentences = [
        { words: ["He", "said", "that", "he", "was", "tired"], correct: "He said that he was tired" },
        { words: ["She", "told", "me", "she", "loved", "music"], correct: "She told me she loved music" },
        { words: ["They", "said", "they", "had", "finished", "work"], correct: "They said they had finished work" },
        { words: ["I", "asked", "if", "she", "was", "ready"], correct: "I asked if she was ready" },
        { words: ["We", "said", "we", "would", "come", "later"], correct: "We said we would come later" }
      ];
      
      const dialogues = [
        { speaker: "Teacher:", text: "What did Sarah say about the meeting?", translation: "Что сказала Сара о встрече?" },
        { speaker: "Student:", text: "She said that the meeting was postponed.", translation: "Она сказала, что встреча была перенесена." },
        { speaker: "Teacher:", text: "Did she mention the new date?", translation: "Она упомянула новую дату?" },
        { speaker: "Student:", text: "Yes, she said it would be next Friday.", translation: "Да, она сказала, что это будет в следующую пятницу." },
        { speaker: "Teacher:", text: "And what did Tom say?", translation: "А что сказал Том?" },
        { speaker: "Student:", text: "Tom said he couldn't come because he had another meeting.", translation: "Том сказал, что он не сможет прийти, потому что у него другая встреча." },
        { speaker: "Teacher:", text: "Alright, thanks for the update!", translation: "Хорошо, спасибо за обновление!" }
      ];
      
      
      const notes = [
        "В Reported Speech часто меняются времена: Present → Past.",
        "Слова меняются: 'today' → 'that day', 'tomorrow' → 'the next day'.",
        "Используйте 'said', 'told', 'asked' для начала косвенной речи."
      ];
      
  return (
    <>
      <div class="lesson-section">
          <h2>Что такое косвенная речь?</h2>
          <p>Косвенная речь (или косвенное высказывание) используется для передачи слов другого человека, но без прямого цитирования. Вместо того, чтобы сказать, что кто-то сказал что-то дословно, мы перефразируем его слова.</p>
          <p>Пример прямой речи:</p>
          <ul>
              <li><strong>She said, "I am going to the store."</strong> – Она сказала: "Я иду в магазин".</li>
          </ul>
          <p>Пример косвенной речи:</p>
          <ul>
              <li><strong>She said that she was going to the store.</strong> – Она сказала, что она идет в магазин.</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Как образуется косвенная речь?</h2>
          <p>Для превращения прямой речи в косвенную важно обратить внимание на следующие моменты:</p>
          <ul>
              <li><strong>Смена времён:</strong> Если в прямой речи используется настоящее время, то в косвенной речи обычно используется прошедшее время. Например:</li>
              <ul>
                  <li><strong>Direct Speech:</strong> "I eat pizza every day." – "Я ем пиццу каждый день."<br/>
                  <strong>Reported Speech:</strong> He said that he ate pizza every day. – Он сказал, что ест пиццу каждый день.</li>
              </ul>
              <li><strong>Изменение местоимений:</strong> Местоимения также могут изменяться, например:</li>
              <ul>
                  <li><strong>Direct Speech:</strong> "I am coming with you." – "Я иду с тобой."<br/>
                  <strong>Reported Speech:</strong> He said that he was coming with me. – Он сказал, что он идет со мной.</li>
              </ul>
              <li><strong>Убираем кавычки и используем "that" для соединения предложений:</strong></li>
              <ul>
                  <li><strong>Direct Speech:</strong> "She will help me." – "Она поможет мне."<br/>
                  <strong>Reported Speech:</strong> She said that she would help me. – Она сказала, что поможет мне.</li>
              </ul>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Когда не используем "that" в косвенной речи?</h2>
          <p>Иногда "that" можно опустить, особенно в разговорной речи, но это не влияет на смысл:</p>
          <ul>
              <li><strong>He said (that) he was tired.</strong></li>
              <li><strong>She asked (that) we be quiet.</strong></li>
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
        <h2>Работа в классе: Косвенная речь</h2>
        <p class="task-description">
        Работайте в парах или группах, чтобы научиться передавать слова других людей на английском языке, используя косвенную речь (Reported Speech).
        </p>
        <div class="task-steps">
        <h3>Что нужно сделать:</h3>
        <ol>
            <li>Один участник говорит фразу (например: "I am tired.").</li>
            <li>Другой участник передает эту фразу в косвенной речи (например: "He said that he was tired.").</li>
            <li>Поменяйтесь ролями после каждой фразы.</li>
            <li>Запишите 5 примеров косвенной речи от своей группы и прочитайте их вслух.</li>
        </ol>
        </div>
      </div>
      <div class="lesson-video-section">
          <h2>Видео-урок про <strong className='lesson-strong'>Косвенную речь</strong></h2>
          <p>Посмотрите это видео, чтобы лучше понять, как использовать косвенную речь:</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iFNFD0pS1gk" frameborder="0" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default Lesson6