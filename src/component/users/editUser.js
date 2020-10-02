import React,{useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import axios from 'axios'

const EditUser=()=>{
    let history=useHistory()
    const {id}=useParams()
   
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

    useEffect(()=>{
      loadUser()
    },[])
 
    const onSub= async e=>{
        e.preventDefault()

        await axios.put(`http://localhost:4000/users/${id}`,user)
        history.push('/')
       }
       const loadUser= async ()=>{
       
      const result=  await axios.get("http://localhost:4000/users/"+id)
        
      setUser(result.data)
       }

    
    return(
    <div>
    <h1 className="align :center">Edit User</h1>
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
    
    <button type="submit" class="btn btn-primary">Update User</button>
  </form>

    </div></div>
)
}
export default EditUser