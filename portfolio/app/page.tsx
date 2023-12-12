export default function Home() {
  return (
    <main>
      <div className="flex justify-center content-between min-h-screen min-w-full px-6 bg-indigo-950">
        <div className="flex flex-col relative border-2 overflow-auto justify-center ml-5 min-h-screen max-h-screen items-top w-1/2 self-start border-green-500">
          <div className=" flex flex-wrap relative w-full break-words justify-center p-4">
            This section will start with a intro and my name on top, a picture
            of myself in the middle, then a blurb about myself on top
          </div>
        </div>
        <div className="flex flex-col relative border-2 overflow-auto justify-center ml-5 min-h-screen max-h-screen items-top w-1/2 self-start border-green-500">
          <div className=" flex flex-wrap relative w-full break-words justify-center p-4">
            Let us figure out how to make the items start at the top, for both
            of these sections, this section should have at minimum three
            projects
          </div>
          <div className=" flex flex-wrap relative w-full break-words justify-center p-4">
            Let us not forget that we wont to go for that spotlight effect on
            the cursor, putting a dark filter over everything and lighting up
            what is in the &quot;spotlight&quot;
          </div>
        </div>
      </div>
    </main>
  );
}
