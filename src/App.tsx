import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/app.css";
import { Header } from "./common/components/header/Header";
import { Footer } from "./common/components/footer/Footer";
import { Home } from "./common/pages/home/Home";
import { useEffect, useState } from "react";
import { ThemeSwitch } from "./common/components/theme-switch/ThemeSwitch";
import { About } from "./common/pages/about/About";

function App() {
  const unloggedHeaderItems = [
    {
      src: "/",
      label: "BlackList",
    },
    {
      src: "/about",
      label: "About",
    },

    {
      src: "/login",
      label: "Login",
    },
  ];

  const loggedHeaderItems = [
    {
      src: "/",
      label: "BlackList",
    },
    {
      src: "/about",
      label: "About",
    },
    {
      src: "/db",
      label: "Database",
    },

    {
      src: "/profile",
      label: "Profile",
    },
  ];

  const [headerItems, setHeaderItems] = useState(unloggedHeaderItems);

  return (
    <>
      <BrowserRouter>
        <Header items={headerItems} />
        <ThemeSwitch />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/db" element={<h1>Database</h1>} />
          <Route path="/profile" element={<h1>Account</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
