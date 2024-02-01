import React from "react";
import { Link, useLocation } from "react-router-dom";


const NavBar = () => {
  const location = useLocation();
  const constantUserName = "Brian Motari";

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="bg-slate-50 pb-6 h - 4 w-70 rounded-t w-70 m-2" >
      
      <div className="flex justify-end bg-cyan-700 rounded-t w-70 p-2 ">
        
        <div className="">
          
          <Link to="#" className="text-white">
            Contact HR
          </Link>
          <Link to="/profile" className="text-white">
            {constantUserName}
          </Link>
          
          
          
          
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className={`mr-4 text-${isActive("/")}`}>
          <span className="text-cyan-500">Radius.Ltd</span>
          </Link>
        </div>

        <div className="flex justify-end">
        <Link to="/" className={`mr-4 ${isActive("/home")}`}>
            Home
          </Link>
          <Link to="/profile" className={`mr-4 ${isActive("/profile")}`}>
            Profile
          </Link>
          <Link to="/benefits" className={`mr-4 ${isActive("/benefits")}`}>
            Benefits
          </Link>
          <Link to="/required-tasks" className={`mr-4 ${isActive("/required-tasks")}`}>
            Required Tasks
          </Link>
          <Link to="/resources" className={`mr-4 ${isActive("/resources")}`}>
            Resources
          </Link>
          <Link to="/time-off" className={`mr-4 ${isActive("/time-off")}`}>
            Time Off
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
