import { Fragment } from "react";

import person from "assets/db/person";

import Skills from "components/Skills";
import Languages from "components/Languages";
import ListObj from "components/ListObj";

import s from "./About.module.scss";

function About() {
  const { skills, languages, education, experience } = person;
  return (
    <Fragment>
      <h2 className="title">About me</h2>
      <div className={s.skills}>
        <Skills skills={skills} />
        <Languages languages={languages} />
      </div>
      <div className={s.wrapper}>
        <p className="subtitle">Education</p>
        <ListObj obj={education} />
      </div>
      <div className={s.wrapper}>
        <p className="subtitle">Work experience</p>
        {[...experience].reverse().map((item) => (
          <ListObj obj={item} key={item.company} />
        ))}
      </div>
    </Fragment>
  );
}
export default About;
