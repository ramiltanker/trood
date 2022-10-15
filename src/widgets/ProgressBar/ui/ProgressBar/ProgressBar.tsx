import { FC } from "react";
import "./ProgressBar.scss";
import { ProgressBarItem } from "../ProgressBarItem/ProgressBarItem";
import { ProgressBarDescriptionItem } from "../ProgressBarDescriptionItem/ProgressBarDescriptionItem";
import data from "../../../../shared/mocks/progress-bar.json";

interface ProgressBarProps {
  className?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ className }) => {
  const totalValue = data.reduce((prev, curr) => {
    return prev + curr.value;
  }, 0);

  return (
    <div className="progress-bar">
      <div className="progress-bar__items">
        {data.map(({ color, value, name }) => {
          return <ProgressBarItem key={name} color={color} value={value} />;
        })}
      </div>
      <div className="progress-bar__description">
        {data.map(({ value, name, color }) => {
          const percent = (value / totalValue) * 100;
          console.log(percent);
          return (
            <ProgressBarDescriptionItem
              key={name}
              percent={percent.toFixed(2)}
              value={value}
              name={name}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
};

export { ProgressBar };
