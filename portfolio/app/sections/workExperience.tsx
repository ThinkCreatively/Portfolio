const WorkExperiences = [
  {
    workTitle: "Dish Network",
    timeWorked: "2.5 years",
    projects: [
      {
        title: "Encoder As a Service (ENCAAS)",
        dates: ["06/23", "12/23"],
        desc: "Helped produce a service that encodes video and audio streams",
        feats: [
          "Worked directly with video and audio frames to fix crashing of service when loss of frames occurred",
          "Became the main engineer working with the pipelines to instill consistent deployments in all environments",
          "Conducted thorough testing of video and audio quality from numerous points within multiple micro services",
        ],
        stackTags: ["C++", "Python", "CI/CD", "Sencore", "Sentry"],
      },
      {
        title: "Sling Rewards",
        dates: ["10/22", "06/23"],
        desc: "Constructed a rewards program within Sling utilizing blockchain",
        feats: [
          "Spear headed the project amoung two other devs from the ground up to production",
          "Leveraged smart contracts on a solidity block chain to secure reward transactions",
          "Created a golang backend to maximize speed while ensuring 100% test coverage",
        ],
        stackTags: [
          "Golang",
          "Typescript",
          "Mongo",
          "React",
          "React Native",
          "Solidity",
        ],
      },
      {
        title: "Sling",
        dates: ["06/22", "10/22"],
        desc: "Maintained Sling app by fixing a multitude of bugs to improve the user expierence wihle also building out the mobile side",
        feats: [
          "Planned and built a majority of the mobile app",
          "Smoothed out user experience greatly by fixing a mass amount of bugs",
          "Delivered high-quality, robust code that worked properly on numerous devices",
        ],
        stackTags: [
          "Node",
          "Typescript",
          "Mongo",
          "React",
          "React Native",
          "Redux",
        ],
      },
      {
        title: "OnStream",
        dates: ["09/21", "06/22"],
        desc: "First project at Dish Network, Tasked with building entire hotel streaming service from scratch using Node, Typescript, React, Mongo, and Express.",
        feats: [
          "Was one of the founding devs in charge with creating a large amount of the app and reviewing peers's code",
          "Constructed numerous parts of the service including the On Demand and Weather forecast sections",
          "Used by thousands of users daily at popular hotels",
        ],
        stackTags: [
          "Node",
          "Typescript",
          "Mongo",
          "React",
          "Material UI",
          "Express",
        ],
      },
    ],
  },
];

export default WorkExperiences;
