import React from 'react'

const Lesson2 = () => {
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

      <div class="lesson-section">
          <h2>Примеры диалогов</h2>
          <p><strong>A:</strong> Did you visit your grandparents last weekend?<br/>
            <strong>B:</strong> Yes, I did. We had a great time!<br/>
            <strong>A:</strong> Nice! Did your brother go with you?<br/>
            <strong>B:</strong> No, he didn’t. He stayed at home.</p>
          
          <p><strong>A:</strong> What did you do last night?<br/>
            <strong>B:</strong> I watched a movie and read a book.<br/>
            <strong>A:</strong> That sounds relaxing!</p>
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