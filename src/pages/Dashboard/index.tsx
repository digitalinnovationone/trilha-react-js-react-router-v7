import { Outlet } from "react-router";
import OrdersSummary from "../../components/Dashboard/OrdersSummary";

const DashboardPage = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <div style={{ marginBottom: "1.5rem" }}>
        <OrdersSummary />
      </div>
      <Outlet />
    </>
  );
};

export default DashboardPage;

