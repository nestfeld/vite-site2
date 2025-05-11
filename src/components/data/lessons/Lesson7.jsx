import React from 'react';
import SentenceBuilder from '../../SentenceBuilder/SentenceBuilder';
import DialogueBlock from '../../DialogueBlock/DialogueBlock';

const Lesson7 = () => {
    const sentences = [
        { words: ["I", "have", "a", "dog"], correct: "I have a dog" },
        { words: ["She", "saw", "an", "elephant", "at", "the", "zoo"], correct: "She saw an elephant at the zoo" },
        { words: ["He", "found", "the", "key"], correct: "He found the key" },
        { words: ["We", "visited", "a", "museum"], correct: "We visited a museum" },
        { words: ["They", "met", "an", "artist"], correct: "They met an artist" }
      ];
      
      const dialogues= [
        { speaker: "Emma:", text: "Did you see a dog in the park today?", translation: "Ты видел собаку в парке сегодня?" },
        { speaker: "Ben:", text: "Yes, I saw a dog chasing a ball.", translation: "Да, я видел собаку, гоняющуюся за мячом." },
        { speaker: "Emma:", text: "Was it the big brown dog near the fountain?", translation: "Это была та большая коричневая собака у фонтана?" },
        { speaker: "Ben:", text: "No, it was a small white dog with a blue collar.", translation: "Нет, это была маленькая белая собака с голубым ошейником." },
        { speaker: "Emma:", text: "Oh, I think I saw the same one last week!", translation: "О, думаю, я видела ту же самую на прошлой неделе!" },
        { speaker: "Ben:", text: "Yeah, it’s such a cute dog!", translation: "Да, такая милая собачка!" }
      ];
      
      
      const notes = [
        "Используйте 'a' перед словами, начинающимися с согласного звука.",
        "Используйте 'an' перед словами, начинающимися с гласного звука.",
        "Используйте 'the' для чего-то конкретного или известного."
      ];
      
  return (
    <>
      <div class="lesson-section">
          <h2>Что такое артикли?</h2>
          <p>Артикли — это слова, которые стоят перед существительными и определяют их значение в контексте. В английском языке существуют два типа артиклей: определенный артикль <strong>the</strong> и неопределенные артикли <strong>a</strong> и <strong>an</strong>.</p>
      </div>

      <div class="lesson-section">
          <h2>Определенный артикль <strong>the</strong></h2>
          <p>Артикль <strong>the</strong> используется, когда мы говорим о конкретном предмете или явлении, который известен как говорящему, так и слушателю. Это может быть что-то уже упомянутое или что-то уникальное.</p>
          <ul>
              <li><strong>The book on the table is mine.</strong> – Книга на столе моя.</li>
              <li><strong>The sun is shining today.</strong> – Солнце светит сегодня.</li>
              <li><strong>She is the best student in the class.</strong> – Она лучшая студентка в классе.</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Неопределенные артикли <strong>a</strong> и <strong>an</strong></h2>
          <p>Артикли <strong>a</strong> и <strong>an</strong> используются, когда мы говорим о чем-то в общем, а не о конкретном предмете. Эти артикли употребляются перед существительными, которые упоминаются в первый раз или не определены для слушателя.</p>
          <ul>
              <li><strong>I saw a cat in the yard.</strong> – Я видел кошку во дворе.</li>
              <li><strong>She wants to buy a new phone.</strong> – Она хочет купить новый телефон.</li>
          </ul>
          <p>При этом артикль <strong>a</strong> используется перед словами, начинающимися с согласного звука, а <strong>an</strong> — перед словами, начинающимися с гласного звука:</p>
          <ul>
              <li><strong>a book</strong> – книга</li>
              <li><strong>an apple</strong> – яблоко</li>
              <li><strong>a car</strong> – машина</li>
              <li><strong>an hour</strong> – час</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Когда не используется артикль?</h2>
          <p>Артикли не используются перед неисчисляемыми существительными, абстрактными понятиями и в некоторых других случаях:</p>
          <ul>
              <li><strong>Water</strong> is important for life. – Вода важна для жизни.</li>
              <li><strong>Love</strong> is a beautiful feeling. – Любовь — это прекрасное чувство.</li>
              <li>We go to <strong>school</strong> every day. – Мы ходим в школу каждый день.</li>
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
        <h2>Работа в классе: Артикли (a, an, the)</h2>
        <p class="task-description">
        Работайте вместе, чтобы правильно использовать артикли в английских предложениях.
        </p>
        <div class="task-steps">
        <h3>Что нужно сделать:</h3>
        <ol>
            <li>Получите список существительных и составьте предложения с ними, используя правильные артикли (например: "a cat", "an apple", "the sun").</li>
            <li>Проверьте друг у друга, правильно ли использованы артикли.</li>
            <li>Придумайте короткий рассказ (5-7 предложений), используя как можно больше слов с артиклями.</li>
            <li>Прочитайте рассказы вслух.</li>
        </ol>
        </div>
      </div>

      <div class="lesson-video-section">
          <h2>Видео-урок про <strong className='lesson-strong'>Артикли</strong></h2>
          <p>Посмотрите это видео, чтобы лучше понять, как правильно использовать артикли в английском языке:</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lTzVazO3U2k" frameborder="0" allowfullscreen></iframe>
      </div>

    </>
  )
}

export default Lesson7