import { TitleGroupProps } from "../../types/TitleGroupProps";
import "./title-group.css";

export const TitleGroup = ({
  title = "Title Sample",
  subtitle = "Subtitle Sample",
  desc = "Description Sample",
}: TitleGroupProps) => {
  return (
    <div className="title-group-container">
      <div className="title-container">
        <h1 className="title" dangerouslySetInnerHTML={{ __html: title }}></h1>
        {subtitle && (
          <p
            className="subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></p>
        )}
      </div>

      <div className="desc-container">
        <span
          className="description"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></span>
      </div>
    </div>
  );
};
