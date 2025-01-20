import "./styles.css";

const customers = [
  {
    id: 1,
    name: "John Doe",
    totalOrders: 5,
    totalSpent: 500.95,
    lastOrderDate: "2025-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    totalOrders: 3,
    totalSpent: 122.3,
    lastOrderDate: "2023-11-20",
  },
  {
    id: 3,
    name: "Robert Brown",
    totalOrders: 7,
    totalSpent: 755.99,
    lastOrderDate: "2023-12-10",
  },
  {
    id: 4,
    name: "Alice Johnson",
    totalOrders: 2,
    totalSpent: 115.99,
    lastOrderDate: "2023-12-05",
  },
  {
    id: 5,
    name: "Michael Davis",
    totalOrders: 4,
    totalSpent: 1000,
    lastOrderDate: "2023-11-30",
  },
  {
    id: 6,
    name: "Emily Clark",
    totalOrders: 6,
    totalSpent: 890,
    lastOrderDate: "2024-01-10",
  },
  {
    id: 7,
    name: "Daniel Lewis",
    totalOrders: 5,
    totalSpent: 720,
    lastOrderDate: "2024-01-12",
  },
  {
    id: 8,
    name: "Sophia Wilson",
    totalOrders: 8,
    totalSpent: 950,
    lastOrderDate: "2023-12-20",
  },
  {
    id: 9,
    name: "Oliver Martinez",
    totalOrders: 4,
    totalSpent: 480,
    lastOrderDate: "2023-11-25",
  },
  {
    id: 10,
    name: "Isabella Garcia",
    totalOrders: 7,
    totalSpent: 1005,
    lastOrderDate: "2023-12-15",
  },
  {
    id: 11,
    name: "James Harris",
    totalOrders: 3,
    totalSpent: 300,
    lastOrderDate: "2023-12-18",
  },
  {
    id: 12,
    name: "Charlotte Lee",
    totalOrders: 6,
    totalSpent: 700,
    lastOrderDate: "2024-01-05",
  },
  {
    id: 13,
    name: "Lucas Perez",
    totalOrders: 5,
    totalSpent: 650,
    lastOrderDate: "2024-01-08",
  },
  {
    id: 14,
    name: "Amelia Taylor",
    totalOrders: 9,
    totalSpent: 1200,
    lastOrderDate: "2023-12-22",
  },
  {
    id: 15,
    name: "Henry White",
    totalOrders: 3,
    totalSpent: 350,
    lastOrderDate: "2023-11-29",
  },
  {
    id: 16,
    name: "Evelyn Scott",
    totalOrders: 6,
    totalSpent: 820,
    lastOrderDate: "2024-01-02",
  },
  {
    id: 17,
    name: "Benjamin Allen",
    totalOrders: 5,
    totalSpent: 900,
    lastOrderDate: "2023-12-28",
  },
  {
    id: 18,
    name: "Mia Young",
    totalOrders: 4,
    totalSpent: 560,
    lastOrderDate: "2024-01-07",
  },
  {
    id: 19,
    name: "Jack King",
    totalOrders: 2,
    totalSpent: 240,
    lastOrderDate: "2023-12-30",
  },
  {
    id: 20,
    name: "Ava Adams",
    totalOrders: 7,
    totalSpent: 1100,
    lastOrderDate: "2024-01-14",
  },
];

const CustomersReport = () => {
  return (
    <div className="customers-dashboard">
      <h3 className="customers-dashboard__title">Customers Report</h3>
      <table className="customers-dashboard__table">
        <thead className="customers-dashboard__thead">
          <tr className="customers-dashboard__row">
            <th className="customers-dashboard__header">Customer</th>
            <th className="customers-dashboard__header">Total Orders</th>
            <th className="customers-dashboard__header">Total Spent</th>
            <th className="customers-dashboard__header">Last Order Date</th>
          </tr>
        </thead>
        <tbody className="customers-dashboard__tbody">
          {customers.map((customer) => (
            <tr key={customer.id} className="customers-dashboard__row">
              <td className="customers-dashboard__data">{customer.name}</td>
              <td className="customers-dashboard__data">
                {customer.totalOrders}
              </td>
              <td className="customers-dashboard__data">
                ${customer.totalSpent}
              </td>
              <td className="customers-dashboard__data">
                {customer.lastOrderDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersReport;
