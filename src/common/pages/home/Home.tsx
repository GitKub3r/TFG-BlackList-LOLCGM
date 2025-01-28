import "./home.css";

import { HomeTexts } from "../../types/HomeTexts";
import { ImageGroup } from "../../components/image-group/ImageGroup";

import logoIMG from "../../../assets/images/background-logo.png";
import hosterIMG from "../../../assets/images/aram-background.jpg";

import homeText from "../../../assets/utils/json/home.json";

export const Home = () => {
  const texts: HomeTexts = homeText;

  return (
    <main className="home-app-container default-container col">
      <ImageGroup
        image={logoIMG}
        title={texts.welcome.title}
        subtitle={texts.welcome.subtitle}
        desc={texts.welcome.desc}
        inverted={true}
      />

      <hr />

      <ImageGroup
        image={hosterIMG}
        alt={"league of legends icon"}
        title={texts.hoster.title}
        subtitle={texts.hoster.subtitle}
        desc={texts.hoster.desc}
      />
    </main>
  );
};
