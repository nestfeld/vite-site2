import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import "./Menu.scss";

const Menu = () => {
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
        <Link to="/chat-bot">Чат-бот</Link>
      ),
      key: '2',
    },
    {
      label: (
        <a onClick={logoutAndRedirect}>Выйти</a>
      ),
      key: '3',
    },
  ];

  return (
    <div className=' menu-heavy'>
      <Link to="/lessons" className={isActive('/lessons')}>Уроки</Link>
      <Link to="/testpage" className={isActive('/testpage')}>Тесты</Link>
      <Link to="/dictionary" className={isActive('/dictionary')}>Мой словарь</Link>
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

export default Menu