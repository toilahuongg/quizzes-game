export interface AnswerProps {
  content: string;
  checked?: boolean;
  onCheck?: () => void;
}

export const Answer: React.FC<AnswerProps> = ({ content, checked, onCheck }) => {
  return (
    <div className="w-full rounded-lg bg-sky-600 p-4 transition-all cursor-pointer aria-checked:bg-yellow-600" aria-checked={checked} onClick={() => {
      if (onCheck) onCheck();
    }}>
      <p className="text-sm text-white">{content}</p>
    </div>
  )
}