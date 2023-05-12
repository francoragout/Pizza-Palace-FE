import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards';

const Scrollspy = () => {
  useEffect(() => {
    const scrollspyBtn = document.querySelectorAll('#scrollspy button');

    scrollspyBtn.forEach(button => {
      button.addEventListener('click', () => {
        const target = document.querySelector(button.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='container'>
      <nav id="scrollspy" className="navbar bg-light px-3 d-flex justify-content-between justify-content-md-between">
        <ul className="nav nav-pills mt-2">
          <li className="nav-item">
            <button className="btn btn-secondary rounded-5 me-1" href="#scrollspyHeading1">Pizzas</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-secondary rounded-5 me-1" href="#scrollspyHeading2">Bebidas</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-secondary rounded-5 me-1" href="#scrollspyHeading3">Cervezas</button>
          </li>
        </ul>
        <form className="d-flex mt-2" role="search">
          <input className="form-control me-2 rounded-5" type="search" placeholder="Buscar" aria-label="Search" onChange={handleSearchTermChange} value={searchTerm}/>
        </form>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#scrollspy" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-light p-3 rounded-2" tabIndex="0">
        <h1 className='text-center bg-warning text-light' id="scrollspyHeading1">P I Z Z A S</h1>
        <Cards searchTerm={searchTerm}
        category="Pizza" 
        description="text-warning card-text"/>
        <h1 className='text-center bg-danger text-light' id="scrollspyHeading2">B E B I D A S</h1>
        <Cards searchTerm={searchTerm}
        category="Bebida"
        description="text-danger text-warning"/>
        <h1 className='text-center bg-success text-light' id="scrollspyHeading3">C E R V E Z A S</h1>
        <Cards searchTerm={searchTerm}
        category="Cerveza"
        description="text-success card-text"/>
      </div>
    </div>
  )
}

export default Scrollspy