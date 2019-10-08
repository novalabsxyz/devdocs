// src/gatsby-theme-dox/components/Logo.js
import { Link } from 'gatsby'
import React from 'react'
function Logo(props) {
  return <Link to='/' title='Home'><img src="/static/logo.svg" alt="homepage" {...props} /> </Link>
}
export default Logo