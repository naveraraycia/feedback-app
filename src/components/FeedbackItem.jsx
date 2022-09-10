// import Card component
import Card from "./shared/Card"
// import PropTypes check
import PropTypes from 'prop-types'
// import useContext and specific context file u want
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

// Import React Icons
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback}= useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='purple' />
      </button>
      <button onClick={()=> editFeedback(item)} className="edit">
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

// PropType checking
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem