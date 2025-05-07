import React from 'react'
import { Link } from 'react-router-dom'
const UnAuthPage = () => {
  return (
    <div>
      <h2>You are not authorized for this page</h2>
      <Link to="/">go to homePage</Link>
    </div>
  )
}

export default UnAuthPage
