import { LoginButtonProps } from "../../../types/LoginProps";

export const LoginButton = ({ label, handleClick }: LoginButtonProps) => {
  return (
    <button type="submit" onClick={handleClick}>
      {label}
    </button>
  );
};
