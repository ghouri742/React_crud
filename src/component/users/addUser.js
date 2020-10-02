import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const Adduser=()=>{
    let history=useHistory()
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    })
    const {name,username,email,phone}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
 
    const onSub= async e=>{
        e.preventDefault()

        await axios.post("http://localhost:4000/users",user)
        history.push('/')

    }

    return(
    <div>
    <h1>Add User</h1>
    <div className="container">

    <form onSubmit={e=>onSub(e)}>
    <div class="form-group">
     
      <input type="text" value={name} name="name" class="form-control" placeholder="Enter Your Name" 
      onChange={e=>onInputChange(e)}
      />
    </div>
    <div class="form-group">
      <input type="text" value={username} name="username" class="form-control" placeholder="User Name" onChange={e=>onInputChange(e)} />
    </div>
    <div class="form-group">
      <input type="text" value={email} name="email" class="form-control" placeholder="Enter Email" onChange={e=>onInputChange(e)} />
    </div>

    <div class="form-group">
      <input type="text" value={phone}  name="phone" class="form-control" placeholder="Enter Phone "
      onChange={e=>onInputChange(e)}
      />
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

    </div></div>
)
}
export default Adduser