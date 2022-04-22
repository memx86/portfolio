import person from "assets/db/person";
import s from "./Home.module.scss";

function Home() {
  const { name, lastname, images, summary } = person;
  console.log("s", s);
  return (
    <div className={s.container}>
      <img
        src={images.jpg}
        alt={`${name} ${lastname}`}
        width="280"
        className={s.img}
      />
      <div className={s.content}>
        <p className={s.title}>
          Hi, my name is
          <span className={s.name}>
            {name} {lastname}
          </span>
          . I'm a web developer.
        </p>
        <p className={s.summary}>{summary}</p>
      </div>
    </div>
  );
}
export default Home;
