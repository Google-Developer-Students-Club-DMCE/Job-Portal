/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const JobCard = ({ jobs }) => {
  return (
    <div className="container-fluid p-3 py-4">
      <div className="row">
        {jobs.length === 0 ? (
          <h5 className="text-center mt-4 fw-bold text-secondary">
            No Jobs Posted!
          </h5>
        ) : (
          <>
            {jobs &&
              jobs.map((job) => {
                const { designation, company, location, description } = job;
                return (
                  <>
                    {jobs.length > 0 ? (
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
  );
};

export default JobCard;
