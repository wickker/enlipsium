import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Logo } from './styles';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { ROUTES_KEYS } from '../../../utils/constants';

const { SubMenu } = Menu;

const Header = () => {
  const router = useRouter();
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
      console.log('windowWidth : ', window.innerWidth); // remove this later
    }
  };

  const handleClick = (e) => {
    setCurrentKey(get(e, 'key'));
    router.push(get(e, 'key'));
  };

  const calculateLogoMargins = (width, side) => {
    if (!width) {
      return 0;
    }
    if (width > 1200 && side === 'right') {
      return width * 0.4;
    }
    if (width > 1200 && side === 'left') {
      return width * 0.1;
    }
    if (side === 'right') {
      return width * 0.2;
    }
    return 0;
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[currentKey]}
      mode='horizontal'
      style={{ 'font-size': '16px' }}
    >
      <Menu.Item
        key={`${ROUTES_KEYS.HOME}`}
        style={{
          'border-bottom': 'none',
          'margin-right': `${calculateLogoMargins(windowWidth, 'right')}px`,
          'margin-left': `${calculateLogoMargins(windowWidth, 'left')}px`,
        }}
      >
        <Logo src='enlipsium-logo.jpg' alt='Enlipsium' />
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
