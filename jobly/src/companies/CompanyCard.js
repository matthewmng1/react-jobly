import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CompanyCard = ({name, description, handle}) => {
  return (
    <Link to={`/companies/${handle}`}>
      <div>
        <h4>
          {name}
          <p>{description}</p>
        </h4>
      </div>
    </Link> 
  )
}

export default CompanyCard;