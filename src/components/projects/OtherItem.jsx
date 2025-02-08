import Proptypes from "prop-types";
import SVGIcon from "../SVGIcon";

const OtherItem = ({
  imageSrc,
  imageAlt,
  name,
  description,
  skillsList = [],
  link,
  SVGPath,
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex justify-center basis-1/4 p-4 sm:p-2">
        <div className="bg-main-dark-grey min-w-full h-[125px]">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
      <div className="flex justify-center items-center basis-3/4 p-4 sm:p-2">
        <div>
          <div className="sm:h-[125px]">
            <h4 className="text-main-black text-xl sm:text-2xl pb-2">{name}</h4>
            <p className="text-main-black pr-3 pb-3">{description}</p>
          </div>
          <div>
            <div className="border-t border-black pb-2 m-auto"></div>
            <ul className="flex space-x-4 pb-2">
              {skillsList.map((skill) => (
                <li key={skill + name}>{skill}</li>
              ))}
            </ul>
            <SVGIcon link={link} SVGPath={SVGPath} />
          </div>
        </div>
      </div>
    </div>
  );
};

OtherItem.propTypes = {
  imageSrc: Proptypes.string.isRequired,
  imageAlt: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  skillsList: Proptypes.array.isRequired,
  link: Proptypes.string.isRequired,
  SVGPath: Proptypes.element.isRequired,
};

export default OtherItem;
