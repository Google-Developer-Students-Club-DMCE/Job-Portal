import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Admin = ({ setAllJobs, setFetchData }) => {
  const [newJob, setNewJob] = useState({
    designation: "",
    company: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // checking if all the fields are filled
    if (
        newJob.designation === "" ||
        newJob.company === "" ||
        newJob.description === "" ||
        newJob.location === ""
    ) {
        alert("Please fill all the fields marked with *");
        return;
    } else {
        axios
          .post("http://127.0.0.1:8000/addpost/", newJob)
          .then((res) => {
            alert("Job Posted Successfully");
            setFetchData((p) => !p);
          })
          .catch((e) => alert("Something went Wrong!"));
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="container shadow p-4 rounded-3"
        style={{ maxWidth: "800px" }}
      >
        <h1 className="text-center">Add a Job</h1>
        <form className="mt-3">
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Designation*"
                name="designation"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Company name*"
                name="company"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Location*"
                name="location"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Job Description*"
                name="description"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className="btn btn-primary mt-4 w-50 mx-auto"
              onClick={handleSubmit}
            >
              Post!
            </button>
          </div>
          <NavLink to="/">
            <span className="btn btn-link mx-auto w-100 mt-3">
              View all jobs
            </span>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Admin;
