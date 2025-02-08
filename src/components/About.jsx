const baseUrl = import.meta.env.BASE_URL;

const About = () => {
  return (
    <div id="about" className="w-full bg-main-light-grey pt-28 pb-28">
      <div className="flex items-center text-main-black max-w-7xl m-auto pb-28">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent mr-3"></div>
        <span className="text-2xl sm:text-3xl">About me</span>
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent ml-3"></div>
      </div>
      <div className="max-w-6xl justify-center items-center m-auto lg:flex">
        <div className="basis-1/2 p-4 sm:p-10">
          <p className="pb-4 md:text-lg">
            Hi, I'm Adir, a junior web developer who loves technology and
            problem-solving. I completed a web development course and am excited
            to start my career, learn new things, and improve my skills. I'm
            looking for a role where I can grow and make an impact.
          </p>
          <p className="pb-8 md:pb-4 md:text-lg">
            I enjoy building user-friendly and efficient web applications, and
            I'm always eager to explore new technologies. My goal is to become a
            better developer every day and contribute to meaningful projects.
          </p>
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <img
            src={`${baseUrl}/assets/images/profile-image.jpeg`}
            alt="profile image"
            className="object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
