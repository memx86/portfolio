import person from "assets/db/person";
import s from "./Home.module.scss";

function Home() {
  const { name, lastname, images } = person;

  return (
    <div className={s.container}>
      <img src={images.jpg} alt={`${name} ${lastname}`} width="280" />
      <div className={s.content}>
        <p className={s.title}>
          Hi, my name is
          <span className={s.name}>
            {name} {lastname}
          </span>
          . I'm a web developer
        </p>
      </div>
    </div>
  );
}
export default Home;
