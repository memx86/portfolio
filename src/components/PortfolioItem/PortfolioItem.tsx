import { FaRegPlayCircle, FaGithub } from "react-icons/fa";

import iconStyle from "styles/iconStyle";

import Picture from "components/Picture";

import s from "./PortfolioItem.module.scss";

type Item = {
  title: string;
  source: string;
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
  const { title, tech, url, source, image } = item;
  return (
    <li className={s.item}>
      <Picture image={image} alt={title} className={s.img} />
      <div className={s.wrapper}>
        <p className={s.tech}>Title: {title}</p>
        <p className={s.tech}>Tech: {tech.join(", ")}</p>
        <div className={s.icons}>
          <a
            href={url}
            rel="noreferrer noopener"
            target="_blank"
            aria-label={title}
            className={s.link}
          >
            <FaRegPlayCircle style={iconStyle} />
          </a>
          <a
            href={source}
            rel="noreferrer noopener"
            target="_blank"
            aria-label="Github"
            className={s.link}
          >
            <FaGithub style={iconStyle} />
          </a>
        </div>
      </div>
    </li>
  );
}
export default PortfolioItem;
