import React from 'react';
import SentenceBuilder from '../../SentenceBuilder/SentenceBuilder';
import DialogueBlock from '../../DialogueBlock/DialogueBlock';

const Lesson8 = () => {
    const sentences = [
        { words: ["Turn", "off", "the", "light"], correct: "Turn off the light" },
        { words: ["Pick", "up", "the", "phone"], correct: "Pick up the phone" },
        { words: ["Look", "after", "the", "baby"], correct: "Look after the baby" },
        { words: ["Give", "up", "smoking"], correct: "Give up smoking" },
        { words: ["Come", "back", "home", "early"], correct: "Come back home early" }
      ];
      
      const dialogues = [
        { speaker: "Jake:", text: "Hey Lisa, did you figure out the math homework?", translation: "Привет, Лиза, ты разобралась с домашним заданием по математике?" },
        { speaker: "Lisa:", text: "Not yet. I’m trying to work it out right now.", translation: "Ещё нет. Я сейчас пытаюсь разобраться." },
        { speaker: "Jake:", text: "If you need help, just reach out to me.", translation: "Если понадобится помощь, просто обратись ко мне." },
        { speaker: "Lisa:", text: "Thanks! I’ll call you if I get stuck.", translation: "Спасибо! Я позвоню тебе, если застряну." },
        { speaker: "Jake:", text: "No problem. Sometimes I also mess up with numbers.", translation: "Без проблем. Иногда я тоже путаюсь в цифрах." },
        { speaker: "Lisa:", text: "Good to know I’m not the only one!", translation: "Хорошо знать, что я не одна такая!" }
      ];
      
      
      const notes = [
        "Phrasal verbs состоят из глагола + предлога/наречия.",
        "Они могут менять значение глагола полностью (например, 'give up' = 'бросить').",
        "Некоторые фразовые глаголы можно разделить: 'pick up the phone' или 'pick the phone up'."
      ];
      
  return (
    <>
      <div class="lesson-section">
          <h2>Что такое фразовые глаголы?</h2>
          <p>Фразовые глаголы (phrasal verbs) — это сочетания глаголов с предлогами или наречиями, которые создают новые значения. Фразовые глаголы очень часто используются в разговорной речи и могут иметь множество различных значений в зависимости от контекста.</p>
          <p>Пример: <strong>give up</strong> — означать "сдаваться" или "прекращать что-то делать".</p>
      </div>

      <div class="lesson-section">
          <h2>Как образуются фразовые глаголы?</h2>
          <p>Фразовый глагол состоит из основного глагола и предлога или наречия. В зависимости от сочетания, значение фразового глагола может сильно изменяться:</p>
          <ul>
              <li><strong>turn on</strong> – включать (например, свет)</li>
              <li><strong>turn off</strong> – выключать</li>
              <li><strong>pick up</strong> – поднимать, забирать</li>
              <li><strong>give up</strong> – сдаваться</li>
              <li><strong>look after</strong> – заботиться о</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Примеры фразовых глаголов</h2>
          <p><strong>Turn on</strong> – включать</p>
          <ul>
              <li><strong>Can you turn on the light?</strong> – Можешь включить свет?</li>
          </ul>
          
          <p><strong>Pick up</strong> – поднимать, забирать</p>
          <ul>
              <li><strong>She picked up the phone.</strong> – Она подняла телефон.</li>
          </ul>
          
          <p><strong>Give up</strong> – сдаваться</p>
          <ul>
              <li><strong>Don't give up!</strong> – Не сдавайся!</li>
          </ul>

          <p><strong>Look after</strong> – заботиться о</p>
          <ul>
              <li><strong>He looks after his little brother.</strong> – Он заботится о своем младшем брате.</li>
          </ul>
      </div>

      <div class="lesson-section">
          <h2>Многоразовое использование фразовых глаголов</h2>
          <p>Фразовые глаголы могут использоваться в различных контекстах и с разными значениями:</p>
          <ul>
              <li><strong>Give up</strong> – сдаваться / прекращать что-то делать:
                  <ul>
                      <li><strong>She gave up smoking last year.</strong> – Она бросила курить в прошлом году.</li>
                  </ul>
              </li>
              <li><strong>Pick up</strong> – подбирать / забирать / улучшаться:
                  <ul>
                      <li><strong>I’ll pick you up at 5 pm.</strong> – Я заберу тебя в 5 вечера.</li>
                      <li><strong>His grades picked up after the test.</strong> – Его оценки улучшились после теста.</li>
                  </ul>
              </li>
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
        <h2>Работа в классе: Фразовые глаголы</h2>
        <p class="task-description">
        Работайте в группах, чтобы практиковать распространённые фразовые глаголы в английском языке.
        </p>
        <div class="task-steps">
        <h3>Что нужно сделать:</h3>
        <ol>
            <li>Каждой группе достаются 5 фразовых глаголов (например: "get up", "look for", "give up").</li>
            <li>Придумайте и запишите по одному предложению для каждого глагола.</li>
            <li>Сыграйте в мини-игру: одна группа загадывает фразовый глагол, объясняя его значение без использования самого глагола, а другие группы угадывают.</li>
            <li>Побеждает группа, угадавшая больше всего фразовых глаголов!</li>
        </ol>
        </div>
      </div>

      <div class="lesson-video-section">
          <h2>Видео-урок про <strong className='lesson-strong'>Фразовые глаголы</strong></h2>
          <p>Посмотрите это видео, чтобы лучше понять, как использовать фразовые глаголы в различных ситуациях:</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yOTb8_IY1lU" frameborder="0" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default Lesson8