import { FC, useEffect, useRef, useState } from "react";
import "./ProgressBarItem.scss";

interface ProgressBarItemProps {
  className?: string;
  color: string;
  value: number;
}

const ProgressBarItem: FC<ProgressBarItemProps> = ({
  className,
  color,
  value,
}) => {
  const [columnArr, setColumnArr] = useState<number[]>();

  useEffect(() => {
    const columnCount =
      Math.floor(value / 24) === 0 ? 1 : Math.floor(value / 24);
    const arr = new Array(columnCount).fill(0);
    setColumnArr(arr);
  }, []);

  return (
    <div className="progress-bar-item">
      {columnArr?.map((item, index) => {
        return (
          <span
            key={index}
            style={{ borderColor: color, backgroundColor: color }}
          ></span>
        );
      })}
    </div>
  );
};

export { ProgressBarItem };
