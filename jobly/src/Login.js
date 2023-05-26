import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ login }) => {
  const INITIAL_STATE = {
    username: "",
    password: ""
  }
  const history = useHistory();
  
  const [formData, updateFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    updateFormData( data => ({...data, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await login(formData);
    if(res.success){
      history.push("/companies")
    } else {
      updateFormData(res.errors)
    }
  }

  return(
    <div>
      <div>
        <h3>Login</h3>
        <div>
          <div>
            <form>
              <div>
                <label>Username</label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {formErrors.length
                ? console.log("Error") : null}

              <button onSubmit={handleSubmit}>Submit</button>  
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;