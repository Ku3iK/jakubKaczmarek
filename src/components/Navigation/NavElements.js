import React from "react"
import { Link } from "gatsby"

const NavElements = ({ routes }) => {
  return (
    <ul>
      {routes.map(({ icon, path }, index) => (
        <li key={index}>
          <Link to={path} target="_blank">
            <img className="navigationIcon" src={icon} alt="Ikona" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavElements
