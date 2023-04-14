import React from "react";

const RecommendedBookCard = ({ image, title, description, price }) => {
  return (
    <>
      <div className="flex flex-col">
        <img src={image} alt="images" className="w-[250px]" />

        <h2>{title}</h2>
        <p>{description}</p>

        <h4>{price}</h4>
      </div>
    </>
  );
};

export default RecommendedBookCard;
