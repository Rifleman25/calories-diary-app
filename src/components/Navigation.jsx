import React, { useState, useEffect } from 'react';
import {DesktopOutlined,FileOutlined,PieChartOutlined,TeamOutlined,UserOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {useNavigate} from 'react-router-dom'
import MainPages from '../Const/MainPages';

const { Sider } = Layout;

function getItem(label, key, children) {
  return {key,children,label};
}

const Navigation = () => {
  // Панель навигации(табы)
  const [items, setItems] = useState([]);
  // Скрыт или нет список дочерних табов
  const [collapsed, setCollapsed] = useState(false);

  // Редирект на нужную страницу при выборе табы в навигационной панеле
  const navigate = useNavigate();
  const menuClickHandler = ({key}) => {
      navigate(key);
  };

  // Формируем список табов для отображения
  useEffect(() => {
    setItems(MainPages.map((page) => {
      return getItem(page.label, page.path, page.children 
        ? page.children.map(item => {return getItem(item.label, item.path, null)}) : page.children)
    }));
  }, []);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClickHandler}/>
    </Sider>
  );
};
export default Navigation;