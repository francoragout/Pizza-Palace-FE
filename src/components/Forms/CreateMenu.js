import axios from 'axios';
import React, { useState } from 'react'
import Alert from '../Alert/Alert';

const CreateMenu = () => {
  const [category, setCategory] = useState('');
  const [categoryValid, setCategoryValid] = useState(false);
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCategoryValid(event.target.value.match(/^(Pizza|Bebida|Cerveza)$/i));
  }

  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const [description, setDescription] = useState('');
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const [size, setSize] = useState('');
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  }

  const [price, setPrice] = useState('');
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const [hideButton, setHideButton] = useState(true)
  const [createSuccess, setCreateSuccess] = useState(false);
  const [createError, setCreateError] = useState(false);

  const [formValid, setFormValid] = useState(false);
  const isFormValid = categoryValid && name && description && size && price;
  if (formValid !== isFormValid) {
    setFormValid(isFormValid);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();

    const formData = {
      category,
      name,
      description,
      size,
      price
    };

    try {
      const response = await axios.post(`https://pizza-palace-be-production.up.railway.app/menus/create-menu`, formData);
      console.log(response.data)
      setCreateSuccess(true)
      setCreateError(false)
      setHideButton(false)
      setTimeout(() => {
        window.location.reload();
      }, 1000); 
      
    } catch (error) {
      setCreateError(true)
      setCreateSuccess(false)
    }
  }

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <div className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse"data-bs-target="#collapseOne" aria-expanded="true"aria-controls="collapseOne">
            Agregar menú
          </div>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show"aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>

              {createSuccess && (
                <Alert 
                className="alert alert-success"
                icon="bi bi-check-circle-fill me-2"
                message="Menú creado exitosamente!"/>
              )}

              {createError && (
                <Alert 
                className="alert alert-danger"
                icon="bi bi-x-circle-fill me-2"
                message="Error al crear menú"/>
              )}

              <div className='input-group mb-1'>
                <span className="input-group-text"><i className="bi bi-funnel"></i></span>
                <div className="form-floating">
                  <input 
                  type="text" 
                  maxLength="30"
                  className="form-control" 
                  id="category"
                  placeholder="Categoría" 
                  onChange={handleCategoryChange}
                  value={category}
                  />
                  <label htmlFor="category">Categoría</label>
                </div>
              </div>
              <div className='mb-3'>
              {!categoryValid && <span className='text-secondary'>Pizza, Bebida o Cerveza</span>}
              </div>

              <div className="form-floating mb-1">
                <input 
                type="text" 
                maxLength="20"
                className="form-control" 
                id="name"
                placeholder="Nombre" 
                onChange={handleNameChange}
                value={name}
                />
                <label htmlFor="name">Nombre</label>
              </div>
              <div className='mb-3'>
              {!name && <span className='text-secondary'>Este campo es requerido.</span>}
              </div>

              <div className="form-floating mb-1">
                <input 
                type="text" 
                maxLength="60"
                className="form-control" 
                id="description"
                placeholder="Descripción" 
                onChange={handleDescriptionChange}
                value={description}
                />
                <label htmlFor="description">Descripción</label>
              </div>
              <div className='mb-3'>
              {!description && <span className='text-secondary'>Este campo es requerido.</span>}
              </div>

              
              <div className="form-floating mb-1">
                <input 
                type="text" 
                maxLength="20"
                className="form-control" 
                id="size"
                placeholder="Medida" 
                onChange={handleSizeChange}
                value={size}
                />
                <label htmlFor="size">Medida</label>
              </div> 
              <div className='mb-3'>
              {!size && <span className='text-secondary'>Este campo es requerido.</span>}
              </div>

              <div className="input-group mb-1">
                <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
                <div className="form-floating">
                  <input 
                  type="number" 
                  className="form-control" 
                  id="price"
                  placeholder="Precio" 
                  onChange={handlePriceChange}
                  value={price}
                  />
                  <label htmlFor="price">Precio</label>
                </div>
              </div>
              <div className='mb-3'>
              {!price && <span className='text-secondary'>Este campo es requerido.</span>}
              </div>

              {hideButton && (
                <button type="submit" className="btn btn-secondary" disabled={!formValid}>Agregar menú</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateMenu