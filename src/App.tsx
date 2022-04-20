import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "views/Home";
import Contact from "views/Contact";
import NotFound from "views/NotFound";
import useLocalStorage from "services/useLocalStorage";
import THEME from "constants/THEME";
import s from "./App.module.scss";

function App() {
  const defaultDark = window.matchMedia(
    `(prefers-color-scheme: ${THEME.DARK})`
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    THEME.KEY,
    defaultDark ? THEME.DARK : THEME.LIGHT
  );
  const changeTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(newTheme);
  };
  return (
    <div data-scheme={theme} className={s.app}>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
