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
} from './styles';

const AntiDustCoatings = () => {
  return (
    <Row align='top' style={{ minHeight: '94vh', maxWidth: '1980px' }}>
      <TitleCol span={24}>
        <Title>Products</Title>
        <Tagline>Technologies > Enlit > Anti-Dust Coatings</Tagline>
      </TitleCol>
      <StyledRow>
        <LeftCol
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 12, order: 1 }}
          lg={{ span: 12, order: 1 }}
        >
          <Image
            src='/anti-dust-coatings/sg100.webp'
            alt='SG 100 Anti Dust Coating'
          />
        </LeftCol>
        <RightCol
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          md={{ span: 12, order: 2 }}
          lg={{ span: 12, order: 2 }}
        >
          <ProductTitle>SG 100 - Anti-Dust Coating</ProductTitle>
          <ProductItem>
            <ul>
              <li>
                Easy to use coating that keeps surfaces free from dirt and dust
              </li>
              <li>Durable coating, suitable for outdoor use</li>
              <li>Water-based forumla, no harsh chemicals</li>
              <li>
                Suitable for surfaces including painted walls, tiles, signage,
                glass, film, stickers, aluminum cladding, powder coated surfaces
                and plastics
              </li>
            </ul>
          </ProductItem>
        </RightCol>
        <LeftCol
          xs={{ span: 24, order: 4 }}
          sm={{ span: 24, order: 4 }}
          md={{ span: 12, order: 3 }}
          lg={{ span: 12, order: 3 }}
        >
          <ProductTitle>SG 100 PV - Anti-Dust Coating</ProductTitle>
          <ProductItem>
            <ul>
              <li>Used for solar panels</li>
              <li>
                Improved long term efficiency by keeping the top surface clean
              </li>
              <li>Suitable for areas with high panel wash frequency</li>
              <li>Does not corrode components</li>
              <li>Water-based formula, no harsh chemicals</li>
            </ul>
          </ProductItem>
        </LeftCol>
        <RightCol
          xs={{ span: 24, order: 3 }}
          sm={{ span: 24, order: 3 }}
          md={{ span: 12, order: 4 }}
          lg={{ span: 12, order: 4 }}
        >
          <Image
            src='/anti-dust-coatings/sg100pv.webp'
            alt='SG 100 PV Anti Dust Coating'
          />
        </RightCol>
      </StyledRow>
    </Row>
  );
};

export default AntiDustCoatings;
