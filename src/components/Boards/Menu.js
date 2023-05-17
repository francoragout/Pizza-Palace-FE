import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdateMenu from '../Forms/UpdateMenu';

const Menu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get(`https://pizza-palace-be-production.up.railway.app/menus/get-menus`)
    .then(response => {
      setMenus(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const handleDeleteMenu = async (menuId) => {
    const confirmed = window.confirm('¿Estás seguro de que quieres eliminar este menú?');
  
    if (confirmed) {
      try {
        await axios.delete(`https://pizza-palace-be-production.up.railway.app/menus/delete-menu`, { data: { id: menuId } });
        const newMenus = menus.filter(menu => menu._id !== menuId);
        setMenus(newMenus);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [selectedMenu, setSelectedMenu] = useState(null);
  const handleEditMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
    <div className='bg-light d-flex'>
      <button className="btn btn-secondary mx-auto rounded-5 my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Menú</button>
    </div>
    <table className="table table-sm table-hover">
      <thead>
        <tr>
          <th scope="col">Categoria</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Medida</th>
          <th scope="col">Precio</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
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
            <td>
              <button type="button" className="btn btn-secondary btn-sm me-2" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => handleEditMenu(menu)}>Editar</button>
              <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteMenu(menu._id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">         
          <div className="modal-body"> 
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <div className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse"data-bs-target="#collapseOne" aria-expanded="true"aria-controls="collapseOne">
                    Editar menú
                  </div>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  {selectedMenu && <UpdateMenu menu={selectedMenu} />}
                  </div>
                </div>
              </div>
            </div>
          </div>       
        </div>
      </div>
    </div>
    </>
  )
}

export default Menu