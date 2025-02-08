import Proptypes from "prop-types";
import SVGIcon from "../SVGIcon";
import ImageModal from "./ImageModel";
import { useState } from "react";

const FeaturedItem = ({
  isltr,
  imageSrc,
  imageAlt,
  name,
  description,
  skillsList = [],
  links,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          isltr
            ? "flex flex-col md:flex-row"
            : "flex flex-col md:flex-row-reverse"
        }`}
      >
        <div className="flex justify-center items-center basis-1/2 p-4 sm:p-8">
          <div
            className="min-w-full min-h-[250px] cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="hover:opacity-90 transition-opacity duration-200"
            />
          </div>
        </div>
        <div className="flex justify-center items-center basis-1/2 p-4 pb-20 sm:p-8 sm:pb-0">
          <div>
            <h4 className="text-main-black text-xl sm:text-2xl pb-3">{name}</h4>
            <p className="text-main-black pr-3 pb-3">{description}</p>
            <div className="border-t border-black pb-2 m-auto"></div>
            <ul className="flex space-x-4 pb-2">
              {skillsList.map((skill) => (
                <li key={skill + name}>{skill}</li>
              ))}
            </ul>
            <div className="flex space-x-3">
              {links.map((link) => (
                <SVGIcon
                  link={link.url}
                  SVGPath={link.SVGPath}
                  key={link.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
    </>
  );
};

FeaturedItem.propTypes = {
  isltr: Proptypes.bool.isRequired,
  imageSrc: Proptypes.string.isRequired,
  imageAlt: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  skillsList: Proptypes.array.isRequired,
  links: Proptypes.array.isRequired,
};

export default FeaturedItem;
