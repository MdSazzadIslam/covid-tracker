import React from "react";
import "./Summary.css";
const Summary = ({ summary, title }) => {
  console.log(title);
  return (
    <div className="col-md-12">
      <div className="row ">
        <div className="col-xl-3 col-lg-6">
          <div className="card l-bg-cherry">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large">
                <i className="fas fa-shopping-cart" />
              </div>

              <div className="mb-4">
                <h5 className="card-title mb-0">New Cases</h5>
              </div>
              <div className="row align-items-center mb-2 d-flex">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">
                    {summary.todayCases}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card l-bg-blue-dark">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large">
                <i className="fas fa-users" />
              </div>
              <div className="mb-4">
                <h5 className="card-title mb-0">Today's Death</h5>
              </div>
              <div className="row align-items-center mb-2 d-flex">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">
                    {summary.todayDeaths}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card l-bg-green-dark">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large">
                <i className="fas fa-ticket-alt" />
              </div>
              <div className="mb-4">
                <h5 className="card-title mb-0">Today's Death</h5>
              </div>
              <div className="row align-items-center mb-2 d-flex">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">
                    {summary.todayDeaths}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6">
          <div className="card l-bg-orange-dark">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="mb-4">
                <h5 className="card-title mb-0">Total Deaths</h5>
              </div>
              <div className="row align-items-center mb-2 d-flex">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">
                    {summary.deaths}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 style={{ textAlign: "center" }}>
        Covid summary status of {title.country}
      </h4>
    </div>
  );
};

export default Summary;
