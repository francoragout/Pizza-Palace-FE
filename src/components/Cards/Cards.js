import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';

const Cards = (props) => {
  const [menuData, setMenuData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://pizza-palace-be-production.up.railway.app/menus/get-menus`)
      .then(response => {
        const filteredData = response.data.filter(menuData => menuData.category === props.category && menuData.status === 'activo');
        setMenuData(filteredData);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.category]);

  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/home') {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [location])

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product, menuId) => {
    setLoadingStates(prevState => ({
      ...prevState,
      [menuId]: true,
    }));

    addToCart(product);

    setTimeout(() => {
      setLoadingStates(prevState => ({
        ...prevState,
        [menuId]: false, 
      }));
    }, 700);
  };

  const [loadingStates, setLoadingStates] = useState({});

  return (
    <div className="container-lg">
      <div className="row">
        {menuData
          .filter(menu => menu.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
          .map(menuData => (
          <div className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center my-3" key={menuData._id}>
            <div className="card text-bg-light" style={{width: "18rem"}}>
              <div className="card-header text-secondary bg-dark">
                {menuData.category}
              </div>
              <div className='d-flex mx-auto'>
                <img src={menuData.image} alt={menuData.name} style={{width: '8rem', height: '8rem'}} className=''/>               
              </div>
              <div className="card-body text-bg-dark">
                <div className='d-flex justify-content-between'>
                  <h4 className="card-title">{menuData.name}</h4>
                  <h4><i className="bi bi-arrow-down-circle-fill"></i></h4>
                </div>
                <p className={props.description} style={{height: "2.1rem"}}>{menuData.description}</p>
                <div className='d-flex justify-content-between'>
                  <p className='text-secondary' style={{height: "1rem"}}>{menuData.size}</p>     
                  <h5><i className="bi bi-currency-dollar me-1"></i>{menuData.price}</h5>
                </div>
                {showButton && (
                    <>
                      {loadingStates[menuData._id] ? (
                        <div className="text-center mt-2">
                          <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      ) : (
                        <button type="button" className="btn btn-sm btn-secondary mt-2" onClick={() => handleAddToCart(menuData, menuData._id)}>Añadir al carrito<i className="bi bi-cart4 ms-2"></i></button>
                      )}
                    </>
                  )}
              </div>
            </div>         
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards