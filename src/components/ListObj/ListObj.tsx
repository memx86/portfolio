import s from "./ListObj.module.scss";

type Props = {
  obj: {
    [key: string]: string;
  };
};

function ListObj({ obj }: Props) {
  const keys = Object.keys(obj);

  return (
    <ul className={s.list}>
      {keys.map((key) => (
        <li key={key} className={s.item}>
          <span className={s.key}>{key} : </span>
          <span>{obj[key as keyof typeof obj]}</span>
        </li>
      ))}
    </ul>
  );
}
export default ListObj;
