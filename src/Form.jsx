import React from 'react'
import {useState } from "react";
import axios from "axios";
import "./App.css";

function Form() {
    const [formData, setFormData] = useState({
        userId: 0,
        username: "",
        password: "",
        fullName: {
          firstName: "",
          lastName: "",
        },
        age: 0,
        email: "",
        isActive: false,
        hobbies: [],
        address: {
          street: "",
          city: "",
          country: "",
        },
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        // setFormData((prevData) => ({
        //   ...prevData,
        //   [name]: value,
        // }));
        const numericValue = name === 'userId' || name === 'age' ? parseInt(value, 10) : value;

        setFormData((prevData) => ({
          ...prevData,
          [name]: numericValue,
        }));
      };
    
      const handleFullNameChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          fullName: {
            ...prevData.fullName,
            [name]: value,
          },
        }));
      };
    
      const handleHobbiesChange = (e) => {
        const newHobby = e.target.value;
        setFormData((prevData) => ({
          ...prevData,
          hobbies:[...prevData.hobbies, newHobby],
        }));
       
      };
    
      const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          address: {
            ...prevData.address,
            [name]: value,
          },
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();       
       
    
        // Uncomment the following lines to make an API request
        axios.post("https://alive-long-johns-calf.cyclic.app/api/users", formData)
          .then((response) => {
            console.log(response)
          })
          .catch((err) => {
            console.log(err);
          });
          console.log(formData);
      };
  return (
    <div className="main-container">
      <div className="container">
        <form className="form-api" onSubmit={handleSubmit}>
          {/* Other input fields... */}

          <div className="box">
            <input
              onChange={handleChange}
              className="input"
              type="number"
              name="userId"
              placeholder="userId"
            />

            <input
              onChange={handleChange}
              className="input"
              type="text"
              name="username"
              placeholder="Username"
            />

            <input
              onChange={handleChange}
              className="input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          {/* Other input fields... */}

          <div className="box">
            <input
              onChange={handleFullNameChange}
              className="input"
              type="text"
              name="firstName"
              placeholder="Enter first name"
            />

            <input
              onChange={handleFullNameChange}
              className="input"
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="box">
            <input type="text" name='hobbies' className='input' placeholder='Hobbies' onChange={handleHobbiesChange} />
            <input
              onChange={handleChange}
              className="input"
              type="email"
              name="email"
              placeholder="email"
            />

            <input
              onChange={handleChange}
              className="input"
              type="text"
              name="age"
              placeholder="age"
            />
          </div>

          {/* Other input fields... */}

          <div className="box">
            <input
              onChange={handleAddressChange}
              className="input"
              type="text"
              name="street"
              placeholder="street"
            />

            <input
              onChange={handleAddressChange}
              className="input"
              type="text"
              name="city"
              placeholder="city"
            />

            <input
              onChange={handleAddressChange}
              className="input"
              type="text"
              name="country"
              placeholder="country"
            />
          </div>
          <div className="box">
          <input
              onChange={handleChange}
              className="input"
              type='checkbox'
              name='isActive'             
            />
          </div>

          {/* Other input fields... */}

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form