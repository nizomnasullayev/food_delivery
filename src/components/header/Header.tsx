import logo from '../../assets/Logo (2).png'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="wrapper">
        <a href="#"><img src={logo} alt="" /></a>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Page</a></li>
        </ul>
        <div className='inputs'>
          <label>
            <input type="text" placeholder='Search...' />
            <button><CiSearch size={20} /></button>
          </label>
          <button className='header-button'><IoPersonOutline size={24} /></button>
          <NavLink to="/cart" className='header-button'><CiShoppingCart size={24} /></NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header