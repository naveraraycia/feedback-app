
// import useContext and the main context file you want
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
   // Extract whatever you want from 'FeedbackContext'
   const {feedback} = useContext(FeedbackContext)

  /////////////////////////////////////////////////////////////////////

  // Calculate Average for Rating
  let average = feedback.reduce((acc, curVal)=>{
    // feedback.reduce() adds all the rating values together
    return acc + curVal.rating;
  }, 0) / feedback.length;

  // Set the decimal point for the average
  average = average.toFixed(1).replace(/[.,]0$/, '');
  
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats