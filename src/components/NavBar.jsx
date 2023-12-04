import { Link, NavLink, useNavigate } from "react-router-dom";
import './NavBar.css';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user , logOut , loader} = useContext(AuthContext);
  const navigate = useNavigate();
  // const {email} = user;

  const handleLogOut=(e)=>{
    e.preventDefault();

    logOut()
      .then(()=>{
        console.log('User logged out');
        navigate('/');
      })
      .catch(error=>
        console.log(error.message)
      )
  }

  const navLink = <nav className="flex flex-col text-center md:flex-row  md:space-x-5 text-lg md:text-xl">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/addProducts">Add Products</NavLink>
    <NavLink to={`/myCart/${user?.email}`}>My Cart</NavLink>
  </nav>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <div className="">
              {
                navLink
              }
            </div>
          </ul>
        </div>
        <img className="w-40" src="logo.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navLink
          }
        </ul>
      </div>
      
      {
        user ?
          <div className="navbar-end">
            <img className="w-10 rounded-full mr-3" src={user.photoURL} alt="" />
            <p className="text-xl mr-3">{user.displayName}</p>
            <button onClick={handleLogOut} className="btn text-xl">Logout</button>
          </div>
          :
          <div className="navbar-end text-md">
            <Link className="btn" to="/login">Login</Link>
          </div>
      }
    </div>
  );
};

export default NavBar;