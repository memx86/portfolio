import { Fragment } from "react";

import person from "assets/db/person";

import PortfolioItem from "components/PortfolioItem";

import s from "./Portfolio.module.scss";

function Portfolio() {
  const { projects } = person;
  return (
    <Fragment>
      <h2 className="title">My portfolio</h2>
      <ul className={s.list}>
        {projects.map((project) => (
          <PortfolioItem key={project.url} item={project} />
        ))}
      </ul>
    </Fragment>
  );
}
export default Portfolio;
