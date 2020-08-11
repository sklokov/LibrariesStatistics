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
    <Layout style={{ minWidth: 461}}>
      <Layout>
        <Header className="site-layout-sub-header-background" id="header" style={{ padding: 0}}>
             <AppHeader/>
             </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, minWidth: 445}}>
            <Switch>
              <Route exact path='/'
                     render={() => <MainPage/>}/>
              <Route path='/region-info/:order'
                     render={() => <ItemInfo />}/>
            </Switch>
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Sergey Klokov Test 2020</Footer>
      </Layout>
    </Layout>
  )
};

