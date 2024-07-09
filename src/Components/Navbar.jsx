import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context-Api/ContextApi";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
    const navLink=<>
    <li ><Link to="/">Home</Link></li>
    <li ><Link to="/login">Log in</Link></li>
    <li ><Link to="/register">Register</Link></li>  
    <li ><Link to="/order">Order</Link></li>  
    </>


const handleLogOut=()=>{
  logOut()
}


    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">CONTEXT-API</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <> <h3>{user.email}</h3> <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button></> : <button className="btn btn-ghost"><Link to="/login">Log in</Link></button>
    }
  </div>
</div>
    );
};

export default Navbar;