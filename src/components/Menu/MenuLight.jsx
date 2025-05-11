import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import "./Menu.scss";

const MenuLight = () => {
  const {logout} = useAuth();
  const location = useLocation();
  const navigator = useNavigate();

  const logoutAndRedirect = async() => {
    await logout();
    navigator('/');
  };

  const isActive = (pathPart) =>
    location.pathname.includes(pathPart) ? 'active-link menu-link' : 'menu-link';

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
        <Link to="/lessons">Уроки</Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link to="/testpage">Тесты</Link>
      ),
      key: '3',
    },
    {
      label: (
        <Link to="/dictionary">Мой словарь</Link>
      ),
      key: '4',
    },
    {
      label: (
        <Link to="/chat-bot">Чат-бот</Link>
      ),
      key: '5',
    },
    {
      label: (
        <a onClick={logoutAndRedirect}>Выйти</a>
      ),
      key: '6',
    },
  ];
  

  return (
    <div className='menu-container menu-light'>
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
    </div>
  )
}

export default MenuLight;