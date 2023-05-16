import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Order = () => {
  const userId = JSON.parse(localStorage.getItem("user"));
  const user = userId.email
  
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/requests/get-requests`)
      .then(response => {
        setRequests(response.data.reverse());
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const userRequests = requests.filter(request => request.user === user);

  const getStatusClass = (status) => {
    if (status === "Pendiente") {
      return "text-bg-danger px-2 py-2 rounded-5 d-flex align-items-center justify-content-center";
    } else if (status === "Realizado") {
      return "text-bg-success px-2 py-2 text-center rounded-5";
    } else {
      return "";
    }
  }

  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">Hora</th>
          <th scope="col">Fecha</th>
          <th scope="col">Pedido</th>
          <th scope="col">Total</th>
          <th scope="col">Dirección</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        {userRequests.map(request => (
          <tr key={request._id}>
            <td>{request.hour}</td>
            <td>{request.date}</td>
            <td>
              <ul>
                {request.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </td>
            <td>${request.total}</td>
            <td>{request.address}</td>
            <td>{request.phone}</td>
            <td>
              <div className={getStatusClass(request.status)}>
                {request.status}
                {request.status === "Pendiente" && (
                  <div className="spinner-border spinner-border-sm text-light ms-2" role="status">
                  </div>
                )}
                {request.status === "Realizado" && (
                  <i className="bi bi-check-lg ms-2"></i>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Order