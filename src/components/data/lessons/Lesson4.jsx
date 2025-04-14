import React from 'react'

const Lesson4 = () => {
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

      <div class="lesson-section">
          <h2>Примеры диалогов</h2>
          <p><strong>A:</strong> Can you play the guitar?<br/>
            <strong>B:</strong> Yes, I can. I learned it last year.<br/>
            <strong>A:</strong> Great! You should play something for us!<br/>
            <strong>B:</strong> Okay, I will!</p>
          
          <p><strong>A:</strong> Must we finish the project today?<br/>
            <strong>B:</strong> Yes, we must. The deadline is tomorrow.<br/>
            <strong>A:</strong> Alright, let’s get to work!</p>
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