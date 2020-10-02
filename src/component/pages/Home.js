
import React  ,{ useState ,useEffect} from  'react';
import axios from 'axios';
import { Link}  from 'react-router-dom'


const Home=()=>{
    const [users,setUser]=useState([])

    useEffect(()=>{
       loadUsers()
    },[])

    const loadUsers=async()=>{
      const result=await axios.get("http://localhost:4000/users")
    setUser(result.data.reverse() )
    }

    const deleteUser=async id =>{
      const result=await axios.delete(`http://localhost:4000/users/${id}`)
    loadUsers()
    }

    return(
        <div>
        <h1> Home </h1>
        <div className="container">
        <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,i)=>(
          <tr>
          <th scope='row'>{i+1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
          <Link className="btn btn-primary mr-2" to={`/user/${user.id}`} >View</Link>
          <Link className="btn btn-outline-primary mr-2" to={`/user/edit/${user.id}`} >Edit</Link>
          <Link className="btn dangerous mr-2" onClick={()=> deleteUser(user.id)}>Delete</Link>
          </td>
          </tr>  
        ))
        
    }
  </tbody>
</table>
</div>
        
        </div>
        )
    
}
export default Home