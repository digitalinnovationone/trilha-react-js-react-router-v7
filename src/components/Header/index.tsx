import "./styles.css";

const PageTitle = () => {
  return (
    <div className="header-title">
      <h1 className="header-title__title">Point of Sale (POS)</h1>
      <p className="header-title__date">
        {new Date().toLocaleString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
    </div>
  );
};

export default PageTitle;
