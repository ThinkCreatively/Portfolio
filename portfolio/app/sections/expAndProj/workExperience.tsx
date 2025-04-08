const WorkExperiences = [
  {
    workTitle: "Metwork",
    timeWorked: "9 Months",
    projects: [
      {
        title: "Interactions and Administration (IA)",
        dates: ["08/24", "05/25"],
        desc: "Aided in rebuilding the legacy application given to us from a contracting company and then was one of the main engineers tasked with building out a new version of the Metwork app.",
        feats: [
          "Spearheaded the refactor of critical Metwork App modules, including the “Referrals” feature, leveraging Vue 3 and TypeScript to align UI with Figma designs and ensure accurate functionality in collaboration with QA",
          "Architected and maintained AWS deployment pipelines, automating delivery to S3 buckets and updating serverless functions for streamlined CI/CD processes",
          "Formulated secure, SOC 2-compliant AWS Lambda functions in Golang, interfacing with custom-built DynamoDB databases to ensure robust and compliant data handling"
        ],
        stackTags: [
          "Typescript",
          "Golang",
          "Node",
          "React",
          "Vue",
          "AWS Services",
        ],
      }
    ]
  },
  {
    workTitle: "Dish Network",
    timeWorked: "3 years",
    projects: [
      {
        title: "Encoder As a Service (ENCAAS)",
        dates: ["06/23", "01/24"],
        desc: "Helped produce a service that encodes video and audio streams",
        feats: [
          "Worked directly with video and audio frames to fix crashing of service when loss of frames occurred",
          "Became the main engineer working with the pipelines to instill consistent deployments in all environments",
          "Conducted thorough testing of video and audio quality from numerous points within multiple micro services",
        ],
        stackTags: ["C++", "Python", "CI/CD", "Sencore", "Sentry"],
      },
      {
        title: "Sling Tv Rewards",
        dates: ["10/22", "06/23"],
        desc: "Constructed a rewards program within Sling utilizing blockchain",
        feats: [
          "Worked closely in the project among two other devs from the ground up to production",
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
        title: "Sling Tv",
        dates: ["06/22", "10/22"],
        desc: "Maintained Sling app by fixing a multitude of bugs to improve the user experience while also building out the mobile side",
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
        title: "Dish OnStream",
        dates: ["09/21", "06/22"],
        desc: "First project at Dish Network, Tasked with building entire hotel streaming service from scratch using Node, Typescript, React, Mongo, and Express.",
        feats: [
          "Was one of the founding devs in charge with creating a large amount of the app and reviewing peer's code",
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
