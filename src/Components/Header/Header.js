// import {Link} from 'react-ro'
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
function Header() {
    return (
        
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.achieversit.com/assets/images/AIT-white.jpg"
            alt="Ait Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
         <Navigation/>
      </nav>
    </div>
    )
}

export default Header
