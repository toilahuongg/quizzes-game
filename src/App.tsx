
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useMemo, useState } from 'react';
import './App.css';
import { Frame } from './libs/components/Frame';
import { Question } from './libs/components/Question';
import { questions as $questions } from './questions';
import { ScreenSuccess } from './libs/components/ScreenSuccess';
import { ScreenError } from './libs/components/ScreenError';
export default function App() {
  const questions = useMemo(() => $questions.map(question => {
    // random answers
    const answers = question.answers.sort(() => Math.random() - 0.5);
    question.answers = answers;
    return question;
  }), []);

  const [openScreenSuccess, setOpenScreenSuccess] = useState(false);
  const [openScreenError, setOpenScreenError] = useState(false);
  const [selected, setSelected] = useState<number>(-1);
  const [questionsDone, setQuestionsDone] = useState<{ id: string, answer: number }[]>([]);
  const [indexQuestion, setIndexQuestion] = useState(0)

  const handleNextQuestion = () => {
    setIndexQuestion(questions.length - 1 === indexQuestion ? indexQuestion : indexQuestion + 1)
  }

  const handlePrevQuestion = () => {
    setIndexQuestion(indexQuestion === 0 ? 0 : indexQuestion - 1)
    setSelected(-1)
  }

  const handleDoneQuestion = (id: string, answer: number) => {
    setQuestionsDone((current) => {
      if (current.some((item) => item.id === id)) {
        return current.map((item) => item.id === id ? { id, answer } : item)
      }
      current.push({ id, answer });
      return current;
    });
    const question = questions.find((item) => item.id === id);
    if (question?.answers[answer].correct) {
      setOpenScreenSuccess(true);
    } else {
      setOpenScreenError(true);
    }
    handleNextQuestion();
    setSelected(-1);
  }

  const handleReset = () => {
    window.location.reload();
  }

  const currentQuestion = questions[indexQuestion];
  const countCorrect = questionsDone.filter((item) => {
    const question = questions.find((question) => question.id === item.id);
    return question?.answers[item.answer].correct;
  }).length;

  return (
    <Frame background="bg-gradient-to-r from-cyan-400 to-sky-500">
      {questionsDone.length === questions.length ? (
        <div className="fixed top-0 left-0 w-full h-lvh flex items-center justify-center p-4">
          <div className="flex flex-col items-center gap-8">
            <p className="font-semibold text-5xl text-center">Bạn đã trả lời đúng: {countCorrect}/{questions.length}</p>
            <div><button className="btn btn-primary" onClick={handleReset}>Chơi lại</button></div>
          </div>
        </div>
      ) : (
        <div className="w-full" style={{ maxWidth: "500px" }}>
          <div className="flex flex-col gap-4">
            <h1 className="text-center uppercase text-3xl font-extrabold text-blue-700 pb-8">Music Game</h1>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <button className="flex items-center gap-1" onClick={handlePrevQuestion}><ChevronLeftIcon width={16} /> <span className="text-sm font-semibold">Câu trước</span> </button>
                <span className="text-sm font-semibold">{indexQuestion + 1}/{questions.length}</span>
              </div>
              <progress className="progress w-full" value={indexQuestion + 1} max={questions.length}></progress>
              {currentQuestion && (<Question key={indexQuestion} data={currentQuestion} selected={selected} onSelected={(answer) => handleDoneQuestion(currentQuestion.id, answer)} />)}
            </div>
            <ScreenSuccess open={openScreenSuccess} setOpen={setOpenScreenSuccess} />
            <ScreenError open={openScreenError} setOpen={setOpenScreenError} />
          </div>
        </div>

      )}

    </Frame>
  )
}


