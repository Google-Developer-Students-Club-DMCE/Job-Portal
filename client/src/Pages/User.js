import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const User = ({ allJobs }) => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid p-3 py-4">
        <div className="row">
          {allJobs.length === 0 ? (
            <h5 className="text-center mt-4 fw-bold text-secondary">
              No Jobs Posted!
            </h5>
          ) : (
            <>
              {allJobs &&
                allJobs.map((job) => {
                  const { designation, company, location, description } = job;
                  return (
                    <>
                      {allJobs.length > 0 ? (
                        <div className="col-md-4 col-lg-3 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">{designation}</h5>
                              <p className="fw-bold text-primary">
                                {company}, {location}
                              </p>
                              <p className="card-text">{description}</p>
                              <a href="#" className="btn btn-primary ">
                                View Job
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        "No Jobs Posted"
                      )}
                    </>
                  );
                })}
            </>
          )}
        </div>
      </div>
      <NavLink to="/admin">
        <button id="add-post-btn" className="bg-primary text-light shadow">
          <i className="fa-solid fa-plus"></i>
        </button>
      </NavLink>
    </div>
  );
};

export default User;
