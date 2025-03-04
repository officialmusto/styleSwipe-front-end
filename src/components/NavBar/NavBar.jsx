// npm modules
import { NavLink } from "react-router-dom"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav id="landing-nav">
      {user ? (
        <ul>
          <h1>StyleSwipe</h1>
          <li>
            <NavLink to="/profiles">Profiles</NavLink>
          </li>
          <li>
            <NavLink to="" onClick={handleLogout}>
              LOG OUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth/change-password">Change Password</NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <h1>StyleSwipe</h1>
          <li>
            <NavLink to="/auth/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/auth/signup">Sign Up</NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar
