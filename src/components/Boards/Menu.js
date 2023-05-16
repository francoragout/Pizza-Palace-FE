import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/menus/get-menus')
    .then(response => {
      setMenus(response.data);
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
          <th scope="col">Categoria</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Medida</th>
          <th scope="col">Precio</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        {menus.map(menu => (
          <tr key={menu._id}>
            <td>{menu.category}</td>
            <td>{menu.name}</td>
            <td>{menu.description}</td>
            <td>{menu.size}</td>
            <td>${menu.price}</td>
            <td>{menu.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Menu