import { FC } from "react";
import "./styles.css";

type Props = {
  value: string;
  label: string;
};

const SummaryCard: FC<Props> = ({ value, label }) => {
  return (
    <div className="summary-card">
      <p className="summary-card__value">{value}</p>
      <p className="summary-card__label">{label}</p>
    </div>
  );
};

export default SummaryCard;
