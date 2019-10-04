// src/gatsby-theme-dox/components/Logo.js
import { Link } from 'gatsby'
import React from 'react'
function Logo(props) {
  return <Link to='/' title='Home'><img src="https://meeting.market/wp-content/uploads/2019/05/companiesHeliumlogo.png" alt="homepage" {...props} /> </Link>
}
export default Logo