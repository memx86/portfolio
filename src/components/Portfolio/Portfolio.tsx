import { Fragment } from "react";
import person from "assets/db/person";
import s from "./Portfolio.module.scss";
import PortfolioItem from "components/PortfolioItem";

function Portfolio() {
  const { projects } = person;
  return (
    <Fragment>
      <h2 className="title">My portfolio</h2>
      <ul className={s.list}>
        {projects.map((project) => (
          <li key={project.url}>
            <PortfolioItem item={project} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default Portfolio;
