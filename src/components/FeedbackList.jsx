// import framer-motion animation library
import {motion, AnimatePresence} from 'framer-motion'

// import feedback item individual component
import FeedbackItem from "./FeedbackItem"

// Import useContext
import {useContext} from 'react'

// Import specific context u want to use
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  // Extract whatever you want from 'FeedbackContext'
  const {feedback} = useContext(FeedbackContext)

  // Check if there is a feedback or none
  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }


  
  ////////////////////// WITH ANIMATION //////////////////////////////////////////////////////
  return (
    <div className="feedback-list">
      <AnimatePresence>
      {/* Loop through the feedback array */}
      {feedback.map((itemIndex)=>(
        <motion.div 
          key={itemIndex.id}
          initial={{opacity: 0}} // fade in opacity: 0 initial val
          animate={{opacity: 1}} // animate to be visible
          exit={{opacity: 0}}  // fade out to be invisible opacity: 0 
        >
          <FeedbackItem key={itemIndex.id} item={itemIndex} />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )

  /////////////////// WITHOUT ANIMATION
  // return (
  //   <div className="feedback-list">
  //     {/* Loop through the feedback array */}
  //     {feedback.map((itemIndex)=>(
  //       <FeedbackItem key={itemIndex.id} item={itemIndex} handleDelete={handleDeleteFromAppJS}/>
  //     ))}
  //   </div>
  // )
}



export default FeedbackList