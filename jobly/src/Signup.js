import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const SignUp = ({ signup }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  const history = useHistory();
  const [formData, updateFormData] = useState(INITIAL_STATE)
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await signup(formData);
    if(res.success){
      history.push("/companies");
    } else {
      setFormErrors(res.errors);
    }
  }

  return(
    <div>
      <div>
        <h3>Sign Up</h3>
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input 
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input 
                  id="password"
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input 
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input 
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input 
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {formErrors.length
                ? console.log("Error") : null}

              <button type="submit" onSubmit={handleSubmit}>
                Submit``
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;