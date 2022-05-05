import React, { useState } from "react";
import { Form } from "./Components/Form";

export const App = () => {
  const [reviews, setReviews] = useState();

  const getReviewInfo = (info) => {
    setReviews({ ...reviews, info });
   
  };
  console.log(reviews);

 

  return (
    <div>
      <Form getReviewInfo={getReviewInfo} />
      {/* <ul>{list}</ul> */}
    </div>
  );
};
