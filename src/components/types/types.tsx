export type Children = {
  children?: React.ReactNode;
};

export type IconProps = {
  color?: string;
  size?: string | number;
  icon: string;
  className?: string;
};

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  prefixIcon?: string;
  suffixIcon?: string;
  id: string;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &  {
  title: string;
  isLoading?: boolean
}