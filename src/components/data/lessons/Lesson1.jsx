import React from 'react';
import SentenceBuilder from '../../SentenceBuilder/SentenceBuilder';
import DialogueBlock from '../../DialogueBlock/DialogueBlock';

const Lesson1 = () => {

    const sentences = [
      { words: ["I", "go", "to", "school"], correct: "I go to school" },
      { words: ["She", "plays", "tennis", "every", "day"], correct: "She plays tennis every day" },
      { words: ["They", "watch", "TV", "at", "night"], correct: "They watch TV at night" },
      { words: ["He", "reads", "books", "in", "the", "evening"], correct: "He reads books in the evening" },
      { words: ["We", "visit", "our", "grandma", "on", "Sundays"], correct: "We visit our grandma on Sundays" }
    ];

    const dialogues = [
        { speaker: "Anna:", text: "Hi, Tom! What do you do every morning?", translation: "Привет, Том! Что ты делаешь каждое утро?" },
        { speaker: "Tom:", text: "Hi, Anna! I wake up at 7 and make breakfast.", translation: "Привет, Анна! Я просыпаюсь в 7 и готовлю завтрак." },
        { speaker: "Anna:", text: "Do you go to work after that?", translation: "Ты идешь на работу после этого?" },
        { speaker: "Tom:", text: "Yes, I drive to the office at 8. What about you?", translation: "Да, я еду в офис в 8. А ты?" },
        { speaker: "Anna:", text: "I study at home. I read books and practice English.", translation: "Я учусь дома. Я читаю книги и практикую английский." },
        { speaker: "Tom:", text: "Cool! I like your routine.", translation: "Круто! Мне нравится твой распорядок." }
    ];

    const notes = [
        '"Do" используется для вопросов и отрицаний.',
        'Добавляйте "s" к глаголам для he/she/it (например, "drives").',
        'Используйте Present Simple для привычек и рутины.'
    ];

return (
    <>
    <div class="lesson-section">
        <h2>Что такое Present Simple?</h2>
        <p>Present Simple – это настоящее простое время в английском языке, которое используется для описания привычек, фактов и регулярных действий.</p>
        <ul>
            <li><strong>I work every day.</strong> – Я работаю каждый день.</li>
            <li><strong>She likes coffee.</strong> – Ей нравится кофе.</li>
            <li><strong>We live in London.</strong> – Мы живем в Лондоне.</li>
        </ul>
    </div>

    <div class="lesson-section">
        <h2>Как образуется Present Simple?</h2>
        <p>В утвердительных предложениях используется основная форма глагола, но для he/she/it добавляется окончание -s.</p>
        <ul>
            <li><strong>I/You/We/They play football.</strong></li>
            <li><strong>He/She/It plays football.</strong></li>
        </ul>
        <p>В вопросах используется вспомогательный глагол do/does:</p>
        <ul>
            <li><strong>Do you like coffee?</strong> – Тебе нравится кофе?</li>
            <li><strong>Does she work here?</strong> – Она работает здесь?</li>
        </ul>
        <p>В отрицаниях используется do not (don't) или does not (doesn't):</p>
        <ul>
            <li><strong>I don't play football.</strong> – Я не играю в футбол.</li>
            <li><strong>He doesn't like tea.</strong> – Ему не нравится чай.</li>
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
        <h2>Работа в классе: Present Simple</h2>
        <p class="task-description">
        Работайте вместе с одногруппниками, чтобы практиковать Present Simple! Это задание поможет вам научиться говорить о своих привычках и распорядке дня на английском языке.
        </p>
        <div class="task-steps">
        <h3>Что нужно сделать:</h3>
        <ol>
            <li>Разделитесь на группы по 3-4 человека.</li>
            <li>Каждый участник рассказывает о своем типичном дне, используя Present Simple (например: "I wake up at 7. I go to school."). Используйте слова вроде "always", "sometimes", "never".</li>
            <li>Остальные в группе задают по 2 вопроса, начиная с "Do you...?" (например: "Do you watch TV in the evening?"). Отвечайте коротко.</li>
            <li>Выберите одного человека в группе и вместе составьте рассказ о его дне на английском (5-6 предложений). Запишите его.</li>
            <li>Прочитайте свой рассказ другой группе и послушайте их рассказы.</li>
        </ol>
        </div>
    </div>

    <div class="lesson-video-section">
        <h2>Видео-урок про <strong className='lesson-strong'>Present Simple</strong></h2>
        <p>Посмотрите это видео, чтобы лучше понять, как использовать <strong className='lesson-strong'>Present Simple</strong></p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6Qd1xAikoQc" frameborder="0" allowfullscreen></iframe>
    </div>
    </>
  )
}

export default Lesson1