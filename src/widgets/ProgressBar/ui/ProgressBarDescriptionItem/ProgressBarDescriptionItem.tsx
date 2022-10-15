import { FC } from "react";
import "./ProgressBarDescriptionItem.scss";

interface ProgressBarDescriptionItemProps {
  className?: string;
  percent: string;
  value: number;
  name: string;
  color: string;
}

const ProgressBarDescriptionItem: FC<ProgressBarDescriptionItemProps> = ({
  className,
  percent,
  value,
  name,
  color,
}) => {
  return (
    <div className="progress-bar-description-item">
      <span style={{ backgroundColor: color }}></span>
      <p className="progress-bar-description-item__value">
        {name}: {value} ({percent}&#37;)
      </p>
    </div>
  );
};

export { ProgressBarDescriptionItem };
