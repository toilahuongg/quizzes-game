import { QuestionEntity } from "../../../domain/entities/question.entity";
import { Answer } from "../Answer";
import { Audio } from "../Audio";
import { Box } from "../Box";

export interface QuestionProps {
  data: QuestionEntity.Question;
  selected: number;
  onSelected: (selected: number) => void;
}

export const Question: React.FC<QuestionProps> = ({ data, selected, onSelected }) => {
  return (
    <div className="w-full">
      <Box padding={4} background="bg-slate-100">
        <p className="font-semibold">{data.title}</p>
        <Audio source={data.audio} />
      </Box>
      <div className="mt-4 select-none">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
          {data.answers.map((answer, index) => (
            <Answer key={index} content={answer.content} checked={selected === index} onCheck={() => onSelected(index)} />
          ))
          }
        </div>
      </div>
    </div>
  );
}