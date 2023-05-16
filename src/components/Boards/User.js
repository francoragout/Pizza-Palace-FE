import axios from 'axios';
import React, { useEffect, useState } from 'react'

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/users/get-users')
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <>
    <div className='bg-light d-flex'>
      <button className="btn btn-secondary mx-auto rounded-5 my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar<i className="bi bi-plus-lg ms-1"></i></button>
    </div>
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">Usuario</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.status}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </>
  )
}

export default User