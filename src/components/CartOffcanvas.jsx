import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';


import '../styles/CartOff.scss';

const CartOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Dummy cart items
  const cartItems = [
    { id: 1, name: 'Product 1', qty: 2, price: 20, image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Product 2', qty: 1, price: 50, image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Product 3', qty: 3, price: 15, image: 'https://via.placeholder.com/50' },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        <i className="fas fa-shopping-cart"></i> Cart
      </Button> */}

      <a href="#" 
          onClick={handleShow}
           className="nav-link position-relative me-3">
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="badge  bg-danger position-absolute top-0 start-100 translate-middle">
                {cartItems.length}
              </span>
            )}
           
          </a>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map(item => (
            <div key={item.id} className="d-flex align-items-center mb-3">
              <img src={item.image} alt={item.name} className="me-3" />
              <div className="flex-grow-1">
                <h6>{item.name}</h6>
                <p>Qty: {item.qty}</p>
              </div>
              <div className="p-2">
                <p>${item.price * item.qty}</p>
              </div>
              <div className="p-2">
                <p className="text-danger"><i className="fa-solid fa-trash-can"></i> </p>
              
              </div>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total</h5>
            <h5>${total}</h5>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartOffcanvas;
