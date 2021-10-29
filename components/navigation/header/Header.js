import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Logo } from './styles';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { ROUTES_KEYS, COLORS } from '../../../utils/constants';

const { SubMenu } = Menu;

const Header = () => {
  const router = useRouter();
  const getInitialWindowWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
  };
  const [currentKey, setCurrentKey] = useState(`${ROUTES_KEYS.HOME}`);
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
    // router.push(get(e, 'key'));
  };

  const calculateLogoMargins = (width, side) => {
    if (!width) {
      return 0;
    }
    if (width > 1200) {
      if (side === 'right') {
        return width * 0.4;
      }
      return width * 0.15;
    } else if (width >= 700 && width <= 1200) {
      if (side === 'right') {
        return width * 0.3;
      }
      return width * 0.1;
    } else if (width < 700 && width >= 500) {
      if (side === 'right') {
        return width * 0.2;
      }
      return width * 0.05;
    } else {
      if (side === 'right') {
        return width * 0.2;
      }
      return 0;
    }
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
      <SubMenu key={`${ROUTES_KEYS.TECHNOLOGIES}`} title='Technologies'>
        <Menu.ItemGroup>
          <Menu.Item
            key={`${ROUTES_KEYS.NANEOS}`}
            style={{
              'margin-left': '-12px',
              'margin-bottom': '-5px',
            }}
          >
            Naneos
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.UCNPS}`}
            style={{ 'margin-bottom': '-5px' }}
          >
            Upconverting Nanoparticles (UCNPs)
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.NANO_PEROVSKITE}`}
            style={{ 'margin-bottom': '-5px' }}
          >
            Nano Perovskite
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.ORGANIC}`}
            style={{ 'margin-bottom': '-5px' }}
          >
            Organic
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.POLYIPNOS}`}
            style={{ 'margin-left': '-12px', 'margin-bottom': '-5px' }}
          >
            Polyipnos
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.ENLIT}`}
            style={{ 'margin-left': '-12px' }}
          >
            Enlit
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key={`${ROUTES_KEYS.CONTACT_US}`}>Contact Us</Menu.Item>
    </Menu>
  );
};

export default Header;
