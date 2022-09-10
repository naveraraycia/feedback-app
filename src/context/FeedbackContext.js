import { createContext, useState } from "react";
// import UUID
import {v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

//  Create a provider - this allows the components to get access to the context / state
export const FeedbackProvider = ({children}) => {
  // Will always take in { children } as param

  // declare states
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7
    }
  ])

  // State for edit feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},  // this item is the placeholder for the item we selected that we want to edit
               // the logic is, whatever feedback item edit icon we click, its data shall be placed within this 'item' key
    edit: false     // if we click an edit icon, this value shall be set to true to symbolize edit mode
  })

/////////////////////////////////////////////////////
  // Functions here
  const editFeedback = (itemToEdit) => {
    setFeedbackEdit({
      item: itemToEdit,
      edit: true
    })
  }

  // Update feedback item based on the clicked edit icon from feedback ite
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem} : item)) 
    // updating feedback means re-setting the setFeedback through mapping
    // ...item means all the indices
    // second param ...updItem means the first param will be added or appended with updItem
    // Else statement is just return the item / single index
  }

  ///////////////////////////////////////////

  const deleteFeedback = (idParam) => {
    // Reset the values for setFeedback. Redeclare but remove the data selected upon redeclaration
    if(window.confirm('Are you sure you want to delete this?')){
      setFeedback(feedback.filter((itemIndex)=>
        itemIndex.id !== idParam   // this filter() method only loops through or retains items with id that are not equal to the clicked list item's ID (basically removes the clicked item id)
      )) // whatever we passed in here as param, replaces / overwrites the 'feedback' value from const [feedback, setFeedback]
    }
  }

  ///////////////////////////////////////////

  const addFeedback = (newFeedback) => {
    // Add a key property to the newFeedback Object: id
    newFeedback.id = uuidv4(); // this adds the unique ID
    setFeedback([newFeedback, ...feedback]);
  }


  return <FeedbackContext.Provider value={{
    feedback: feedback,
    feedbackEdit: feedbackEdit,  // state that holds the item u want to edit
    deleteFeedback: deleteFeedback,
    addFeedback: addFeedback, // or just addFeedback
    editFeedback: editFeedback,
    updateFeedback  // or updateFeedback: updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>

}

export default FeedbackContext