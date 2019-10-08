// src/gatsby-theme-dox/components/Logo.js
import { Link } from 'gatsby'
import React from 'react'
import logo_image from "../../static/logo.svg"

function Logo(props) {
  return <Link to='/' title='Home'><img src={logo_image} alt="homepage" {...props} /> </Link>
}
export default Logo