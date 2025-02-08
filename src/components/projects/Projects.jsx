import FeaturedItem from "./FeaturedItem";
// import OtherItem from "./OtherItem";

const FeaturedItemList = [
  {
    id: 1,
    name: "Gaming Store - Client",
    description:
      "I built a gaming store second-hand community platform using React.js and Material UI for the client side. It allows users to buy, sell, and trade used games easily with a clean and modern design. The platform creates a smooth and engaging experience for the gaming community.",
    imageSrc: "/assets/images/Screenshot 2025-02-06 162137.png",
    imageAlt: "Gaming Store Image",
    skillsList: ["React.js", "Material UI", "JavaScript"],
    links: [
      {
        url: "https://github.com/AdirDahari/Gaming-Store-Front",
        SVGPath: (
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        ),
      },
      {
        url: "https://adirdahari.github.io/Gaming-Store-Front/",
        SVGPath: (
          <path d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
        ),
      },
    ],
    isltr: true,
  },
  {
    id: 2,
    name: "Gaming Store - Server",
    description:
      "For the backend, I used Node.js, TypeScript, and MongoDB. It manages user accounts, product listings, transactions, and messages securely. With a well-structured API, it ensures fast and reliable performance, making the platform easy to use and efficient.",
    imageSrc: "/assets/images/Screenshot 2025-02-07 113725.png",
    imageAlt: "Rest API Image",
    skillsList: ["Node.js", "MongoDB", "TypeScript"],
    links: [
      {
        url: "https://github.com/AdirDahari/Gaming-Store-Back",
        SVGPath: (
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        ),
      },
    ],
    isltr: false,
  },
  {
    id: 3,
    name: "Board Games",
    description:
      "This project is a collection of interactive board games developed entirely in vanilla JavaScript. It showcases my ability to create dynamic, user-friendly applications without relying on external libraries or frameworks.",
    imageSrc: "/assets/images/Screenshot 2025-02-07 204707.png",
    imageAlt: "Board Games Image",
    skillsList: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        url: "https://github.com/AdirDahari/Advance-Vanilla-JavaScript",
        SVGPath: (
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        ),
      },
      {
        url: "https://adirdahari.github.io/Advance-Vanilla-JavaScript/",
        SVGPath: (
          <path d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
        ),
      },
    ],
    isltr: true,
  },
];

// const OtherItemList = [
//   {
//     id: 1,
//     name: "Project name",
//     description:
//       "Pellentesque in dolor volutpat, laoreet magna a, tristique enim. Praesent eget enim leo.",
//     imageSrc: "imageSrc1",
//     imageAlt: "imageAlt1",
//     skillsList: ["HTML", "CSS", "JavaScript"],
//     link: "/#test",
//     isltr: true,
//     SVGPath: (
//       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//     ),
//   },
//   {
//     id: 2,
//     name: "Project name",
//     description:
//       "Pellentesque in dolor volutpat, laoreet magna a, tristique enim. Praesent eget enim leo.",
//     imageSrc: "imageSrc2",
//     imageAlt: "imageAlt2",
//     skillsList: ["HTML", "CSS", "JavaScript"],
//     link: "/#test",
//     isltr: false,
//     SVGPath: (
//       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//     ),
//   },
//   {
//     id: 3,
//     name: "Project name",
//     description:
//       "Pellentesque in dolor volutpat, laoreet magna a, tristique enim. Praesent eget enim leo.",
//     imageSrc: "imageSrc3",
//     imageAlt: "imageAlt3",
//     skillsList: ["HTML", "CSS", "JavaScript"],
//     link: "/#test",
//     isltr: true,
//     SVGPath: (
//       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//     ),
//   },
//   {
//     id: 4,
//     name: "Project name",
//     description:
//       "Pellentesque in dolor volutpat, laoreet magna a, tristique enim. Praesent eget enim leo.",
//     imageSrc: "imageSrc4",
//     imageAlt: "imageAlt4",
//     skillsList: ["HTML", "CSS", "JavaScript"],
//     link: "/#test",
//     isltr: false,
//     SVGPath: (
//       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//     ),
//   },
// ];

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-main-light-grey">
      <div className="pt-36 pb-36">
        <div className="flex items-center text-main-black max-w-7xl m-auto pb-28">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent mr-3"></div>
          <span className="text-2xl sm:text-3xl">My Projects</span>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent ml-3"></div>
        </div>
        <div className="max-w-6xl m-auto">
          {FeaturedItemList.map((item) => (
            <FeaturedItem
              key={item.id}
              name={item.name}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              skillsList={item.skillsList}
              links={item.links}
              isltr={item.isltr}
            />
          ))}
        </div>
      </div>
      {/* <div className="pb-36">
        <div className="flex items-center text-main-black max-w-7xl m-auto pb-28">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent mr-3"></div>
          <span className="text-2xl sm:text-3xl">Other Projects</span>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent ml-3"></div>
        </div>
        <div className="max-w-6xl m-auto grid grid-cols-1 gap-2 md:grid-cols-2">
          {OtherItemList.map((item) => (
            <OtherItem
              key={item.id}
              name={item.name}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              skillsList={item.skillsList}
              link={item.link}
              SVGPath={item.SVGPath}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};
export default Projects;
