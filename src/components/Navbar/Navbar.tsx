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
import iconStyleSmall from "styles/iconStyleSmall";
import s from "./Navbar.module.scss";

type Props = {
  theme: string;
  changeTheme: React.MouseEventHandler;
};
type isActive = {
  isActive: boolean;
};

const chooseClassName = ({ isActive }: isActive) =>
  isActive ? s.active : s.link;

function NavBar({ theme, changeTheme }: Props) {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <IconButton onClick={changeTheme} label="theme">
            {theme === THEME.LIGHT && <FiMoon style={iconStyleSmall} />}
            {theme === THEME.DARK && <FiSun style={iconStyleSmall} />}
          </IconButton>
          <nav className={s.nav}>
            <NavLink className={chooseClassName} to="/">
              <FiHome style={iconStyleSmall} />
            </NavLink>
            <NavLink className={chooseClassName} to="/about">
              <FiInfo style={iconStyleSmall} />
            </NavLink>
            <NavLink className={chooseClassName} to="/portfolio">
              <FiFolder style={iconStyleSmall} />
            </NavLink>
            <NavLink className={chooseClassName} to="/contact">
              <FiSend style={iconStyleSmall} />
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default NavBar;
