import React from "react"
import PropTypes from "prop-types"
const scales = {
  small: {
    fontSize: "16px",
  },
  normal: {
    fontSize: "18px",
  },
  big: {
    fontSize: "22px",
  },
}
export const Button = ({ children, scale }) => (
  <button style={scales[scale]}>{children}</button>
)
Button.propTypes = {
  children: PropTypes.node.isRequired,
  scale: PropTypes.oneOf(["small", "normal", "big"]),
}
Button.defaultProps = {
  scale: "normal",
}