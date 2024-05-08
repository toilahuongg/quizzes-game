export namespace QuestionEntity {
  export interface Answer {
    content: string;
    correct?: boolean;
  }
  export interface Question {
    id: string;
    title: string;
    audio: string;
    answers: Answer[];
  }
}