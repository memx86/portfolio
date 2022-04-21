import { Route, Routes } from "react-router-dom";
import Main from "components/Main";
import Navbar from "components/Navbar";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import PortfolioPage from "pages/PortfolioPage";
import ContactPage from "pages/ContactPage";
import NotFoundPage from "pages/NotFoundPage";
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
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
