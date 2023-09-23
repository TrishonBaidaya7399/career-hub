// import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import "./Header.css"
// import { NavLink } from "react-router-dom";

const Header = () => {
    return (
<div className="navbar lg:px-[200px] lg:py-[50px] bg-[#eef0fa] ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-[150px]">
       
        <li><NavLink to="/statistics" className="text-[#757575] text-[16px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] duration-300 font-bold">Statistics</NavLink></li>
        <li><NavLink to="/applied" className="text-[#757575] text-[16px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] duration-300 font-bold">Applied Jobs</NavLink></li>
        <li><NavLink to="/blog" className="text-[#757575] text-[16px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] duration-300 font-bold">Blog</NavLink></li>
      </ul>
    </div>
    <NavLink to="/"><a className="text-[32px] font-extrabold">CareerHub</a></NavLink>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-[40px] px-1 text-[#757575] text-[16px] ">
   
    <li><NavLink to="/statistics" className="text-[#757575] text-[16px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] duration-300 font-bold">Statistics</NavLink></li>
    <li><NavLink to="/applied" className="text-[#757575] text-[16px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] duration-300 font-bold">Applied Jobs</NavLink></li>
    <li><NavLink to="/blog" className="text-[#757575] text-[16px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] duration-300 font-bold">Blog</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-[16px]">Star Applying</a>
  </div>
</div>
    );
};

Header.propTypes = {
    
};

export default Header;