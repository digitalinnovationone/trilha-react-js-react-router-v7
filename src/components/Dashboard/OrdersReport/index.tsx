import "./styles.css";

const orders = [
  {
    id: 1,
    customer: "John Doe",
    status: "pending",
    product: { name: "Fjallraven - Foldsack No. 1 Backpack", price: 109.95 },
  },
  {
    id: 2,
    customer: "Jane Smith",
    status: "completed",
    product: { name: "Mens Casual Premium Slim Fit T-Shirts", price: 22.3 },
  },
  {
    id: 3,
    customer: "Robert Brown",
    status: "completed",
    product: { name: "Mens Cotton Jacket", price: 55.99 },
  },
  {
    id: 4,
    customer: "Alice Johnson",
    status: "pending",
    product: { name: "Mens Casual Slim Fit", price: 15.99 },
  },
  {
    id: 5,
    customer: "Michael Davis",
    status: "preparing",
    product: {
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon",
      price: 695,
    },
  },
  {
    id: 6,
    customer: "Emma Wilson",
    status: "completed",
    product: { name: "Solid Gold Petite Micropave", price: 168 },
  },
  {
    id: 7,
    customer: "Lucas Moore",
    status: "pending",
    product: { name: "White Gold Plated Princess", price: 9.99 },
  },
  {
    id: 8,
    customer: "Olivia Taylor",
    status: "preparing",
    product: {
      name: "Pierced Owl Rose Gold Plated Stainless Steel",
      price: 10.99,
    },
  },
  {
    id: 9,
    customer: "James Anderson",
    status: "completed",
    product: {
      name: "WD 2TB Elements Portable External Hard Drive",
      price: 64,
    },
  },
  {
    id: 10,
    customer: "Sophia Thomas",
    status: "pending",
    product: { name: "SanDisk SSD PLUS 1TB Internal SSD", price: 109 },
  },
  {
    id: 11,
    customer: "Mason Jackson",
    status: "preparing",
    product: { name: "Silicon Power 256GB SSD 3D NAND", price: 109 },
  },
  {
    id: 12,
    customer: "Isabella White",
    status: "completed",
    product: { name: "WD 4TB Gaming Drive", price: 114 },
  },
  {
    id: 13,
    customer: "Ethan Harris",
    status: "pending",
    product: {
      name: "Acer SB220Q 21.5 inches Full HD IPS Ultra-Thin",
      price: 599,
    },
  },
  {
    id: 14,
    customer: "Amelia Clark",
    status: "preparing",
    product: { name: "Samsung 49-Inch Curved Gaming Monitor", price: 999.99 },
  },
  {
    id: 15,
    customer: "Liam Lewis",
    status: "completed",
    product: {
      name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
      price: 56.99,
    },
  },
];

const OrdersReport = () => {
  return (
    <div className="orders-dashboard">
      <h3 className="orders-dashboard__title">Order Report</h3>
      <table className="orders-dashboard__table">
        <thead className="orders-dashboard__thead">
          <tr className="orders-dashboard__row">
            <th className="orders-dashboard__header">Client</th>
            <th className="orders-dashboard__header">Product</th>
            <th className="orders-dashboard__header">Price</th>
            <th className="orders-dashboard__header">Status</th>
          </tr>
        </thead>
        <tbody className="orders-dashboard__tbody">
          {orders.map((order) => (
            <tr key={order.id} className="orders-dashboard__row">
              <td className="orders-dashboard__data">{order.customer}</td>
              <td className="orders-dashboard__data">{order.product.name}</td>
              <td className="orders-dashboard__data">${order.product.price}</td>
              <td className="orders-dashboard__data">
                <span
                  className={`orders-dashboard__status orders-dashboard__status--${order.status}`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersReport;
