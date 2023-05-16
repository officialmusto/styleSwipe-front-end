import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  const handleLogoClick = () => {
    window.location.href = "/" 
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
        <h1>StyleSwipe</h1>
      </div>
      <ul className={styles.navLinks}>
        {user ? (
          <>
            <li>
              <NavLink to="/profiles" activeClassName={styles.active}>
                Profiles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/change-password"
                activeClassName={styles.active}
              >
                Change Password
              </NavLink>
            </li>
            <li>
              <button className={styles.logoutBtn} onClick={handleLogout}>
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/auth/login" activeClassName={styles.active}>
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth/signup" activeClassName={styles.active}>
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavBar

