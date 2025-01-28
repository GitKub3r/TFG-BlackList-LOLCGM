import "./styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./common/components/header/Header";
import { Footer } from "./common/components/footer/Footer";
import { Home } from "./common/pages/home/Home";
import { useState } from "react";
import { ThemeSwitch } from "./common/components/theme-switch/ThemeSwitch";
import { About } from "./common/pages/about/About";

import unloggedHeaderItems from "./assets/utils/json/header-unlogged.json";
import loggedHeaderItems from "./assets/utils/json/header-logged.json";
import { Login } from "./common/pages/login/Login";
import { NotFound } from "./common/pages/404/NotFound";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const headerItems = isLogged ? loggedHeaderItems : unloggedHeaderItems;

  const handleLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <>
      <BrowserRouter>
        <Header items={headerItems} />
        <ThemeSwitch />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/database" element={<h1>Database</h1>} />
          <Route path="/profile" element={<h1>Account</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
