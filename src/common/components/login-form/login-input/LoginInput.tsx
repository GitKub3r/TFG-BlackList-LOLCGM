import { LoginInputProps } from "../../../types/LoginProps";
import "./login-input.css";

export const LoginInput = ({
  label,
  type,
  name,
  id,
  handleChange,
}: LoginInputProps) => {
  return (
    <div className="login-input-container">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};
