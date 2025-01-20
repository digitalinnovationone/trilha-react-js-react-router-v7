import SummaryCard from "../../SummaryCard";
import "./styles.css";

const OrdersSummary = () => {
  return (
    <div className="orders-summary">
      <SummaryCard label="Total Revenue" value="$10,243.00" />
      <SummaryCard label="Total Items Ordered" value="23,456" />
      <SummaryCard label="Total Customers" value="1,234" />
    </div>
  );
};

export default OrdersSummary;
