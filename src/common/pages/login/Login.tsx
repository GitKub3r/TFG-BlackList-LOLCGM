import { LoginForm } from "../../components/login-form/LoginForm";
import { LoginPageProps } from "../../types/LoginProps";
import "./login.css";

export const Login = ({ handleLogin }: LoginPageProps) => {
  return (
    <div className="login-app-container default-container col">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};
