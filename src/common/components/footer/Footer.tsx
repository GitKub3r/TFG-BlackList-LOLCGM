import { Link } from "react-router";
import "./footer.css";

export const Footer = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();

  return (
    <footer className="main-app-footer">
      <div className="main-app-footer-copyright-section">
        <h1 className="footer-copyright">&copy; {year} Pyky</h1>
      </div>

      <div className="main-app-footer-contact-section">
        <div className="footer-contact-container">
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <p>Email: blacklistlolcgm@gmail.com</p>
            </li>
            <li className="footer-contact-list">
              <p>
                Contact us directly <Link to="/contact">here</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
