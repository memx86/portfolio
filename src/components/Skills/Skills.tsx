import s from "./Skills.module.scss";

type Props = {
  skills: string[];
};
function Skills({ skills }: Props) {
  return (
    <div>
      <p className={s.subtitle}>My Skills</p>
      <ul className={s.skills}>
        {skills.map((skill) => (
          <li key={skill} className={s.item}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
