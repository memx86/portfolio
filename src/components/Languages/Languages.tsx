import s from "./Languages.module.scss";

type Language = {
  language: string;
  proficiency: string;
};
type Props = {
  languages: Language[];
};

function Languages({ languages }: Props) {
  return (
    <div>
      <p className={s.subtitle}>Languages</p>
      <ul className={s.list}>
        {languages.map(({ language, proficiency }) => (
          <li key={language}>
            {language} - {proficiency}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Languages;
