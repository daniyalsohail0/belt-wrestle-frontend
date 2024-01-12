import React from "react";

interface Review {
  imageUrl: string;
  name: string;
  date: Date;
  review: string;
}

const Reviews: React.FC<Review> = ({ imageUrl, name, date, review }) => {
  return (
    <div className="border-1 border-solid shadow-md border-gray-100 p-4 m-2">
      <div className="flex gap-4">
        <img src={imageUrl} alt={name} width={65} />
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-xs">{date.toLocaleDateString()}</p>
        </div>
      </div>
      <p className="pt-3">{review}</p>
    </div>
  );
};

export default Reviews;
