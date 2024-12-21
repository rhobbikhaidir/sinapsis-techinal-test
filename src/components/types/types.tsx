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
  iserrors?: boolean;
  errorsmsg?: string;
  ref?: React.Ref<HTMLInputElement | null>;
  isMandatory?: boolean;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  isLoading?: boolean;
};

export type LoginPartials = {
  username: string;
  token: string;
};

export type TablePartials = {
  page: number;
  per_page: number;
  title?: string;
};

export type dataTableProps = {
  body: string;
  id: number;
  title: string;
  user_id: number;
};

export type TextFieldAreaProps =
  React.InputHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    id: string;
    iserrors?: boolean;
    errorsmsg?: string;
    ref?: React.Ref<HTMLTextAreaElement | null>;
    isMandatory?: boolean;
  };

export type CreateEditPartials = {
  title: string;
  body: string;
  user_id?: number;
  id?: number;
};
