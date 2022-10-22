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
                          <a
                            href="#"
                            className="card job_card h-100 text-center text-decoration-none text-black shadow-sm rounded-3 px-2 py-4"
                            style={{
                              backgroundColor: "#f5f9ff",
                            }}
                          >
                            <div className="card-body">
                              <h2 className="card-title mb-0">{designation}</h2>
                              <div className="text-primary mb-3">
                                {company}, {location}
                              </div>
                              <p className="card-text text-secondary">
                                {description}
                              </p>
                            </div>
                          </a>
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
