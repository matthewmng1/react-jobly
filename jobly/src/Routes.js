import React, { Profiler } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import SignUp from "./Signup";
import Login from "./Login";
import CompanyList from "./companies/CompanyList";
import JobsList from "./jobs/JobsList";
import Profile from "./Profile";
import CompanyDetails from "./companies/CompanyDetails";
import CompanyCard from "./companies/CompanyCard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/signup"><SignUp /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/companies"><CompanyList /></Route>
      <Route exact path="/companies/:company"><CompanyDetails /></Route>
      <Route exact path="/jobs"><JobsList /></Route>
      <Route exact path="/profile"><Profile /></Route>
    </Switch>
  )

}

export default Routes;
