import Item from "./Item";

const itemList = [
  {
    id: 1,
    title: "Web Development Course",
    compeny: "HackerU",
    date: "2023 - 2024",
    dots: [
      "535 hours of intensive, hands-on learning covering essential web technologies.",
      "Practical projects designed to be relevant, up-to-date, and aligned with industry standards.",
      "Valuable tools and techniques for continuous learning and self-improvement as a developer.",
    ],
  },
  {
    id: 2,
    title: "Next.js Course",
    compeny: "Udemy",
    date: "2024",
    dots: [
      "Seamless integration of server-side and client-side development.",
      "Comprehensive training covering architecture, routing, and best practices.",
      "Essential tools for building modern and efficient web applications.",
    ],
  },
];

const Education = () => {
  return (
    <div id="education" className="w-full pt-36 pb-36">
      <div className="flex items-center text-main-black max-w-7xl m-auto pb-28">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent mr-3"></div>
        <span className="text-2xl sm:text-3xl">Education</span>
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-main-dark-grey to-transparent ml-3"></div>
      </div>
      <div className="max-w-6xl m-auto">
        {itemList.map((item) => (
          <div className="p-4" key={item.id}>
            <Item
              title={item.title}
              compeny={item.compeny}
              date={item.date}
              dots={item.dots}
              ltr={item.id % 2 != 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Education;
