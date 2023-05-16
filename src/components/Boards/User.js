import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/users/get-users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleStatusChange = async (userId, newStatus) => {
    const confirmed = window.confirm(
      `¿Estás seguro de que quieres ${newStatus === 'activo' ? 'activar' : 'Inactivar'} este usuario?`
    );

    if (confirmed) {
      try {
        await axios.put('http://localhost:8000/users/update-user', {
          id: userId,
          status: newStatus,
        });

        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, status: newStatus } : user
          )
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className='bg-light d-flex'>
        <button
          className='btn btn-secondary mx-auto rounded-5 my-2'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
        >Agregar Usuario</button>
      </div>
      <table className='table table-sm table-hover'>
        <thead>
          <tr>
            <th scope='col'>Usuario</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Estado</th>
            <th scope='col'>Rol</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.status}</td>
              <td>{user.role}</td>
              <td>
                {user.role === 'admin' ? (
                  <button
                    disabled
                    className='btn btn-danger btn-sm'
                  >
                    Inactivar
                  </button>
                ) : user.status === 'activo' ? (
                  <button
                    onClick={() =>
                      handleStatusChange(user._id, 'inactivo')
                    }
                    className='btn btn-danger btn-sm'>
                    Inactivar
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleStatusChange(user._id, 'activo')
                    }
                    className='btn btn-success btn-sm'>
                    Activar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;

