import React from 'react';
import SentenceBuilder from '../../SentenceBuilder/SentenceBuilder';
import DialogueBlock from '../../DialogueBlock/DialogueBlock';

const Lesson2 = () => {
    const sentences = [
        { words: ["I", "visited", "my", "grandparents", "yesterday"], correct: "I visited my grandparents yesterday" },
        { words: ["She", "watched", "a", "movie", "last", "night"], correct: "She watched a movie last night" },
        { words: ["They", "traveled", "to", "London", "in", "2022"], correct: "They traveled to London in 2022" },
        { words: ["He", "played", "football", "after", "school"], correct: "He played football after school" },
        { words: ["We", "ate", "pizza", "for", "dinner"], correct: "We ate pizza for dinner" }
      ];
      
      const dialogues = [
        { speaker: "Emma:", text: "What did you do last weekend?", translation: "Что ты делал на прошлых выходных?" },
        { speaker: "Jack:", text: "I went hiking with my friends.", translation: "Я ходил в поход с друзьями." },
        { speaker: "Emma:", text: "Did you enjoy it?", translation: "Тебе понравилось?" },
        { speaker: "Jack:", text: "Yes! It was amazing.", translation: "Да! Это было потрясающе." },
        { speaker: "Emma:", text: "I stayed home and watched a movie.", translation: "Я осталась дома и посмотрела фильм." },
        { speaker: "Jack:", text: "Sounds relaxing!", translation: "Звучит расслабляюще!" }
      ];
      
      const notes = [
        "Добавляйте окончание -ed для правильных глаголов.",
        "Для неправильных глаголов используйте вторую форму (например, 'went', 'ate').",
        "Past Simple используется для действий, которые произошли в прошлом."
      ];
      
  return (
    <>
      <div class="lesson-section">
          <h2>Что такое Past Simple?</h2>
          <p>Past Simple – это прошедшее простое время в английском языке, которое используется для описания завершенных действий в прошлом. Оно часто сопровождается временными указателями, такими как yesterday, last week, two days ago.</p>
          <ul>
              <li><strong>I visited my grandma yesterday.</strong> – Я навестил свою бабушку вчера.</li>
              <li><strong>She watched a movie last night.</strong> – Она смотрела фильм прошлым вечером.</li>
              <li><strong>We traveled to Paris last summer.</strong> – Мы путешествовали в Париж прошлым летом.</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Как образуется Past Simple?</h2>
          <p>В утвердительных предложениях:</p>
          <ul>
              <li>Правильные глаголы получают окончание -ed (play → played, visit → visited).</li>
              <li>Неправильные глаголы имеют свою уникальную форму (go → went, see → saw).</li>
          </ul>
          <p>Примеры:</p>
          <ul>
              <li><strong>I/You/We/They played football.</strong> – Я/Ты/Мы/Они играли в футбол.</li>
              <li><strong>He/She/It went to school.</strong> – Он/Она пошел(а) в школу.</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Вопросительные и отрицательные формы</h2>
          <p>В вопросах используется вспомогательный глагол did:</p>
          <ul>
              <li><strong>Did you visit your parents?</strong> – Ты навещал своих родителей?</li>
              <li><strong>Did she read the book?</strong> – Она прочитала книгу?</li>
          </ul>
          <p>В отрицаниях используется did not (didn't):</p>
          <ul>
              <li><strong>I didn't play football.</strong> – Я не играл в футбол.</li>
              <li><strong>He didn't like the movie.</strong> – Ему не понравился фильм.</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Часто используемые выражения с Past Simple</h2>
          <ul>
              <li><strong>Yesterday</strong> – вчера</li>
              <li><strong>Last week/month/year</strong> – на прошлой неделе/в прошлом месяце/году</li>
              <li><strong>Two days ago</strong> – два дня назад</li>
              <li><strong>In 2020</strong> – в 2020 году</li>
          </ul>
          <p>Пример:</p>
          <p><strong>I met my friend two days ago.</strong> – Я встретил друга два дня назад.</p>
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
            <h2>Работа в классе: Past Simple</h2>
            <p class="task-description">
            Работайте в парах или маленьких группах, чтобы практиковать Past Simple! Это задание поможет вам рассказывать о событиях в прошлом на английском языке.
            </p>
            <div class="task-steps">
            <h3>Что нужно сделать:</h3>
            <ol>
                <li>Каждый участник рассказывает о том, как провёл прошлые выходные (например: "I visited my grandparents. We played board games.").</li>
                <li>Другие задают уточняющие вопросы в Past Simple (например: "Did you visit them by car?" "Did you cook anything together?").</li>
                <li>Составьте вместе короткий рассказ (5-6 предложений) о чьих-то выходных и запишите его.</li>
                <li>Презентуйте рассказ другим группам.</li>
            </ol>
            </div>
      </div>
      <div class="lesson-video-section">
          <h2>Видео-урок про <strong className='lesson-strong'>Past Simple</strong></h2>
          <p>Посмотрите это видео, чтобы лучше понять, как использовать <strong className='lesson-strong'>Past Simple</strong></p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gMHxEO3LrQg" frameborder="0" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default Lesson2