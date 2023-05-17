import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Request = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/requests/get-requests')
    .then(response => {
      setRequests(response.data.reverse());
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const handleStatusChange = async (requestId, newStatus) => {
    const confirmed = window.confirm(
      'Estas seguro de que quieres cambiar el estado del pedido de pendiente a realizado?'
    );

    if (confirmed) {
      try {
        await axios.put('http://localhost:8000/requests/update-request', {
          id: requestId,
          status: newStatus,
        });

        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === requestId ? { ...request, status: newStatus } : request
          )
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
    <div className='bg-light d-flex'>
      <button className="btn btn-secondary mx-auto rounded-5 my-2" onClick={handleRefresh}>Refresh<i className="bi bi-arrow-clockwise ms-1"></i></button>
    </div>
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">Hora</th>
          <th scope="col">Fecha</th>
          <th scope="col">Pedido</th>
          <th scope="col">Total</th>
          <th scope="col">Usuario</th>
          <th scope="col">Dirección</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {requests.map(request => (
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
            <td>{request.user}</td>
            <td>{request.address}</td>
            <td>{request.phone}</td>
            <td>{request.status}</td>
            <td>
              {request.status === 'Pendiente' ? (
                <button
                  onClick={() =>
                    handleStatusChange(request._id, 'Realizado')
                  }
                  className='btn btn-danger btn-sm'>
                  Cambiar estado
                </button>
              ) : (
                <button className='btn btn-success btn-sm' disabled>
                  Cambiar estado
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Request