import CustomSection from "./customComps/section";
import TextBlurb from "./customComps/textBlurb";
import AboutMe from "./customComps/aboutMe";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center content-between min-h-screen min-w-full px-6 bg-indigo-950">
        <CustomSection>
          <AboutMe />
        </CustomSection>
        <CustomSection>
          <TextBlurb>
            Let us figure out how to make the items start at the top, for both
            of these sections, this section should have at minimum three
            projects
          </TextBlurb>
          <TextBlurb>
            Let us not forget that we wont to go for that spotlight effect on
            the cursor, putting a dark filter over everything and lighting up
            what is in the &quot;spotlight&quot;
          </TextBlurb>
        </CustomSection>
      </div>
    </main>
  );
}
