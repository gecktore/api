import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Spin } from 'antd';
import axios from 'axios';
import CryptoCurrencyCard from './components/CryptoCurrencyCard';

function getItem(label, key, icon, children, type){
  return {
    key, icon, children, label, type,
  };
}

const App = () => {
  const [currensies, setCurrencies] = useState([])
  const [currencyID, setCurrencyID] = useState(1)
  const [currencyData, setCurrencyData] = useState(null)


  const fetchCurrencies = () => {
    axios.get('http://127.0.0.1:8000/currencies').then(r => {
      const currencyResponse = r.data
      const menuItems = [
        getItem(
          'Список криптовалют', 'g1', null,
          currencyResponse.map(c => {
            return {label: c.name, key: c.id}
          }),
          'group',
        )
      ]
      setCurrencies(menuItems)
    })
  }

  const fetchCurrency = () => {
    axios.get(`http://127.0.0.1:8000/currencies/${currencyID}`).then(r => {
      setCurrencyData(r.data)
    })
  }

  useEffect(() =>{
    fetchCurrencies()
  }, []);

  useEffect(() =>{
    setCurrencyData(null)
    fetchCurrency()
  }, [currencyID]);

  const onClick = (e) => {
    setCurrencyID(e.key)
  };

  return (
    <div className='flex'>  
    <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    items={currensies}
    className='h-screen overflow-scroll'
  />
  <div className='mx-auto my-auto'>
   {currencyData ? <CryptoCurrencyCard currency={currencyData}/>:<Spin size='large'/>}
  </div>
  </div>
    
  );
};
export default App;