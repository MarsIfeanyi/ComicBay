import React from "react";

const ReleasedComicsCard = ({ image, title, description, price }) => {
  return (
    <>
      <div className="flex flex-col mt-32  ">
        <img src={image} alt="images" className="w-[200px] h-[300px]" />

        <h2 className="mt-5 text-lg font-medium">{title}</h2>
        <p className="mt-1">{description}</p>

        <h4 className="text-red-600 mt-2 ">{price}</h4>
      </div>
    </>
  );
};

export default ReleasedComicsCard;
