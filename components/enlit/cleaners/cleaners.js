import React, { useState } from 'react';
import { get } from 'lodash';
import { Row } from 'antd';
import {
  TitleCol,
  Title,
  Tagline,
  StyledRow,
  ProductTitle,
  ProductItem,
  Image,
  LeftCol,
  RightCol,
  LeftRow,
  SmallImageDiv,
  ScrollCol,
  BigImageCol,
  BigImage,
} from './styles';

const data = {
  bb09: {
    title: 'BB-09 AC Coil Cleaner',
    info: [
      'Great for cleaning hard to reach areas',
      'Long lasting citrus scent',
      'Water-based formula, does not corrode',
      'No-rinse formula, simply spray then wipe off',
    ],
    image: '/cleaners/bb09.webp',
    name: 'bb09',
  },
  bb10: {
    title: 'BB-10 Stain and Mold Remover',
    info: [
      'Industrial grade cleaner',
      'Can be used on multiple surfaces including ceramic tiles, vinyl, kitchen tops and Formica',
      'Designed to remove stubborn stains, dirt, grease, mold and algae',
      'Water-based formula, acts as disinfectant',
      'No-rinse formula, simply spray and wipe off',
    ],
    image: '/cleaners/bb10.webp',
    name: 'bb10',
  },
  bb12: {
    title: 'BB-12 Anti-Microbial Cleaner',
    info: [
      'Unique Clean and Coat System',
      'Can be used on multiple surfaces including ceramic tiles, vinyl, kitchen tops and Formica',
      'Leaves an anti-microbial effect on surfaces for up to 7 days after application',
      'Water-based formula, non flammable',
      'No-rinse formula, simply spray and wipe off',
    ],
    image: '/cleaners/bb12.webp',
    name: 'bb12',
  },
  bb14: {
    title: 'BB-14 Automotive Degreaser',
    info: [
      'High strength degreaser',
      'Non-flammable formulation',
      'Can be used for most applications in the automative and marine industries',
      'No rinse needed, simply spray and wipe off',
    ],
    image: '/cleaners/bb14.webp',
    name: 'bb14',
  },
  bb15: {
    title: 'BB-15 Glass Cleaner',
    info: [
      'Fast drying, leaves no water marks',
      'Prevents dust build up after cleaning',
      'Easy wash feature',
      'Water-based formula with no harsh solvents',
    ],
    image: '/cleaners/bb15.webp',
    name: 'bb15',
  },
};

const Cleaners = () => {
  const [selected, setSelected] = useState(get(data, 'bb09'));

  const generateList = (list) => {
    return list.map((el) => <li>{el}</li>);
  };

  const handleOnClickImage = (product) => {
    setSelected(get(data, product));
  };

  const generateImageSelection = () => {
    let arr = [];
    for (const key in data) {
      arr.push(
        <SmallImageDiv
          name={get(data[key], 'name')}
          onClick={() => handleOnClickImage(get(data[key], 'name'))}
          selectedName={get(selected, 'name')}
        >
          <Image src={get(data[key], 'image')} alt={get(data[key], 'title')} />
        </SmallImageDiv>
      );
    }
    return arr;
  };

  return (
    <Row align='top' style={{ minHeight: '94vh', maxWidth: '1980px' }}>
      <TitleCol span={24}>
        <Title>Products</Title>
        <Tagline>Technologies > Enlit > Cleaners</Tagline>
      </TitleCol>
      <StyledRow>
        <LeftCol xs={24} sm={14} md={14} lg={14}>
          <LeftRow gutter={{ xs: 0, sm: 0, md: 24, lg: 32 }} align='end'>
            <ScrollCol xs={24} sm={24} md={24} lg={6}>
              {generateImageSelection()}
            </ScrollCol>
            <BigImageCol xs={0} sm={0} md={0} lg={13}>
              <BigImage src={get(selected, 'image')} />
            </BigImageCol>
          </LeftRow>
        </LeftCol>
        <RightCol xs={24} sm={10} md={10} lg={10}>
          <ProductTitle>{get(selected, 'title')}</ProductTitle>
          <ProductItem>
            <ul>{generateList(get(selected, 'info'))}</ul>
          </ProductItem>
        </RightCol>
      </StyledRow>
    </Row>
  );
};

export default Cleaners;
