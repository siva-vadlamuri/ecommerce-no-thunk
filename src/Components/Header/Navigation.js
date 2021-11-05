import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
function Navigation() {
  const cartData = useSelector(state => state.productsData.cartData)
    return (
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto ml-5">
          <li className="nav-item active">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
            
            {/* CartPage */}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart <i class="bi bi-cart"></i> 
               <sup className="text-white">  {cartData?.length} </sup>
              </Link>
            </li>
          </ul>
        </div>
    )
}

export default Navigation
