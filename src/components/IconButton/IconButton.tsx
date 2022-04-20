import s from "./IconButton.module.scss";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
  type?: "button" | "submit" | "reset";
  label: string;
};

function IconButton({ children, onClick, type = "button", label }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={label}
      className={s.button}
    >
      {children}
    </button>
  );
}
export default IconButton;
