import { QuestionEntity } from "./domain/entities/question.entity";

export const questions: QuestionEntity.Question[] = [
  {
    id: '1',
    audio: import.meta.env.BASE_URL + '/1.mp3',
    title: "Câu số 1: Nghe và đoán tên bài hát sau đây là gì?",
    answers: [
      { content: 'Ước mơ của mẹ', correct: true },
      { content: 'Nhật ký của mẹ' },
      { content: 'Gặp mẹ trong mơ' },
      { content: 'Chưa bao giờ mẹ kể' }
    ]
  },
  {
    id: '2',
    audio: import.meta.env.BASE_URL + '/2.mp3',
    title: "Câu số 2: Nghe và đoán tên bài hát sau đây là gì?",
    answers: [
      { content: 'Safe and Sound', correct: true },
      { content: 'Teardrops on my guitar' },
      { content: 'Love story' },
      { content: 'You belong with me' }
    ]
  },
  {
    id: '3',
    audio: import.meta.env.BASE_URL + '/3.mp3',
    title: "Câu số 3: Nghe và đoán tên bài hát sau đây là gì?",
    answers: [
      { content: 'Kiss The Rain', correct: true },
      { content: 'River Flows In You' },
      { content: 'May Be' },
      { content: 'Stay In Memory' }
    ]
  },
  {
    id: '4',
    audio: import.meta.env.BASE_URL + '/4.mp3',
    title: "Câu số 4: Nghe và đoán tên bài hát sau đây là gì?",
    answers: [
      { content: 'Nơi này có anh',  correct: true },
      { content: 'Âm thầm bên em' },
      { content: 'Chắc ai đó sẽ về' },
      { content: 'Bình yên những giây phút' }
    ]
  },
  {
    id: '5',
    audio: import.meta.env.BASE_URL + '/5.mp3',
    title: "Câu số 5: Nghe và đoán tên bài hát sau đây là gì?",
    answers: [
      { content: 'Ba Kể Con Nghe',  correct: true },
      { content: 'Sao Cha Không' },
      { content: 'Cha Già Rồi Đúng Không' },
      { content: 'Điều Cha Chưa Nói' }
    ]
  }

]