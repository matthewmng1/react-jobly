import './App.css';
import Nav from './Nav';
import Routes from './Routes';

import useLocalStorage from "./useLocalStorage"
import { BrowserRouter } from 'react-router-dom/';
import { useEffect, useState } from 'react';
import JoblyApi from './api';
import UserContext from './UserContext';
import jwt from "jsonwebtoken";


export const TOKEN_STORAGE_ID = "jobly-token";


function App() {

  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(function loadUserInfo() {
    async function getCurrUser() {
      if(token){
        try{
          let {username} = jwt.decode(token)
          JoblyApi.token=token;
          let currUser = await JoblyApi.getCurrentUser(username);
          setCurrUser(currUser)
          setApplicationIds(new Set(currUser.applications));
        } catch (err) {
          console.log("App loadUserInfo: problem loading", err);
          setCurrUser(null)
        }
      }
      setInfoLoaded(true)
    }
  
    setInfoLoaded(false);
    getCurrUser();
  },[token]);

  const logout = () => {
    setCurrUser(null);
    setToken(null);
  }

  async function signup(signupData){
    try{
      let token = await JoblyApi.signup(signupData);
      setToken(token)
      return {success : true};
    } catch (err) {
      return { success : false, err };
    }
  }

  async function login(loginData){
    try{
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return{success : true};
    } catch (err) {
      return {success: false, err};
    }
  }

  function hasAppliedToJob(id){
    return applicationIds.has(id);
  }

  function applyToJob(id){
    if(hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currUser.username, id);
    setApplicationIds(new Set ([...applicationIds, id]));
  }

    return (
        <BrowserRouter>
          <UserContext.Provider
            value={{currUser, setCurrUser, hasAppliedToJob, applyToJob }}>
            <div className='App'>
              <Nav logout={logout} />
              <Routes login={login} signup={signup} />
            </div>
          </UserContext.Provider>
        </BrowserRouter>
    );
    }

export default App;
