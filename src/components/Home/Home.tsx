import Picture from "components/Picture";
import person from "assets/db/person";
import s from "./Home.module.scss";
import CV from "components/CV";

function Home() {
  const { name, lastname, photo, summary } = person;
  const fullName = `${name} ${lastname}`;
  return (
    <div className={s.container}>
      <Picture image={photo} alt={fullName} className={s.img} />
      <div className={s.content}>
        <p className={s.title}>
          <span className={s.block}> Hi, my name is</span>
          <span className={s.name}>{fullName}.</span>
          <span className={s.block}>I'm a web developer.</span>
        </p>
        <p className={s.summary}>{summary}</p>
        <CV />
      </div>
    </div>
  );
}
export default Home;
