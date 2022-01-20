import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Exchanges from './Exchanges';
import News from './News';
import Homepage from './HomePage';
import Cryptocurrencies from './Cryptocurrencies';
import CryptoDetails from './CryptoDetails';
import NavigationBar from './NavigationBar';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <NavigationBar />
    </div>

    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'black', textAlign: 'center' }}>Copyright © 2022
        </Typography.Title>
        <Space style={{ color: 'black'}}>
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;