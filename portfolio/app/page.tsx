import CustomSection from "./customComps/section";
import TextBlurb from "./customComps/textBlurb";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center content-between min-h-screen min-w-full px-6 bg-indigo-950">
        <CustomSection>
          <TextBlurb>
            This section will start with an intro and my name on top, a picture
            of myself in the middle, then a blurb about myself on top
          </TextBlurb>
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
