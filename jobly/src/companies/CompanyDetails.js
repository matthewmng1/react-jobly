import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobsCardList from "../jobs/JobsCardList";

const CompanyDetails = () => {
  const {handle} = useParams()

  const [company, setCompany] = useState([])

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  return (
    <div>
        <h4>{company.name}</h4>
        <p>{company.description}</p>
        <JobsCardList jobs={company.jobs}/>
      </div>
  )
}

export default CompanyDetails;