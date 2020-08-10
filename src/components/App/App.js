import React from 'react';
import {Layout} from 'antd';
import AppHeader from "../Header/Header";
import './App.css';
import MainPage from "../MainPage/MainPage";
import ItemInfo from "../ItemInfo/ItemInfo";
import {Route,Switch} from "react-router-dom";

export default function App() {
  const {Header, Content, Footer} = Layout;

  return (
    <Layout className="layout">
      <Header style={{ minWidth: "650px", width: "100%"}}>
        <AppHeader/>
      </Header>
      <Content style={{padding: '0 50px'}}>
        <div className="site-layout-content">
          <Switch>
            <Route exact path='/'
                   render={() => <MainPage/>}/>
            <Route path='/region-info/:order'
                   render={() => <ItemInfo />}/>
          </Switch>
        </div>
      </Content>
      <Footer style={{textAlign: 'center', minWidth: "650px", width: "100%"}}>Sergey Klokov Test 2020</Footer>
    </Layout>
  )
};
