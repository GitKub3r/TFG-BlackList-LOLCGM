import "./home.css";

import { TitleGroup } from "../../components/title-group/TitleGroup";
import { HomeTexts } from "../../types/HomeTexts";
import homeText from "../../../assets/texts/home.json";
import { ImageGroup } from "../../components/image-group/ImageGroup";

import image1 from "../../../assets/images/lol.webp";

export const Home = () => {
  const texts: HomeTexts = homeText;

  return (
    <main className="home-app-container default-container col">
      <TitleGroup
        title={texts.welcome.title}
        subtitle={texts.welcome.subtitle}
        desc={texts.welcome.desc}
      />

      <hr />

      <ImageGroup
        image={image1}
        alt={"league of legends icon"}
        title={texts.hoster.title}
        subtitle={texts.hoster.subtitle}
        desc={texts.hoster.desc}
      />
    </main>
  );
};
