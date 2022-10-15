import { FC } from "react";
import "./TaskTwo.scss";
import { Table } from "../../../widgets/Table/index";

interface TaskTwoProps {}

const TaskTwo: FC<TaskTwoProps> = () => {
  return (
    <div className="task-one">
      <Table />
    </div>
  );
};

export { TaskTwo };
