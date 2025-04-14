import React from 'react'

const Lesson1 = () => {
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

        <div class="lesson-section">
            <h2>Примеры диалогов</h2>
            <p><strong>A:</strong> Do you study English every day?<br/>
              <strong>B:</strong> Yes, I do. I like learning new words!<br/>
              <strong>A:</strong> Great! Does your friend study English too?<br/>
              <strong>B:</strong> No, he doesn’t. He studies French.</p>
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