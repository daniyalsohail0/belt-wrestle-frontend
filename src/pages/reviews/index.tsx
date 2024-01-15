import React from "react";
import Layout from "../../layout";
import ReviewForm from "../../component/pages/ReviewForm/ReviewForm";
import reviewsdata from "../../utils/reviewsData";
import Reviews from '../../component/pages/Reviews/Reviews'

const ReviewsPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center">Reviews</h1>
        <div className="p-4">
          <p className="text-sm text-gray-500">
            Read reviews from our esteemed customers. Your reviews help us grow
            our business and serve more people just like you. Feel free to post
            a review!
          </p>
          <ReviewForm />
        </div>
        <div className="w-3/4 grid md:grid-cols-3 gap-4 grid-cols-1 my-4">
          {reviewsdata.map((review, index) => (
            <Reviews
              key={index}
              imageUrl={review.imageUrl}
              name={review.name}
              date={review.date}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ReviewsPage;
