import { TitleGroupProps } from "../../types/TitleGroupProps";
import "./title-group.css";

export const TitleGroup = ({
  title = "Title Sample",
  subtitle = "Subtitle Sample",
  desc = "Description Sample",
}: TitleGroupProps) => {
  return (
    <div className="title-group-container">
      <div className="title-group col">
        <div className="title-container">
          <h1 className="title-group-title">{title}</h1>
          {subtitle && <p className="title-group-subtitle">{subtitle}</p>}
        </div>
        <hr />
        <span className="title-group-description">{desc}</span>
      </div>
    </div>
  );
};
