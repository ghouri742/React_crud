import React,{useState,useEffect} from 'react'
import {Link, useHistory,useParams} from 'react-router-dom'
import axios from 'axios'

const User=()=>{

    const {id}=useParams()
   
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    })

    useEffect(()=>{
        loadUser()
    },[])
    const loadUser= async()=>{
  const res=await axios.get(`http://localhost:4000/users/${id}`)
  setUser(res.data)
    }

    return(
        <div className="container">
        <Link to="/">Back to Home</Link>
        <h1 className="display-4" > User Id : {id}</h1>

        <ul className="list-group w-50">
        <li className="list-group-item">Name  :{user.name}</li>
        <li className="list-group-item">User Name :{user.username}</li>
        <li className="list-group-item">Email :{user.email}</li>
        </ul>
        </div>
    )
}
export default User