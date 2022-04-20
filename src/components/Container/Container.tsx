import { Children } from "types/Children";
import s from "./Container.module.scss";


function Container({ children }: Children ) {
  return <div className={s.container}>{children}</div>;
}

export default Container;
