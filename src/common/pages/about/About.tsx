import "./about.css";
import aboutText from "../../../assets/texts/about.json";
import { AboutTexts } from "../../types/AboutTexts";
import { TitleGroup } from "../../components/title-group/TitleGroup";

export const About = () => {
  const texts: AboutTexts = aboutText;
  return (
    <main className="about-app-container default-container col">
      <TitleGroup
        title={texts.general.title}
        subtitle={texts.general.subtitle}
        desc={texts.general.desc}
      />

      <hr />

      <TitleGroup
        title={texts.services.title}
        subtitle={texts.services.subtitle}
        desc={texts.services.desc}
      />

      <hr />

      <TitleGroup
        title={texts.hosters.title}
        subtitle={texts.hosters.subtitle}
        desc={texts.hosters.desc}
      />
    </main>
  );
};
