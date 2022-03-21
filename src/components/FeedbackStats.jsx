import React, { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";
const FeedbackStats = () => {
  
  const { feedback } = useContext(FeedbackContext);
  //Calculate ratings avg

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Rewiews</h4>
      <h4>Avarage Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
