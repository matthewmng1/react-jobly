import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobsCardList from "./JobsCardList";


/** Show page with list of jobs.
 *
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 *
 * JobList -> JobCardList -> JobCard
 *
 * This is routed to at /jobs
 */

function JobsList() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      let jobs = await JoblyApi.getJobsList();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  return (
    <div>
      <h1>Jobs List page</h1>
      <ul>
          <JobsCardList jobs={jobs}/>
      </ul>
    </div>
  );
}

export default JobsList;
