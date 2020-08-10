import React from 'react';
import './Item.css';
import {Button} from "antd";
import {NavLink} from "react-router-dom";


const Item = props => {
  const { territory, libraries, order} = props;

    return (
      <div className="Item" key={order}>
        <div className="Item-left">
          <div className="Item-territory"><b>{territory}</b> - библиотек в городе {libraries} </div>
        </div>

        <div className="Item-right">
          <NavLink to={`/region-info/${order}`}>
            <Button type="primary" size="small">Подробнее</Button>
          </NavLink>
        </div>
      </div>
    );

}

export default Item;

