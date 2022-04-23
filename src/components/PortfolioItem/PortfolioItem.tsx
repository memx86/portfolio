import Picture from "components/Picture";
import { Fragment } from "react";
import s from "./PortfolioItem.module.scss";

type Item = {
  title: string;
  url: string;
  tech: string[];
  image: {
    jpg: string;
    jpg2x: string;
    jpg3x: string;
    webp: string;
    webp2x: string;
    webp3x: string;
  };
};

type Props = {
  item: Item;
};

function PortfolioItem({ item }: Props) {
  const { title, tech, url, image } = item;
  return (
    <Fragment>
      <a
        href={url}
        rel="noreferrer noopener"
        target="_blank"
        aria-label={title}
        className={s.link}
      >
        <Picture image={image} alt={title} />
        <div className={s.wrapper}>
          <p className={s.tech}>{tech.join(", ")}</p>
        </div>
      </a>
    </Fragment>
  );
}
export default PortfolioItem;
