import React from 'react';
import SentenceBuilder from '../../SentenceBuilder/SentenceBuilder';
import DialogueBlock from '../../DialogueBlock/DialogueBlock';

const Lesson5 = () => {
    const sentences = [
        { words: ["My", "friend", "likes", "to", "play", "chess"], correct: "My friend likes to play chess" },
        { words: ["The", "cat", "is", "sleeping", "on", "the", "sofa"], correct: "The cat is sleeping on the sofa" },
        { words: ["We", "are", "going", "to", "the", "park"], correct: "We are going to the park" },
        { words: ["She", "has", "a", "beautiful", "voice"], correct: "She has a beautiful voice" },
        { words: ["They", "enjoy", "reading", "books", "together"], correct: "They enjoy reading books together" }
      ];
      
      const dialogues = [
        { speaker: "Anna:", text: "Good morning, Tom! What time do you usually get up?", translation: "Доброе утро, Том! Во сколько ты обычно встаёшь?" },
        { speaker: "Tom:", text: "Good morning, Anna! I get up at 7 am every day.", translation: "Доброе утро, Анна! Я встаю в 7 утра каждый день." },
        { speaker: "Anna:", text: "Wow, that's early! What do you do after you wake up?", translation: "Вау, это рано! Что ты делаешь после того, как просыпаешься?" },
        { speaker: "Tom:", text: "I have a cup of coffee and read the news.", translation: "Я пью чашку кофе и читаю новости." },
        { speaker: "Anna:", text: "Sounds nice. Do you work from home or go to an office?", translation: "Звучит здорово. Ты работаешь из дома или ходишь в офис?" },
        { speaker: "Tom:", text: "I drive to the office. It takes me about 20 minutes.", translation: "Я еду в офис. Это занимает у меня около 20 минут." },
        { speaker: "Anna:", text: "What about your weekends? Do you have any special plans?", translation: "А как проходят твои выходные? У тебя есть какие-то особенные планы?" },
        { speaker: "Tom:", text: "On Saturdays, I play football with my friends. On Sundays, I usually relax at home.", translation: "По субботам я играю в футбол с друзьями. По воскресеньям я обычно отдыхаю дома." },
        { speaker: "Anna:", text: "That sounds perfect! I also like relaxing on Sundays.", translation: "Звучит прекрасно! Мне тоже нравится отдыхать по воскресеньям." },
        { speaker: "Tom:", text: "Maybe one day we can play football together!", translation: "Может быть, однажды мы сможем сыграть в футбол вместе!" }
      ];
      
      
      const notes = [
        "Обычная структура предложения: Подлежащее + Сказуемое + Дополнение.",
        "Для вопросов меняйте порядок: Вспомогательный глагол + Подлежащее + Сказуемое.",
        "Следите за порядком слов в английском предложении!"
      ];
      
  return (
    <>
      <div class="lesson-section">
          <h2>Что такое структура предложения?</h2>
          <p>Структура предложения – это порядок слов и элементов в предложении, который помогает передавать смысл. В английском языке основная структура предложения выглядит так:</p>
          <ul>
              <li><strong>Под subject (S) + глагол (V) + дополнение (O)</strong></li>
              <li>Пример: <strong>I eat breakfast.</strong> – Я завтракаю.</li>
          </ul>
          <p>Основные элементы структуры предложения:</p>
          <ul>
              <li><strong>Subject (S)</strong> – подлежащее (тот, кто или что выполняет действие).</li>
              <li><strong>Verb (V)</strong> – сказуемое (действие, которое выполняет подлежащее).</li>
              <li><strong>Object (O)</strong> – дополнение (тот, кто или что испытывает воздействие действия).</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Простая структура предложений</h2>
          <p>Простое утвердительное предложение состоит из трех основных элементов:</p>
          <ul>
              <li><strong>Subject + Verb + Object:</strong><br/> <em>I like pizza.</em> – Мне нравится пицца.</li>
              <li><strong>Subject + Verb:</strong><br/> <em>She sleeps.</em> – Она спит.</li>
          </ul>
          <p>Простое вопросительное предложение образуется с помощью вспомогательных глаголов (do, does, is, are, и др.):</p>
          <ul>
              <li><strong>Do/Does + Subject + Verb?</strong><br/> <em>Do you like pizza?</em> – Тебе нравится пицца?</li>
              <li><strong>Is/Are + Subject + Verb?</strong><br/> <em>Is she sleeping?</em> – Она спит?</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Отрицательная форма предложения</h2>
          <p>Для образования отрицательных предложений используем вспомогательные глаголы с частицами "not".</p>
          <ul>
              <li><strong>Subject + do/does not + Verb:</strong><br/> <em>I do not like pizza.</em> – Мне не нравится пицца.</li>
              <li><strong>Subject + is/are not + Verb:</strong><br/> <em>She is not sleeping.</em> – Она не спит.</li>
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
            <h2>Работа в классе: Структура предложения</h2>
            <p class="task-description">
            Работайте вместе, чтобы научиться правильно строить английские предложения в разных типах: утвердительных, отрицательных и вопросительных.
            </p>
            <div class="task-steps">
            <h3>Что нужно сделать:</h3>
            <ol>
                <li>Вам будет дан набор слов (например: "always / homework / my / do / I") — составьте правильное предложение.</li>
                <li>Создайте по 2 утвердительных, 2 отрицательных и 2 вопросительных предложения на выбранную тему (например: "School", "Hobbies").</li>
                <li>Обменяйтесь предложениями с другой группой для проверки.</li>
                <li>Прочитайте самые интересные предложения вслух.</li>
            </ol>
            </div>
      </div>
      <div class="lesson-video-section">
          <h2>Видео-урок про <strong className='lesson-strong'>Структуру предложений</strong></h2>
          <p>Посмотрите это видео, чтобы лучше понять, как строить предложения в английском языке:</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/your-video-link" frameborder="0" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default Lesson5