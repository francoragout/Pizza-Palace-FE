import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import axios from 'axios';

const Cards = (props) => {
  const [menuData, setMenuData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/menus/get-menus')
      .then(response => {
        const filteredData = response.data.filter(menuData => menuData.category === props.category);
        setMenuData(filteredData);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.category]);

  return (
    <div className="container-lg">
      <div className="row">
        {menuData.map(menuData => (
          <div className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center my-3" key={menuData._id}>
            <Card 
              menu={menuData}
              description={props.description}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards