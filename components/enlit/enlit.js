import { Row } from 'antd';
import { COLORS, ROUTES_KEYS } from '../../utils/constants';
import Link from 'next/link';
import {
  ImageCol,
  LogoImg,
  Tagline,
  CardImg,
  CardCol,
  CardRow,
  TitleCol,
  EmptyCol,
  CardTitle,
  CardDescription,
  StyledCard,
  VideoRow,
  GifCol,
  GifImg,
  ProductImg,
  Overlay,
  OverlayText,
  OverlayCol,
} from './styles';

const Enlit = () => {
  return (
    <Row align='top'>
      <ImageCol span={24}>
        <LogoImg src='enlit-logo-gimped.png' alt='Enlit Logo' />
        <Tagline>Cleaner Than Clean</Tagline>
      </ImageCol>
      <TitleCol span={24}>Hydrophilic Nano Ceramic Coating</TitleCol>
      <CardRow justify='space-between'>
        <CardCol xs={24} sm={12} md={12} lg={6}>
          <StyledCard
            bordered={false}
            cover={
              <CardImg src='https://image.shutterstock.com/image-photo/elegant-wooden-home-terrace-balcony-600w-1538417267.jpg' />
            }
          >
            <CardTitle>
              <span>Self-Cleaning Coating For Houses</span>
            </CardTitle>
            <CardDescription>
              EnlitSG100 coating makes use of natural rain to wash your house -
              facilitating a sustainable, eco-friendly and economical approach
              to maintaining a cleaner and more beautiful housing exterior.
            </CardDescription>
          </StyledCard>
        </CardCol>
        <CardCol xs={24} sm={12} md={12} lg={6}>
          <StyledCard
            bordered={false}
            cover={<CardImg src='glass-facade.jpg' />}
          >
            <CardTitle>
              <span>Self-Rinsing Coating For Commercial Facade</span>
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus nisi libero. Nullam purus risus, eleifend et
              metus sit amet, rhoncus tempus sapien. Nam lobortis urna non
              libero iaculis, eget euismod tortor tincidunt.
            </CardDescription>
          </StyledCard>
        </CardCol>
        <CardCol xs={24} sm={12} md={12} lg={6}>
          <StyledCard
            bordered={false}
            cover={<CardImg src='solar-panel.jpg' />}
          >
            <CardTitle>
              <span>Anti-Dust Coating For Solar Panel</span>
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus nisi libero. Nullam purus risus, eleifend et
              metus sit amet, rhoncus tempus sapien. Nam lobortis urna non
              libero iaculis, eget euismod tortor tincidunt.
            </CardDescription>
          </StyledCard>
        </CardCol>
        <CardCol xs={24} sm={12} md={12} lg={6}>
          <StyledCard
            bordered={false}
            cover={
              <CardImg src='https://image.shutterstock.com/image-photo/march-182017-street-sign-that-600w-611403368.jpg' />
            }
          >
            <CardTitle>
              <span>Anti-Dust Coating On Traffic Signs</span>
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus nisi libero. Nullam purus risus, eleifend et
              metus sit amet, rhoncus tempus sapien. Nam lobortis urna non
              libero iaculis, eget euismod tortor tincidunt.
            </CardDescription>
          </StyledCard>
        </CardCol>
      </CardRow>
      <VideoRow align='space-between'>
        <GifCol xs={24} sm={24} md={24} lg={7}>
          <GifImg src='enlit1.gif' alt='Enlit Product Specs 1' />
          <GifImg src='before-after.webp' alt='Enlit Product Demo 1' />
        </GifCol>
        <GifCol xs={24} sm={24} md={24} lg={7}>
          <video controls={true} style={{ width: '100%' }}>
            <source src='http://kennethp42.sg-host.com/wp-content/uploads/2021/09/SG100-Final-preview.mp4' />
          </video>
        </GifCol>
        <GifCol xs={24} sm={24} md={24} lg={7}>
          <GifImg src='enlit2.webp' alt='Enlit Product Specs 2' />
          <GifImg src='before-after2.gif' alt='Enlit Product Demo 2' />
        </GifCol>
      </VideoRow>
      <OverlayCol span={24}>
        <ProductImg></ProductImg>
        <Overlay className='hello'>
          <OverlayText>
            Find out more{' '}
            <Link href={`${ROUTES_KEYS.CONTACT_US}`}>
              <a
                style={{ fontWeight: 900, color: `${COLORS.DARK_BLUE}` }}
              >
                HERE
              </a>
            </Link>
          </OverlayText>
        </Overlay>
      </OverlayCol>
      <EmptyCol span={24} />
    </Row>
  );
};

export default Enlit;
