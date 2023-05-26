import React from "react";
import JobsCard from "./JobsCard";

/** Show list of job cards.
 *
 * Used by both JobList and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobCard on apply.
 *
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function JobsCardList({ jobs, apply }) {
  console.debug("JobsCardList", "jobs=", jobs);

  return (
      <div className="JobsCardList">
        {jobs.map(job => (
            <JobsCard
                key={job.id}
                id={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}
            />
        ))}
      </div>
  );
}

export default JobsCardList;
