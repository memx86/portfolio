import person from "assets/db/person";
import Skills from "components/Skills";
import Languages from "components/Languages";
import ListObj from "components/ListObj";
import s from "./About.module.scss";

function About() {
  const { skills, languages, education, experience } = person;
  return (
    <div className={s.container}>
      <p className={s.title}>About me</p>
      <div className={s.wrapper}>
        <Skills skills={skills} />
      </div>
      <div className={s.wrapper}>
        <Languages languages={languages} />
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
