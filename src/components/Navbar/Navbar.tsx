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
  const iconStyle = { width: "25px", height: "25px" };
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <IconButton onClick={changeTheme} label="theme">
            {theme === THEME.LIGHT && <FiMoon style={iconStyle} />}
            {theme === THEME.DARK && <FiSun style={iconStyle} />}
          </IconButton>
          <nav className={s.nav}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/"
            >
              <FiHome style={iconStyle} />
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/about"
            >
              <FiInfo style={iconStyle} />
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/portfolio"
            >
              <FiFolder style={iconStyle} />
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/contact"
            >
              <FiSend style={iconStyle} />
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default NavBar;
