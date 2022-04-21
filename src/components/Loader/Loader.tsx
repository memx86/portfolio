import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={s.loader}>
      <ThreeDots color="#ff6b08" height={80} width={80} />
    </div>
  );
}
