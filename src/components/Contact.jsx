import ContactButton from "./ContactButton";
import SVGIcon from "./SVGIcon";

const linkList = [
  {
    id: 1,
    link: "https://github.com/AdirDahari/",
    SVGPath: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/adir-dahari/",
    SVGPath: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        <rect x="2" y="9" width="4" height="12" />{" "}
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

const Contact = () => {
  return (
    <div id="contact" className="w-full pt-36">
      <div className="flex items-center text-main-black max-w-7xl m-auto pb-18">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent mr-3"></div>
        <span className="text-2xl sm:text-3xl">Contact</span>
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent ml-3"></div>
      </div>
      <div className="flex justify-center sm:w-md m-auto">
        <div>
          <p className="text-center p-4 mb-4">
            I am currently seeking employment, and I would appreciate it if you
            could contact me with any available job opportunities.
          </p>
          <div className="m-auto w-fit">
            <ContactButton />
          </div>
          <div className="flex space-x-4 justify-center mt-20 ">
            {linkList.map((item) => (
              <SVGIcon key={item.id} SVGPath={item.SVGPath} link={item.link} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <p className="text-main-black text-center">Adir10500@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
