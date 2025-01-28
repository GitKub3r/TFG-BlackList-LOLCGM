import { Link } from "react-router";
import { HeaderProps } from "../../types/HeaderProps";
import "./header.css";

export const Header = ({ items }: HeaderProps) => {
  const [firstItem, ...restItems] = items;
  return (
    <header className="main-app-header">
      <div className="header-logo-container">
        <Link to="/">
          <h1 className="header-logo-title">{firstItem.label}</h1>
        </Link>
      </div>

      <nav className="main-app-nav">
        <ul className="main-app-nav-menu">
          {restItems.map((item, index) => (
            <li className="main-app-nav-menu-item" key={index}>
              <Link to={item.src} className="hover-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
