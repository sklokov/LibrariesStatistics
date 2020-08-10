import React, {useEffect, useState} from 'react';
import '../ItemInfo/ItemInfo.css';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Descriptions, Badge} from "antd";


function ItemInfo() {
  let {order} = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://cors-anywhere.herokuapp.com/https://data.gov.ru/opendata/7705851331-statlibrary/data-20161110T1744.json")
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredData(data.filter(function (item) {
      return item.order === Number(order);
    }));
  }, [order, data]);


  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      {filteredData.map((data, i) => (
        <div key={i}>
          <Descriptions style={{ minWidth: "500px", width: "50%"}} title={data.formname} layout="vertical" bordered>
            <Descriptions.Item label="Регион">{data.territory}</Descriptions.Item>
            <Descriptions.Item label="Количество библиотек">{data.libraries}</Descriptions.Item>
            <Descriptions.Item label="Количество подписчиков">{data.subscribers}</Descriptions.Item>
            <Descriptions.Item label="Количество сотрудников">{data.employees}</Descriptions.Item>
            <Descriptions.Item label="Административная принадлежность" span={2}>
              {data.fullname}
            </Descriptions.Item>
            <Descriptions.Item label="Статус" span={3}>
              <Badge status="processing" text="Действующая"/>
            </Descriptions.Item>
            <Descriptions.Item label="Средства поступившие из бюджета">{data.funds_budget} тыс. руб.</Descriptions.Item>
            <Descriptions.Item label="Отремонтировано зданий">{data.buildings_repair}</Descriptions.Item>
            <Descriptions.Item label="Данные за период">{data.period} г.</Descriptions.Item>
            <Descriptions.Item label="Адрес">
              {data.address}
            </Descriptions.Item>
          </Descriptions>
          <NavLink to="/">
            <Button className="BtnAddInfo" type="primary" size="default">Назад</Button>
          </NavLink>
        </div>
      ))}
    </div>


  )
}

export default ItemInfo;

