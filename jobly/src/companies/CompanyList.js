import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

const CompaniesList = () => {

  const [ companies, setCompanies ] = useState([])

  useEffect(() => {
    const getCompanies = async () => {
      let companies = await JoblyApi.getCompanyList();
      setCompanies(companies);
    }
    getCompanies();
  }, []);

  return (
    <div>
      <h1>This is the Companies List page</h1>
      <ul>
        {companies.map(c => (
          <CompanyCard 
            key={c.handle}
            handle={c.handle}
            name={c.name}
            desription={c.description}
          />
        ))}
      </ul>
    </div>
  )
}

export default CompaniesList;