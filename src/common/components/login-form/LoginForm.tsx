import { Link } from "react-router";
import "./login-form.css";
import { LoginInput } from "./login-input/LoginInput";
import { LoginButton } from "./login-button/LoginButton";
import { LoginPageProps } from "../../types/LoginProps";

export const LoginForm = ({ handleLogin }: LoginPageProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <form method="POST" className="login-form" onSubmit={handleSubmit}>
      <LoginInput
        label="Username"
        type="text"
        name="login-username"
        id="login-username-input"
        handleChange={handleChange}
      />

      <LoginInput
        label="Password"
        type="password"
        name="login-password"
        id="login-password-input"
        handleChange={handleChange}
      />

      <p>
        Don't have an account? Check our <Link to="/about">about</Link> page.
      </p>

      <LoginButton label="Login" handleClick={handleLogin} />
    </form>
  );
};
