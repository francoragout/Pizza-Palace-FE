import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={`${item._id}-${item.count}`}>
              <div className='card mb-3 text-bg-secondary'>
                <div className='card-body' style={{height: "5rem"}}>
                  <div className='d-flex justify-content-between'>
                    <h6>{`${item.category} ${item.name} (${item.count})`}</h6>
                  <button className='btn btn-sm btn-close btn-close-white' onClick={() => removeFromCart(item)}></button>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <h6>$ {item.totalPrice}</h6> 
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='text-bg-dark w-100 d-flex justify-content-between position-absolute bottom-0 start-0' style={{height: "3rem"}}>
            <h6 className='mx-auto my-auto'>Total: <i className="bi bi-currency-dollar"></i> {cartItems.reduce((acc, item) => acc + item.totalPrice, 0)}</h6>
            <button type='button' className='btn btn-secondary rounded-0' data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar carrito</button>
          </div>
        </div>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default Cart;


