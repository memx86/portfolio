import s from "./IconButton.module.scss";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
  type?: "button" | "submit" | "reset";
};

function IconButton({ children, onClick, type = "button" }: Props) {
  return (
    <button type={type} onClick={onClick} className={s.button}>
      {children}
    </button>
  );
}
export default IconButton;
