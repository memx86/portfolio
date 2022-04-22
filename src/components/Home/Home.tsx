import person from "assets/db/person";
import s from "./Home.module.scss";

function Home() {
  const { name, lastname, photo, summary } = person;
  const {
    jpgS,
    jpgS2x,
    jpgS3x,
    jpgL,
    jpgL2x,
    jpgL3x,
    webpS,
    webpS2x,
    webpS3x,
    webpL,
    webpL2x,
    webpL3x,
  } = photo;
  return (
    <div className={s.container}>
      <picture>
        <source
          srcSet={`${webpS} 1x, ${webpS2x} 2x, ${webpS3x} 3x`}
          type="image/webp"
          media="(max-width:767px)"
        />
        <source
          srcSet={`${jpgS} 1x, ${jpgS2x} 2x, ${jpgS3x} 3x`}
          type="image/jpeg"
          media="(max-width:767px)"
        />
        <source
          srcSet={`${webpL} 1x, ${webpL2x} 2x, ${webpL3x} 3x`}
          type="image/webp"
          media="(min-width:768px)"
        />
        <source
          srcSet={`${jpgL} 1x, ${jpgL2x} 2x, ${jpgL3x} 3x`}
          type="image/jpeg"
          media="(min-width:768px)"
        />
        <img
          src={jpgS}
          alt={`${name} ${lastname}`}
          width="280"
          className={s.img}
        />
      </picture>
      <div className={s.content}>
        <p className={s.title}>
          <span className={s.block}> Hi, my name is</span>
          <span className={s.name}>
            {name} {lastname}.
          </span>
          <span className={s.block}>I'm a web developer.</span>
        </p>
        <p className={s.summary}>{summary}</p>
      </div>
    </div>
  );
}
export default Home;
