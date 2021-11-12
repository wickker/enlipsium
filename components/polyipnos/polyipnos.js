import { Row, Col } from 'antd';
import { COLORS } from '../../utils/constants';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import data from './content.json';
import { get } from 'lodash';
import {
  ImageCol,
  Tagline,
  TitleCol,
  EmptyCol,
  LeftContainer,
  Text,
  ArrowContainer,
  ArrowDiv,
  FontAwesomeIcon,
  TextTitle,
  RightContainer,
  MainContainer,
  StyledTable,
  TableCol,
  LogoImg,
} from './styles';

const Polyipnos = () => {
  const columns = [
    {
      dataIndex: 'condition',
      render: (text) => <b>{text}</b>,
    },
    {
      title: 'Polyipnos',
      dataIndex: 'polyipnos',
    },
    {
      title: 'Transparent Inks',
      dataIndex: 'transparentInks',
    },
    {
      title: 'Invisible Inks',
      dataIndex: 'invisibleInks',
    },
    {
      title: 'Visible Inks',
      dataIndex: 'visibleInks',
    },
  ];

  const generateDataSource = () => {
    return get(data, 'polyipnos').map((item) => {
      return {
        key: get(item, 'key'),
        condition: get(item, 'condition'),
        polyipnos: get(item, 'polyipnos'),
        transparentInks: get(item, 'transparent_inks'),
        invisibleInks: get(item, 'invisible_inks'),
        visibleInks: get(item, 'visible_inks'),
      };
    });
  };

  return (
    <Row align='top'>
      <ImageCol span={24}>
        <LogoImg src='polyipnos-logo-gimped.webp' alt='Polyipnos Logo' />
        <Tagline>Luminescence Nanocrystals</Tagline>
      </ImageCol>
      <TitleCol span={24}>
        Fight Counterfeits With{' '}
        <span style={{ color: `${COLORS.MARINE}` }}>Additive Technology</span>
      </TitleCol>
      <MainContainer>
        <LeftContainer xs={24} sm={24} md={24} lg={10}>
          <Text style={{ fontSize: '17px' }}>
            Based on lanthanide luminescence nanocrystal additive technology,
            Polyipnos creates secure identification markers that can be used to
            trace the origin of products and raw materials.
          </Text>
          <br />
          <Text style={{ fontSize: '17px' }}>
            Polyipnos technology involves tuning nanocrystals to emit a unique
            light frequency (or 'color') that is invisible to the naked eye.
            This invisible marker can be customized to experience excitation by
            either UV frequencies of 270nm/ 370nm or IR frequencies.
          </Text>
        </LeftContainer>
        <RightContainer xs={24} sm={24} md={24} lg={14}>
          <Row align='top'>
            <ArrowContainer xs={24} sm={12} md={12} lg={12}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <ArrowDiv>
                <TextTitle>Packaging Printing Inks</TextTitle>
                <Text style={{ fontSize: '16px' }}>
                  Our nanocrystals are optimized for both the packaging and
                  printing industries. Brand owners typically print their logos
                  on packaging with our signature Polyipnos anti-counterfeit
                  technology.
                </Text>
              </ArrowDiv>
            </ArrowContainer>
            <ArrowContainer xs={24} sm={12} md={12} lg={12}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <ArrowDiv>
                <TextTitle>Fabric Printing</TextTitle>
                <Text style={{ fontSize: '16px' }}>
                  Designers and brand owners can be assured their clients are
                  receiving authentic products printed with Polyipnos
                  anti-counterfeit technology.
                </Text>
              </ArrowDiv>
            </ArrowContainer>
            <ArrowContainer xs={24} sm={12} md={12} lg={12}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <ArrowDiv>
                <TextTitle>Plastic Component Printing</TextTitle>
                <Text style={{ fontSize: '16px' }}>
                  Our nanocrystals can be dispersed during the raw material
                  blending process. Manufacturers can better trace their
                  products and materials with Polyipnos.
                </Text>
              </ArrowDiv>
            </ArrowContainer>
            <ArrowContainer xs={24} sm={12} md={12} lg={12}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <ArrowDiv>
                <TextTitle>Unique Light Signature</TextTitle>
                <Text style={{ fontSize: '16px' }}>
                  Polyipnos is able to produce all 3 primary colors - red, blue
                  and green. This range enables us to work with clients no
                  matter their wavelength requirements and generate unique
                  security signatures detectable via spectrophotometer.
                </Text>
              </ArrowDiv>
            </ArrowContainer>
            <Col xs={24} sm={12} md={12} lg={12}></Col>
          </Row>
        </RightContainer>
      </MainContainer>
      <TableCol span={24}>
        <StyledTable
          columns={columns}
          dataSource={generateDataSource()}
          pagination={false}
          size='small'
          scroll={{ x: 400 }}
        />
      </TableCol>
      {/* <EmptyCol span={24} /> */}
    </Row>
  );
};

export default Polyipnos;
