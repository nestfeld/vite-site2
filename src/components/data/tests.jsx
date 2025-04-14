const tests = [
  {
    id: '1',
    testName: "Время Present simple",
    testDificulty: 1,
    colorScheme: ['#BDF9FF', '#1CA2E5'],
    testEmoji: '🗣️🛒',
    questions: [
      {
        id: 1,
        question: "Какое предложение в Present Simple?",
        options: {
          a: "I am going to the store.",
          b: "I go to the store every day.",
          c: "I have gone to the store."
        },
        answer: "b"
      },
      {
        id: 2,
        question: "Выберите правильную форму глагола: 'She ___ to school every day.'",
        options: {
          a: "go",
          b: "goes",
          c: "going"
        },
        answer: "b"
      },
      {
        id: 3,
        question: "Выберите правильный ответ: 'They ___ play football on Sundays.'",
        options: {
          a: "doesn't",
          b: "don't",
          c: "not"
        },
        answer: "b"
      },
      {
        id: 4,
        question: "Какое предложение правильное?",
        options: {
          a: "She don't like coffee.",
          b: "She doesn't like coffee.",
          c: "She not like coffee."
        },
        answer: "b"
      },
      {
        id: 5,
        question: "Какой вариант правильный? 'I ___ to the gym every week.'",
        options: {
          a: "go",
          b: "goes",
          c: "going"
        },
        answer: "a"
      },
      {
        id: 6,
        question: "Какое предложение верное?",
        options: {
          a: "He speak English very well.",
          b: "He speaks English very well.",
          c: "He is speaking English very well."
        },
        answer: "b"
      },
      {
        id: 7,
        question: "Какой вариант правильный? 'We ___ breakfast at 7 AM every day.'",
        options: {
          a: "eat",
          b: "eats",
          c: "eating"
        },
        answer: "a"
      },
      {
        id: 8,
        question: "Как правильно: 'I ___ like ice cream.'",
        options: {
          a: "don't",
          b: "doesn't",
          c: "not"
        },
        answer: "a"
      },
      {
        id: 9,
        question: "Выберите правильный вариант: 'They ___ to work by car every day.'",
        options: {
          a: "drives",
          b: "drive",
          c: "driving"
        },
        answer: "b"
      },
      {
        id: 10,
        question: "Как правильно? 'My friends ___ in New York.'",
        options: {
          a: "live",
          b: "lives",
          c: "living"
        },
        answer: "a"
      }
    ]
  },
  {
    id: '2',
    testName: " Глагол to be (am, is, are)",
    testDificulty: 1,
    colorScheme: ['#9BFFAA', '#10A026'],
    testEmoji: '🧠💬',
    questions: [
      {
        id: 1,
        question: "Какой правильный вариант? 'I ___ a teacher.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "a"
      },
      {
        id: 2,
        question: "Выберите правильную форму: 'He ___ my friend.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "b"
      },
      {
        id: 3,
        question: "Какой вариант правильный? 'They ___ at home.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "c"
      },
      {
        id: 4,
        question: "Выберите правильную форму: 'You ___ happy.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "c"
      },
      {
        id: 5,
        question: "Как правильно: 'She ___ a doctor.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "b"
      },
      {
        id: 6,
        question: "Какой вариант правильный? 'I ___ a student.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "a"
      },
      {
        id: 7,
        question: "Выберите правильный ответ: 'We ___ from New York.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "c"
      },
      {
        id: 8,
        question: "Какой вариант правильный? 'She ___ not here.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "b"
      },
      {
        id: 9,
        question: "Какой вариант правильный? 'They ___ in the park.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "c"
      },
      {
        id: 10,
        question: "Как правильно: 'I ___ 15 years old.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "a"
      }
    ]
  },
  {
    id: '3',
    testName: "Модальный глагол Can",
    testDificulty: 1,
    colorScheme: ['#FFCCFF', '#FF0066'],
    testEmoji: '🧑‍🏫💬',
    questions: [
      {
        id: 1,
        question: "Какой правильный вариант? 'I ___ swim.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "a"
      },
      {
        id: 2,
        question: "Выберите правильную форму: 'She ___ play the piano.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "a"
      },
      {
        id: 3,
        question: "Какой вариант правильный? 'They ___ speak English.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "a"
      },
      {
        id: 4,
        question: "Выберите правильную форму: 'We ___ go to the cinema.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "a"
      },
      {
        id: 5,
        question: "Как правильно: 'He ___ ride a bike.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "a"
      },
      {
        id: 6,
        question: "Какой вариант правильный? 'I ___ dance very well.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "a"
      },
      {
        id: 7,
        question: "Выберите правильный вариант: 'You ___ speak French.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "a"
      },
      {
        id: 8,
        question: "Какой вариант правильный? 'She ___ play football.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "b"
      },
      {
        id: 9,
        question: "Как правильно: 'I ___ do it.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "a"
      },
      {
        id: 10,
        question: "Какой правильный ответ? 'They ___ run very fast.'",
        options: {
          a: "can",
          b: "can't",
          c: "could"
        },
        answer: "a"
      }
    ]
  },
  {
    id: '4',
    testName: "Время Present Continuous",
    testDificulty: 2,
    colorScheme: ['#FFDF99', '#FF9900'],
    testEmoji: '⏳🗣️',
    questions: [
      {
        id: 1,
        question: "Какое предложение в Present Continuous?",
        options: {
          a: "She goes to the store.",
          b: "She is going to the store.",
          c: "She has gone to the store."
        },
        answer: "b"
      },
      {
        id: 2,
        question: "Выберите правильную форму глагола: 'He ___ reading a book.'",
        options: {
          a: "is",
          b: "are",
          c: "am"
        },
        answer: "a"
      },
      {
        id: 3,
        question: "Какое предложение верное?",
        options: {
          a: "They are playing football.",
          b: "They playing football.",
          c: "They is playing football."
        },
        answer: "a"
      },
      {
        id: 4,
        question: "Выберите правильный ответ: 'I ___ working right now.'",
        options: {
          a: "am",
          b: "is",
          c: "are"
        },
        answer: "a"
      }
    ]
  },

  // Тест для уровня сложности 3
  {
    id: '5',
    testName: "Время Present Perfect",
    testDificulty: 3,
    colorScheme: ['#D3FFCC', '#56D600'],
    testEmoji: '🕒📝',
    questions: [
      {
        id: 1,
        question: "Какой вариант правильный? 'She ___ finished her homework.'",
        options: {
          a: "have",
          b: "has",
          c: "had"
        },
        answer: "b"
      },
      {
        id: 2,
        question: "Выберите правильную форму: 'They ___ seen this movie before.'",
        options: {
          a: "have",
          b: "has",
          c: "had"
        },
        answer: "a"
      },
      {
        id: 3,
        question: "Какой вариант правильный? 'We ___ visited London last year.'",
        options: {
          a: "have",
          b: "has",
          c: "had"
        },
        answer: "a"
      },
      {
        id: 4,
        question: "Как правильно: 'I ___ read that book.'",
        options: {
          a: "has",
          b: "have",
          c: "had"
        },
        answer: "b"
      }
    ]
  },

  // Тест для уровня сложности 4
  {
    id: '6',
    testName: "Модальные глаголы: must, should, ought to",
    testDificulty: 4,
    colorScheme: ['#FFD700', '#FF4500'],
    testEmoji: '🔑💡',
    questions: [
      {
        id: 1,
        question: "Какой вариант правильный? 'You ___ do your homework before going out.'",
        options: {
          a: "must",
          b: "should",
          c: "ought to"
        },
        answer: "a"
      },
      {
        id: 2,
        question: "Выберите правильную форму: 'You ___ go to the doctor if you feel sick.'",
        options: {
          a: "must",
          b: "should",
          c: "ought to"
        },
        answer: "b"
      },
      {
        id: 3,
        question: "Какой вариант правильный? 'I ___ go to the meeting; it's important.'",
        options: {
          a: "must",
          b: "should",
          c: "ought to"
        },
        answer: "a"
      },
      {
        id: 4,
        question: "Как правильно: 'He ___ wear a helmet when riding a bike.'",
        options: {
          a: "must",
          b: "should",
          c: "ought to"
        },
        answer: "a"
      }
    ]
  },

  // Тест для уровня сложности 5
  {
    id: '7',
    testName: "Passive Voice (Страдательный залог)",
    testDificulty: 5,
    colorScheme: ['#FFCC99', '#FF6600'],
    testEmoji: '🔄📖',
    questions: [
      {
        id: 1,
        question: "Какой вариант правильный? 'The book ___ by the author.'",
        options: {
          a: "is written",
          b: "was written",
          c: "writes"
        },
        answer: "a"
      },
      {
        id: 2,
        question: "Выберите правильную форму: 'The homework ___ by the students.'",
        options: {
          a: "is done",
          b: "was done",
          c: "has done"
        },
        answer: "a"
      },
      {
        id: 3,
        question: "Какой вариант правильный? 'The project ___ by the team yesterday.'",
        options: {
          a: "was completed",
          b: "is completed",
          c: "completed"
        },
        answer: "a"
      },
      {
        id: 4,
        question: "Как правильно: 'The letter ___ by the secretary every day.'",
        options: {
          a: "is sent",
          b: "was sent",
          c: "sends"
        },
        answer: "a"
      }
    ]
  },

  {
    id: '8',
    testName: "Past Simple (Прошедшее простое время)",
    testDificulty: 1,
    colorScheme: ['#99CCFF', '#0066CC'],
    testEmoji: '⏳📖',
    questions: [
      {
        id: 1,
        question: "Выберите правильный вариант: 'She ___ to the store yesterday.'",
        options: {
          a: "goes",
          b: "went",
          c: "gone"
        },
        answer: "b"
      },
      {
        id: 2,
        question: "Какой вариант правильный? 'They ___ dinner at 7 PM last night.'",
        options: {
          a: "eat",
          b: "ate",
          c: "eaten"
        },
        answer: "b"
      },
      {
        id: 3,
        question: "Выберите верный глагол: 'He ___ the film two days ago.'",
        options: {
          a: "sees",
          b: "saw",
          c: "seen"
        },
        answer: "b"
      },
      {
        id: 4,
        question: "Какой вариант правильный? 'We ___ to Paris last summer.'",
        options: {
          a: "go",
          b: "went",
          c: "gone"
        },
        answer: "b"
      },
      {
        id: 5,
        question: "Выберите правильный вариант: 'She ___ a letter to her friend last week.'",
        options: {
          a: "writes",
          b: "wrote",
          c: "written"
        },
        answer: "b"
      },
      {
        id: 6,
        question: "Как правильно: 'They ___ TV all evening yesterday.'",
        options: {
          a: "watched",
          b: "watch",
          c: "watching"
        },
        answer: "a"
      },
      {
        id: 7,
        question: "Выберите правильную форму: 'I ___ my homework before dinner.'",
        options: {
          a: "did",
          b: "do",
          c: "done"
        },
        answer: "a"
      },
      {
        id: 8,
        question: "Как правильно: 'He ___ the door before leaving.'",
        options: {
          a: "close",
          b: "closed",
          c: "closing"
        },
        answer: "b"
      },
      {
        id: 9,
        question: "Выберите верный глагол: 'She ___ a new dress last week.'",
        options: {
          a: "buys",
          b: "bought",
          c: "buyed"
        },
        answer: "b"
      },
      {
        id: 10,
        question: "Какой вариант правильный? 'We ___ a great time at the party.'",
        options: {
          a: "had",
          b: "have",
          c: "has"
        },
        answer: "a"
      },
      {
        id: 11,
        question: "Выберите правильный вариант: 'She ___ me a letter two days ago.'",
        options: {
          a: "sends",
          b: "sent",
          c: "send"
        },
        answer: "b"
      },
      {
        id: 12,
        question: "Как правильно: 'He ___ up early this morning.'",
        options: {
          a: "wakes",
          b: "woke",
          c: "woken"
        },
        answer: "b"
      },
      {
        id: 13,
        question: "Выберите правильный вариант: 'They ___ football last weekend.'",
        options: {
          a: "played",
          b: "play",
          c: "playing"
        },
        answer: "a"
      },
      {
        id: 14,
        question: "Как правильно: 'We ___ our grandparents last Sunday.'",
        options: {
          a: "visited",
          b: "visit",
          c: "visiting"
        },
        answer: "a"
      },
      {
        id: 15,
        question: "Выберите верный глагол: 'I ___ a great book last month.'",
        options: {
          a: "read",
          b: "reads",
          c: "reading"
        },
        answer: "a"
      }
    ]
  },
  {
    id: '9',
    testName: "Future Simple (Будущее простое время)",
    testDificulty: 1,
    colorScheme: ['#99FF99', '#009933'],
    testEmoji: '🔮📖',
    questions: [
      {
        id: 1,
        question: "Выберите правильный вариант: 'She ___ to the store tomorrow.'",
        options: {
          a: "goes",
          b: "will go",
          c: "gone"
        },
        answer: "b"
      },
      {
        id: 2,
        question: "Какой вариант правильный? 'They ___ dinner at 7 PM next Monday.'",
        options: {
          a: "eat",
          b: "will eat",
          c: "eaten"
        },
        answer: "b"
      },
      {
        id: 3,
        question: "Выберите верный глагол: 'He ___ the film next weekend.'",
        options: {
          a: "sees",
          b: "will see",
          c: "seen"
        },
        answer: "b"
      },
      {
        id: 4,
        question: "Какой вариант правильный? 'We ___ to Paris next summer.'",
        options: {
          a: "go",
          b: "will go",
          c: "gone"
        },
        answer: "b"
      },
      {
        id: 5,
        question: "Выберите правильный вариант: 'She ___ a letter to her friend next week.'",
        options: {
          a: "writes",
          b: "will write",
          c: "written"
        },
        answer: "b"
      },
      {
        id: 6,
        question: "Как правильно: 'They ___ TV all evening tomorrow.'",
        options: {
          a: "will watch",
          b: "watch",
          c: "watching"
        },
        answer: "a"
      },
      {
        id: 7,
        question: "Выберите правильную форму: 'I ___ my homework before dinner.'",
        options: {
          a: "will do",
          b: "do",
          c: "done"
        },
        answer: "a"
      },
      {
        id: 8,
        question: "Как правильно: 'He ___ the door before leaving.'",
        options: {
          a: "will close",
          b: "close",
          c: "closing"
        },
        answer: "a"
      },
      {
        id: 9,
        question: "Выберите верный глагол: 'She ___ a new dress next week.'",
        options: {
          a: "buys",
          b: "will buy",
          c: "buyed"
        },
        answer: "b"
      },
      {
        id: 10,
        question: "Какой вариант правильный? 'We ___ a great time at the party.'",
        options: {
          a: "will have",
          b: "have",
          c: "has"
        },
        answer: "a"
      },
      {
        id: 11,
        question: "Выберите правильный вариант: 'She ___ me a letter next week.'",
        options: {
          a: "sends",
          b: "will send",
          c: "send"
        },
        answer: "b"
      },
      {
        id: 12,
        question: "Как правильно: 'He ___ up early tomorrow morning.'",
        options: {
          a: "will wake",
          b: "wakes",
          c: "woken"
        },
        answer: "a"
      },
      {
        id: 13,
        question: "Выберите правильный вариант: 'They ___ football next weekend.'",
        options: {
          a: "will play",
          b: "play",
          c: "playing"
        },
        answer: "a"
      },
      {
        id: 14,
        question: "Как правильно: 'We ___ our grandparents next Sunday.'",
        options: {
          a: "will visit",
          b: "visit",
          c: "visiting"
        },
        answer: "a"
      },
      {
        id: 15,
        question: "Выберите верный глагол: 'I ___ a great book next month.'",
        options: {
          a: "will read",
          b: "reads",
          c: "reading"
        },
        answer: "a"
      }
    ]
  },
];

export default tests;