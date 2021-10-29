import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import {} from './styles';
import { get } from 'lodash';

const { SubMenu } = Menu;

const Header = () => {
  const getInitialWindowWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
  };
  const [currentKey, setCurrentKey] = useState('mail');
  const [windowWidth, setWindowWidth] = useState(getInitialWindowWidth());

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const updateWindowWidth = () => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      console.log('updating window width');
    }
  };

  const handleClick = (e) => {
    setCurrentKey(get(e, 'key'));
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[currentKey]} mode='horizontal'>
      <Menu.Item
        key='test'
        style={{
          'border-bottom': 'none',
          'margin-right': `${windowWidth * 0.2}px`,
        }}
      >
        <img src='https://via.placeholder.com/100x30' />
      </Menu.Item>
      <Menu.Item key='mail'>Navigation One</Menu.Item>
      <SubMenu key='SubMenu' title='Navigation Three - Submenu'>
        <Menu.ItemGroup title='Item 1'>
          <Menu.Item key='setting:1'>Option 1</Menu.Item>
          <Menu.Item key='setting:2'>Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title='Item 2'>
          <Menu.Item key='setting:3'>Option 3</Menu.Item>
          <Menu.Item key='setting:4'>Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key='alipay'>
        <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
