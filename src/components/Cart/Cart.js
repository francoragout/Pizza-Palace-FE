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
              <h4>{item.name}</h4>
              <p>Cantidad: {item.count}</p>
              <p>$ {item.totalPrice}</p>
              <button  className='btn btn-secondary' onClick={() => removeFromCart(item)}>Eliminar</button>
            </div>
          ))}
          <p>Total: $ {cartItems.reduce((acc, item) => acc + item.totalPrice, 0)}</p>
        </div>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default Cart;


