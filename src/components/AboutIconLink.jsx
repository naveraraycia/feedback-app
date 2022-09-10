import {FaQuestion} from 'react-icons/fa'
// Import link so that there is no need to refresh when u move through pages
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
      <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink