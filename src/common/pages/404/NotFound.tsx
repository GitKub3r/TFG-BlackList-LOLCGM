import "./not-found.css";
import image from "../../../assets/images/not-found.webp";

export const NotFound = () => {
  return (
    <main className="not-found-app-container default-container col">
      <div className="message-container">
        <div className="message">
          <h1>404</h1>
          <p>
            This page is <i className="important">Blacklisted</i>
          </p>
        </div>
        <img src={image} alt="Not Found Image" />
      </div>
    </main>
  );
};
