import Card from "./shared/Card"
import { useState, useContext, useEffect } from 'react'
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState('');
  // Button state
  const [btnDisabled, setBtnDisabled] = useState(true);
  // Error Message
  const [message, setMessage] = useState(''); 
  // Rating state
  const [rating, setRating] = useState(10); //by default: 10

  ///// Contexts
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

  // Call useEffect function
  useEffect(()=>{
    // Whatever is in here runs as the page loads / reloads
    // Whatever is in here will run once if the array below (dependencies array) is empty
    // But if you put something within the dependency array, whenever that object changes or gets a new value, whatever is within this callback function runs (it is called a side effect)
    // This explains why when you click the edit icon, this console log runs because everytime you click on it, feedbackEdit gets a new value
    // console.log('Hello');

    // Check first when you are at edit mode using the boolean value
    if(feedbackEdit.edit === true){
      // If on EDIT MODE
      setBtnDisabled(false); // enable the button send
      setText(feedbackEdit.item.text); // double dots because it is feedbackEdit = {item: {text: whatever, rating: 10}}
      setRating(feedbackEdit.item.rating)
    }

  }, [feedbackEdit]);


  // State Function
  const handleTextChange = (e) => {
    // VALIDATION REAL-TIME
    if(text === '') {
      // if there is no input, button is disabled and there is no message
      setBtnDisabled(true);
      setMessage(null);
    } else if(text !== '' && text.trim().length <= 10) {
      // if input is not null, check if there are less than 10 chars
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters'); // less than 10 chars cant be submitted
    } else {
      // if there are atleast 10 characters and not null (input), enable button and null error msg
      setMessage(null);
      setBtnDisabled(false);
    }
    // Pass the user input to the text state by re-seting setText function
    setText(e.target.value);
  }

  const handleSubmit = (e)=> {
    // Double check to make sure it is 10 characters
    if(text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating
      }

      // check if you want to submit an update or an add
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
        // newFeedback can be passed since basically this is the content of the form at present
      } else {
        // if it is not on EDIT MODE, it is probably on ADD mode
        addFeedback(newFeedback);
      }


      // Clear Text field
      setText('');
    }
    e.preventDefault();
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <RatingSelect select={(rating)=> setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
          {/* Button component */}
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>

        {/* Check if there is a message, if there is then add this block */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm