import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Alert from '../Alert/Alert';

const UpdateMenu = ({ menu }) => {
  const [formData, setFormData] = useState({
    category: '',
    image: '',
    name: '',
    description: '',
    size: '',
    price: '',
    status: '',
  });

  useEffect(() => {
    setFormData({
      category: menu.category,
      image: menu.image,
      name: menu.name,
      description: menu.description,
      size: menu.size,
      price: menu.price,
      status: menu.status,
    });
  }, [menu]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [updateSuccess, SetUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`https://pizza-palace-be-production.up.railway.app/menus/update-menu`, {
        id: menu._id,
        category: formData.category,
        image: formData.image,
        name: formData.name,
        description: formData.description,
        size: formData.size,
        price: formData.price,
        status: formData.status,
      });

      SetUpdateSuccess(true);
      setUpdateError(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000); 
      console.log(response.data);

    } catch (error) {
      setUpdateError(true);
      SetUpdateSuccess(false);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>

      {updateSuccess && (
        <Alert 
        className="alert alert-success"
        icon="bi bi-check-circle-fill me-2"
        message="Menú editado exitosamente!"/>
      )}

      {updateError && (
        <Alert 
        className="alert alert-danger"
        icon="bi bi-x-circle-fill me-2"
        message="Error al editar menú"/>
      )}

      <div className='input-group mb-3'>
        <span className="input-group-text"><i className="bi bi-funnel"></i></span>
        <div className="form-floating">
          <input 
          type="text" 
          maxLength="30"
          className="form-control" 
          name='category'
          id="category"
          placeholder="Categoría" 
          readOnly
          value={formData.category}
          />
          <label htmlFor="category">Categoría</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text"><i className="bi bi-file-earmark-image"></i></span>
        <div className="form-floating">
          <input 
          type="text" 
          className="form-control" 
          name='image'
          id="image"
          placeholder="Imagen" 
          onChange={handleInputChange}
          value={formData.image}
          />
          <label htmlFor="image">Imagen</label>
        </div>
      </div>
              
      <div className="form-floating mb-3">
        <input 
        type="text" 
        maxLength="20"
        className="form-control" 
        name='name'
        id="name"
        placeholder="Nombre" 
        onChange={handleInputChange}
        value={formData.name}
        />
        <label htmlFor="name">Nombre</label>
      </div>
              
      <div className="form-floating mb-3">
        <input 
        type="text" 
        maxLength="60"
        className="form-control" 
        name='description'
        id="description"
        placeholder="Descripción" 
        onChange={handleInputChange}
        value={formData.description}
        />
        <label htmlFor="description">Descripción</label>
      </div>
                 
      <div className="form-floating mb-3">
        <input 
        type="text" 
        maxLength="20"
        className="form-control" 
        id="size"
        name='size'
        placeholder="Medida" 
        onChange={handleInputChange}
        value={formData.size}
        />
        <label htmlFor="size">Medida</label>
      </div> 
              
      <div className="input-group mb-3">
        <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
        <div className="form-floating">
          <input 
          type="number" 
          className="form-control" 
          name='price'
          id="price"
          placeholder="Precio" 
          onChange={handleInputChange}
          value={formData.price}
          />
          <label htmlFor="price">Precio</label>
        </div>
      </div>

      <p className='text-secondary'>Estado:</p>

      <div className="form-floating mb-4 d-flex justify-content-around">
        <div>
          <input 
            type="radio"
            className="form-check-input"
            id="activo"
            name="status"
            value="activo"
            onChange={handleInputChange}
            checked={formData.status === "activo"}
          />
          <label className="form-check-label ms-2" htmlFor="activo">Activo</label>
        </div>

        <div>
          <input 
            type="radio"
            className="form-check-input"
            id="inactivo"
            name="status"
            value="inactivo"
            onChange={handleInputChange}
            checked={formData.status === "inactivo"}
          />
          <label className="form-check-label ms-2" htmlFor="inactivo">Inactivo</label>
        </div>
      </div>


      <button type="submit" className="btn btn-secondary">Editar menú</button>
    </form>
  );
};

export default UpdateMenu;

