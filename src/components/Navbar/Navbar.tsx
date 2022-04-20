import { NavLink } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Container from "components/Container";
import IconButton from "components/IconButton";
import THEME from "constants/THEME";
import s from "./Navbar.module.scss";

type Props = {
  theme: "light" | "dark";
  changeTheme: React.MouseEventHandler;
};

function NavBar({ theme, changeTheme }: Props) {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <IconButton onClick={changeTheme}>
            {theme === THEME.LIGHT && (
              <BsFillMoonFill style={{ width: "25px", height: "25px" }} />
            )}
            {theme === THEME.DARK && (
              <BsFillSunFill style={{ width: "25px", height: "25px" }} />
            )}
          </IconButton>
          <nav className={s.nav}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/contact"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default NavBar;
