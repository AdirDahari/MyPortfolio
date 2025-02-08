import Proptypes from "prop-types";

const Item = ({ title, compeny, date, dots, ltr }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        ltr ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="p-6 md:basis-1/3 flex items-center justify-center">
        <div>
          <h3 className="text-xl md:text-2xl text-center p-1">{title}</h3>
          <p className="text-lg text-center pb-2">{compeny}</p>
          <div className="border-t border-black pb-2"></div>
          <p className="text-center">{date}</p>
        </div>
      </div>
      <div className="hidden md:inline-block min-h-[1em] w-0.25 self-stretch bg-main-black"></div>
      <div className="md:hidden border-t border-black w-full"></div>
      <div className="sm:p-6 md:basis-2/3">
        <ul className="w-full list-disc list-outside space-x-1 space-y-2 p-4">
          {dots.map((dot, index) => (
            <li key={index}>{dot}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Item.propTypes = {
  title: Proptypes.string.isRequired,
  compeny: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  dots: Proptypes.array.isRequired,
  ltr: Proptypes.bool.isRequired,
};

export default Item;
