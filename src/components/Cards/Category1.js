import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Category1 = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/menus/get-menus')
    .then(response => {
      const filteredData = response.data.filter(menuData => menuData.category === 'Pizza');
      setMenuData(filteredData);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  return (
    <div className="container">
      <div className="row">
        {menuData.map(menuData => (
          <div className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center my-3" key={menuData._id}>
            <Card menu={menuData}/>
          </div>
        ))}
      </div>
  </div>
  )
}

export default Category1