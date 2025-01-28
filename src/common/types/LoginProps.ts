export interface LoginPageProps {
  handleLogin: () => void;
}

export interface LoginInputProps {
  label: string;
  type: "text" | "password";
  name: string;
  id: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LoginButtonProps {
  label: String;
  handleClick: () => void;
}
