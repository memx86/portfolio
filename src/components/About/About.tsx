import person from "assets/db/person";
import ListObj from "components/ListObj";
import s from "./About.module.scss";

function About() {
  const { skills, languages, education, experience } = person;
  return (
    <div className={s.container}>
      <p className={s.title}>About me</p>
      <div className={s.wrapper}>
        <p className={s.subtitle}>My Skills</p>
        <ul className={s.skills}>
          {skills.map((skill) => (
            <li key={skill} className={s.item}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={s.wrapper}>
        <p className={s.subtitle}>Languages</p>
        <ul className={s.list}>
          {languages.map(({ language, proficiency }) => (
            <li key={language}>
              {language} - {proficiency}
            </li>
          ))}
        </ul>
      </div>
      <div className={s.wrapper}>
        <p className={s.subtitle}>Education</p>
        <ListObj obj={education} />
      </div>
      <div className={s.wrapper}>
        <p className={s.subtitle}>Work experience</p>
        {[...experience].reverse().map((item) => (
          <ListObj obj={item} key={item.company} />
        ))}
      </div>
    </div>
  );
}
export default About;
