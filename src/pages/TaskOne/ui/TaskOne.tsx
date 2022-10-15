import { FC } from "react";
import "./TaskOne.scss";
import { ProgressBar } from "../../../widgets/ProgressBar/index";

interface TaskOneProps {}

const TaskOne: FC<TaskOneProps> = () => {
  return (
    <div className="task-one">
      <ProgressBar />
    </div>
  );
};

export { TaskOne };
