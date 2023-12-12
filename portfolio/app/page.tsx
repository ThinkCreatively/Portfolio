import CustomSection from "./customComps/section";
import TextBlurb from "./customComps/textBlurb";
import AboutMe from "./customComps/aboutMe";
import ProjectBlock from "./customComps/projectBlock";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center content-between min-h-screen min-w-full px-6 bg-indigo-950">
        <CustomSection>
          <AboutMe />
        </CustomSection>
        <CustomSection extra="items-center justify-evenly">
          <ProjectBlock />
          <ProjectBlock />
          <ProjectBlock />
          
        </CustomSection>
      </div>
    </main>
  );
}
