import { NavLink } from "react-router-dom"
import logo from "../../assets/Logo.png"

export default function Navbar() {
  return (
    <nav className="navbar  max-w-[1400px] px-8 mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
           <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
               
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/donation'}>Donation</NavLink></li>
                <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                
            </ul>
            </div>
              <NavLink to="/">
                  <img width={'200px'} src={logo} alt="donation campaign" />
              </NavLink>
        </div>
        <div className="navbar-end hidden md:flex">
            <ul className="menu menu-horizontal px-1">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/donation'}>Donation</NavLink></li>
                <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}
