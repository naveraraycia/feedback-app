import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

// Set default props
Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false
}

// Check Prop type
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDiabled: PropTypes.bool
}
export default Button