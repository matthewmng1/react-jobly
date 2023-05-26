import React, { useState, useContext } from "react";
import JoblyApi from "./api";
import UserContext from "./UserContext";

const Profile = () => {
  const { currUser, setCurrUser } = useContext(UserContext)
  const [formData, setFormData] = useState({
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    email: currUser.email,
    username: currUser.username,
    pasword: "",
  });
  const [formErrors, setFormErrors] = useState([])

  const handleSubmit = async e => {
    e.preventDefault();
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (errors) {
      debugger;
      setFormErrors(errors);
      return;
    }

    setFormData(f => ({ ...f, password:""}));

    setCurrUser(updatedUser)
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData( data => ({
      ...data,
      [name]:value,
    }));
    setFormErrors([]);
  }



  return (
    <div>
      <h3>Profile</h3>
      <div>
        <div>
          <form>
            <div>
              <label>Username</label>
              <p>{formData.username}</p>
            </div>
            <div>
              <label>First Name</label>
              <input 
                name="firstName"  
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
            <label>Last Name</label>
            <input 
              name="lastName"  
              value={formData.lastName}
              onChange={handleChange}
            />
            </div>
            <div>
            <label>Email</label>
            <input 
              name="email"  
              value={formData.email}
              onChange={handleChange}
            />
            </div>
            <div>
            <label>Confirm password</label>
            <input 
              type="password"
              name="password"  
              value={formData.password}
              onChange={handleChange}
            />
            </div>

            {formErrors.length
              ? console.log("Error") : null}

            <button onClick={handleSubmit}>Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile;