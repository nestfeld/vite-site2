import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const Menu = () => {
  const items = [
    {
      label: (
        <Link to="/profile">Профиль</Link>
      ),
      key: '0',
    },

    {
      label: (
        <Link to="/">Главная</Link>
      ),
      key: '1',
    },
    
    {
      label: (
        <Link to="/dictionary">Мой словарь</Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link to="/chat-bot">Чат-бот</Link>
      ),
      key: '3',
    },
    {
      label: (
        <Link to="/testpage">Тесты</Link>
      ),
      key: '4',
    },
    {
      label: (
        <Link to="/lessons">Уроки</Link>
      ),
      key: '5',
    },
  ];

  return (
    <Dropdown
      className='dropdown'
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a className="menu--link" onClick={(e) => e.preventDefault()}>
        <Space>
          Меню
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}

export default Menu