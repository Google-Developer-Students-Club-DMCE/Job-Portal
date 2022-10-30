import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import JobCard from "../Components/JobCard.jsx/JobCard";
const User = ({ allJobs }) => {
  return (
    <div>
      <Navbar />
      <JobCard jobs={allJobs} />
      <NavLink to="/admin">
        <button id="add-post-btn" className="bg-primary text-light shadow">
          <i className="fa-solid fa-plus"></i>
        </button>
      </NavLink>
    </div>
  );
};

export default User;
