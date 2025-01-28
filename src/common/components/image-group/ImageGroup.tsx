import { ImageGroupProps } from "../../types/ImageGroupProps";
import "./image-group.css";

export const ImageGroup = ({
  image,
  alt,
  title,
  subtitle,
  desc,
}: ImageGroupProps) => {
  return (
    <div className="image-group-container">
      <div className="image-container">
        <img src={image} alt={alt} />
      </div>
      <div className="text-container">
        <h1 className="title" dangerouslySetInnerHTML={{ __html: title }}></h1>
        {subtitle && (
          <p
            className="subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></p>
        )}
        <div className="desc-container">
          <span
            className="description"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></span>
        </div>
      </div>
    </div>
  );
};
