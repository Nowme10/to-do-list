import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  })
  const [ address, setAddress] = useState({
    
      street: "",
      city: "",
      country: "",
    
  })
  const [isActive, setIsActive] = useState(false);

  const HandleActiveChange = (e) => {
    const { name, checked } = e.target;

    // Update state with the boolean value of checked
    setIsActive(checked);
  };

 
  // const [errors, setErrors] = useState("");

  // let fullName = {
  //   firstname:"",
  //   lastname:""

  // };
  const [data, setData] = useState({
    userId: 0,
    username: "",
    password: "",       
    age: 0,
    email: "", 
    isActive: false   
    // fullName: fullName,
    // address: address
   
  });
  const [hobbies, setHobbies] = useState([])
 
  const handleHobbiesChange = (e) => {
      const newHobbies = e.target.value;
      const newHobbiesArray = newHobbies.split(',').map((hobby) => hobby.trim());
      setHobbies([...newHobbiesArray ])
      // setHobbies((prevhobbies) => [...prevhobbies, newHobbies]);
      // const newHobbiesArray = [...newHobbies];
      // setHobbies(newHobbiesArray);

    
    // setHobbies(p=>([...p,hobbies,e.target.value]))
    // setHobbies((prevhobbies) => [...prevhobbies, hobbies]);
    // setHobbies(newHobbies)
    // hobbies.push(newHobbies.toString())
 

   
  // };
  
  }
  const HandleChange = (e) => {
    
    const { name, value } = e.target;  
      //  if(typeof(userId)!== Number()){
        const numericValue = name === 'userId' || name === 'age' ? parseInt(value, 10) : value;

        setData((prevData) => ({
          ...prevData,
          [name]: numericValue,
        }));
        
    // setData((prev) => ({ ...prev, [name]: value }));
       
       

  
  };
  const [input, setInput] = useState({});

  const HandleSubmmit = (e) => {   
    e.preventDefault();    
    
   const newData = {...data, address, fullName, hobbies , isActive }
  
   
  // setFullName(fullName)
  setInput(newData)
  console.log(input)
    axios.post("https://alive-long-johns-calf.cyclic.app/api/users",input )
    .then((response) =>{
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  };

  return (
    <div className="main-container">
      <div className="container">
        <form className="form-api" onSubmit={HandleSubmmit}>
          <h1>Contact</h1>
          <div className="box">
            <input
              onChange={HandleChange}
              className="input"
              type="number"
              name="userId"
              placeholder="userId"
              
            />
            

            <input
              onChange={HandleChange}
              className="input"
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              onChange={HandleChange}
              className="input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="box">
          <input
              onChange={HandleActiveChange}
              className="input"
              type="checkbox"
              name="isActive"
              checked={isActive.isActive}
              
            />
          </div>

          <div className="box">
            <input
               onChange={(e)=>setFullName(p=>({...p,firstName:e.target.value}))}
              className="input"
              type="text"
              // name="firstName" 
                          
              placeholder="Enter first name"
            />
            <input
              onChange={(e)=>setFullName(p=>({...p,lastName:e.target.value}))}
              className="input"
              type="text"
             
              // name="lastName"
              placeholder="Enter Lasst Name"
            />
          </div>
          <div className="box">
            <input
              onChange={HandleChange}
              className="input"
              type="number"
              name="age"
              placeholder="age"
            />

            <input
              onChange={HandleChange}
              className="input"
              type="email"
              name="email"
              placeholder="email"
            />

            <input
               onChange={handleHobbiesChange}
              className="input"
              type="text"
              name="hobbies"
              placeholder="hobbies"
            />
          </div>
          <div className="box">
            <input
              onChange={(e)=> setAddress(p =>({...p,street:e.target.value}))}
              className="input"
              type="text"
              name="street"
              placeholder="street"
             
            />

            <input
              onChange={(e)=> setAddress(p =>({...p,city:e.target.value}))}
              className="input"
              type="text"
              name="city"
              placeholder="city"
             
            />

            <input
              onChange={(e)=> setAddress(p =>({...p,country:e.target.value}))}
              className="input"
              type="text"
              name="country"
              placeholder="country"
              
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
