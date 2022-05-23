import { Children } from "types/Children";

import s from "./Section.module.scss";

function Section({ children }: Children) {
  return <section className={s.section}>{children}</section>;
}

export default Section;
