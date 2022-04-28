import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import s from "./CV.module.scss";

function CV() {
  return (
    <Link
      to="./CV_Yevhen_Malyshko.pdf"
      download
      target="_blank"
      className={s.link}
    >
      Download CV
      <FaDownload className={s.icon} />
    </Link>
  );
}
export default CV;
