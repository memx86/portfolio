import { NavLink } from "react-router-dom";
import {
  FiMoon,
  FiSun,
  FiHome,
  FiInfo,
  FiFolder,
  FiSend,
} from "react-icons/fi";
import Container from "components/Container";
import IconButton from "components/IconButton";
import THEME from "constants/THEME";
import s from "./Navbar.module.scss";

type Props = {
  theme: "light" | "dark";
  changeTheme: React.MouseEventHandler;
};

function NavBar({ theme, changeTheme }: Props) {
  const style = { width: "25px", height: "25px" };
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <IconButton onClick={changeTheme} label="theme">
            {theme === THEME.LIGHT && <FiMoon style={style} />}
            {theme === THEME.DARK && <FiSun style={style} />}
          </IconButton>
          <nav className={s.nav}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/"
            >
              <FiHome style={style} />
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/about"
            >
              <FiInfo style={style} />
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/portfolio"
            >
              <FiFolder style={style} />
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/contact"
            >
              <FiSend style={style} />
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default NavBar;
