import { Row, Col } from 'antd';
import { COLORS } from '../../../utils/constants';
import data from './content.json';
import { get } from 'lodash';
import {
  TitleCol,
  Title,
  Tagline,
  DetailsName,
  DetailsApplications,
  EmptyCol,
  TableCol,
  StyledTable,
  Container,
} from './styles';

const UCNPs = () => {
  const renderDescription = (value, row, index) => {
    const data = {
      children: value,
      props: {},
    };
    data.props.rowSpan = 0;
    if (index === 0 || index === 4 || index === 8) {
      data.props.rowSpan = 4;
    }
    if (index === 12) {
      data.props.rowSpan = 1;
    }
    return data;
  };

  const renderAbsMax = (value, row, index) => {
    const data = {
      children: value,
      props: {},
    };
    if (index === 12) {
      data.props.colSpan = 2;
      data.props.align = 'left';
    }
    return data;
  };

  const renderEmissionMax = (value, row, index) => {
    const data = {
      children: value,
      props: {},
    };
    if (index === 12) {
      data.props.colSpan = 0;
    }
    return data;
  };

  const renderSurface = (value, row, index) => {
    const data = {
      children: value,
      props: {},
    };
    data.props.rowSpan = 0;
    if (index === 0) {
      data.props.rowSpan = 8;
    }
    if (index === 8) {
      data.props.rowSpan = 4;
    }
    if (index === 12) {
      data.props.rowSpan = 1;
    }
    return data;
  };

  const renderPackSize = (value, row, index) => {
    const data = {
      children: value,
      props: {},
    };
    data.props.rowSpan = 0;
    if (index === 0) {
      data.props.rowSpan = 13;
    }
    return data;
  };

  const columns = [
    {
      title: 'No.',
      dataIndex: 'itemNum',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      render: renderDescription,
    },
    {
      title: 'Adbsorption Max',
      dataIndex: 'absMax',
      render: renderAbsMax,
    },
    {
      title: 'Emission Max',
      dataIndex: 'emissionMax',
      render: renderEmissionMax,
    },
    {
      title: 'Surface',
      dataIndex: 'surface',
      render: renderSurface,
    },
    {
      title: 'Pack Size',
      dataIndex: 'packSize',
      render: renderPackSize,
    },
  ];

  const generateDataSource = () => {
    return get(data, 'ucnps').map((item) => {
      return {
        key: get(item, 'key'),
        itemNum: get(item, 'key'),
        description: get(item, 'description'),
        absMax: get(item, 'abs_max'),
        emissionMax: get(item, 'emission_max'),
        surface: get(item, 'surface'),
        packSize: get(item, 'pack_size'),
      };
    });
  };

  return (
    <Row align='middle' justify='center'>
      <TitleCol span={24}>
        <Title>Products</Title>
        <Tagline>
          Technologies > Naneos > Upcoverting Nanoparticles (UCNPs)
        </Tagline>
      </TitleCol>
      <Container xs={24} sm={24} md={12} lg={12}>
        <img
          style={{ width: '100%' }}
          src='../../upconversion.jpg'
          alt='Upconverting Nanoparticles'
        />
      </Container>
      <Container xs={24} sm={24} md={12} lg={12} style={{ paddingBottom: '30px' }}>
        <DetailsName>Upconverting Nanoparticles (UCNPs)</DetailsName>
        <DetailsApplications>
          <span style={{ fontWeight: '900' }}>Applicatons:</span>
          <ul style={{ marginTop: '10px' }}>
            <li>Biosensors</li>
            <li>Flow cytometry</li>
            <li>Highly sensitive bio-imaging</li>
            <li>Immunoassay</li>
            <li>Light-responsive drug release</li>
            <li>Molecular recognition</li>
            <li>Photosensitizers in photodynamic therapy</li>
          </ul>
        </DetailsApplications>
        <DetailsApplications style={{ fontStyle: 'italic', marginTop: '30px' }}>
          Please{' '}
          <strong>
            <a
              style={{ color: `${COLORS.RED}` }}
              href='mailto:ttham@enlipsium.com'
            >
              contact us
            </a>
          </strong>{' '}
          for quotation/ more information on our products.
        </DetailsApplications>
      </Container>
      <TableCol span={24}>
        <StyledTable
          columns={columns}
          dataSource={generateDataSource()}
          bordered
          pagination={false}
          size='small'
          scroll={{ x: 400 }}
        />
      </TableCol>
      <EmptyCol span={24} />
    </Row>
  );
};

export default UCNPs;
