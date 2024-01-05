import React from "react";

interface Review {
  imageUrl: string;
  name: string;
  date: Date;
  review: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <>
      {reviews.map((review, index) => (
        <div key={index} className="border-1 border-solid shadow-md border-gray-100 p-4 m-2">
          <div className="flex gap-4">
            <img
              src={review.imageUrl}
              alt={review.name}
              width={65}
            />
            <div>
              <p className="text-sm">{review.name}</p>
              <p className="text-xs">{review.date.toLocaleDateString()}</p>
            </div>
          </div>
          <p className="pt-3">
            {review.review}
          </p>
        </div>
      ))}
    </>
  );
};

export default Reviews;
