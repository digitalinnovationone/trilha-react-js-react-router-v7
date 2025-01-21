import { FormEvent, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Wrong credentials. Failed to login");
      }

      const data = await res.json();
      navigate("/");
      console.log("User Token:", data.token);
    } catch (err) {
      alert("Error to sign in");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        required
        className="login-form__input"
        type="text"
        name="username"
        placeholder="Username"
        disabled={loading}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        required
        className="login-form__input"
        type="password"
        name="email"
        placeholder="Password"
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-form__button" type="submit" disabled={loading}>
        {!loading ? "Login" : "Please wait..."}
      </button>
    </form>
  );
};

export default LoginForm;

