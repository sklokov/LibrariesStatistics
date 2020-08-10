import React, { useEffect, useState } from 'react';
import { Layout, Menu, Radio, Select} from 'antd';
import '../MainPage/MainPage.css';
import axios from "axios";
import Item from "../Item/Item";


function MainPage() {
  const { Header, Content, Footer, Sider  } = Layout;
  const { SubMenu } = Menu;
  const { Option, OptGroup } = Select;


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredRegions, setFilteredRegions] = useState([]);
  const [sortOption, setSortOption] = useState([""]);

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
    setFilteredRegions(
      data.filter(dataItem =>
        dataItem.territory.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);


  function handleChangeRegionsAscend (event) {
    setFilteredRegions(
      data.sort((a, b) =>
        Number(a.libraries) - Number(b.libraries))
    );
  }

  function handleChangeRegionsDescend (event) {
    setFilteredRegions(
      data.sort((a, b) =>
        Number(b.libraries) - Number(a.libraries))
    );
  }

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="MainPageContainer">

      <div className="RadioButtons">
        <input
          type="text"
          placeholder="Поиск по региону"
          onChange={e => setSearch(e.target.value)}
        />
        <p><b>Сортировать</b></p>
        <Radio.Group className="RadioGroup" name="radiogroup">
          <Radio
            value="option1"
            checked={sortOption === "option1"}
            onClick={() => setSortOption("option1")}
            onChange={handleChangeRegionsDescend}
          >по убыванию</Radio>
          <Radio
            value="option2"
            checked={sortOption === "option2"}
            onClick={() => setSortOption("option2")}
            onChange={handleChangeRegionsAscend}
          >по возрастанию</Radio>
        </Radio.Group>
      </div>
      {filteredRegions.map((data, i) => (
        <Item key={i} {...data} >

        </Item>
      ))}
    </div>
  );
}

export default MainPage;
