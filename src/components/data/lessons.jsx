import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";
import Lesson3 from "./lessons/Lesson3";
import Lesson4 from "./lessons/Lesson4";
import Lesson5 from "./lessons/Lesson5";
import Lesson6 from "./lessons/Lesson6";
import Lesson7 from "./lessons/Lesson7";
import Lesson8 from "./lessons/Lesson8";

const lessons = [
  {
    id: '1',
    lessonName: "Время Present Simple",
    lessonDifficulty: 1,
    colorScheme: ['#BDF9FF', '#9CDEFF'],
    lessonEmoji: '🗣️🛒',
    lesson: Lesson1,
    relatedTestId: 1,
  },
  {
    id: '2',
    lessonName: "Время Past Simple",
    lessonDifficulty: 2,
    colorScheme: ['#FFD3B6', '#FFAAA5'],
    lesson: Lesson2,
    lessonEmoji: '⏳📜',
    relatedTestId: 8,
  },
  {
    id: '3',
    lessonName: "Время Future Simple",
    lessonDifficulty: 1,
    colorScheme: ['#D4A5FF', '#BA68C8'],
    lesson: Lesson3,
    lessonEmoji: '🔮🚀',
    relatedTestId: 9,
  },
  {
    id: '4',
    lessonName: "Модальные глаголы",
    lessonDifficulty: 2,
    colorScheme: ['#FFECB3', '#FFC107'],
    lesson: Lesson4,
    lessonEmoji: '🤔🚦',
    relatedTestId: 3,
  },
  {
    id: '5',
    lessonName: "Структура предложений",
    lessonDifficulty: 3,
    colorScheme: ['#C8E6C9', '#81C784'],
    lesson: Lesson5,
    lessonEmoji: '🏗️📜',
  },
  {
    id: '6',
    lessonName: "Косвенная речь",
    lessonDifficulty: 4,
    colorScheme: ['#F8BBD0', '#F48FB1'],
    lesson: Lesson6,
    lessonEmoji: '🗨️➡️',
  },
  {
    id: '7',
    lessonName: "Артикли",
    lessonDifficulty: 4,
    colorScheme: ['#BBDEFB', '#64B5F6'],
    lesson: Lesson7,
    lessonEmoji: '📖🔤',
  },
  {
    id: '8',
    lessonName: "Фразовые глаголы",
    lessonDifficulty: 5,
    colorScheme: ['#FFE0B2', '#FFB74D'],
    lesson: Lesson8,
    lessonEmoji: '🔄🗣️',
  },
];


export default lessons;