import LoginForm from "../../components/Login";
import "./styles.css";

const LoginPage = () => {
  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      <p>Welcome back! Please enter your credentials.</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

