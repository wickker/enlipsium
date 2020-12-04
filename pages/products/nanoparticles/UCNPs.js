import { Row, Col } from "antd";
import * as Constants from "../../../utils/constants";
import data from "../../../utils/content.json";
import { Table } from "antd";
import styled from "styled-components";

const TitleColStyled = styled(Col)`
  && {
    padding: 30px;
    height: 50vh;
    background-color: ${Constants.darkGray};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TitleProductCol = styled(Col)`
  && {
    text-align: center;
    color: white;
    font-size: 70px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    @media (max-width: 400px) {
      font-size: 50px;
    }
  }
`;

const TitleProductDetailCol = styled(Col)`
  && {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 18px;
    @media (max-width: 400px) {
      font-size: 16px;
    }
  }
`;

const InfoColStyled = styled(Col)`
  && {
    padding: 30px;
    @media (max-width: 540px) {
      padding: 30px 30px 0 30px;
    }
  }
`;

const ImageCol = styled(Col)`
  && {
    padding-right: 30px;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      padding-right: 0;
      margin-bottom: 30px;
    }
  }
`;

const ImageStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10%;
`;

const DetailsCol = styled(Col)`
  && {
    padding-left: 30px;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      padding-left: 0;
    }
  }
`;

const DetailsName = styled(Col)`
  && {
    font-size: 50px;
    line-height: 1.3;
    color: ${Constants.gray};
    margin-bottom: 20px;
    @media (max-width: 400px) {
      font-size: 40px;
    }
  }
`;

const DetailsApplications = styled(Col)`
  && {
    font-size: 17px;
    color: ${Constants.semiBlack};
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    margin-bottom: 10px;
    @media (max-width: 400px) {
      font-size: 16px;
    }
  }
`;

const Details = styled(Col)`
  && {
    font-size: 16px;
    color: ${Constants.semiBlack};
    font-family: "Montserrat", sans-serif;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

const DetailsContact = styled(Col)`
  && {
    font-size: 16px;
    color: ${Constants.semiBlack};
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    margin-top: 20px;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

const TableColStyled = styled(Col)`
  && {
    padding: 30px;
    background-color: ${Constants.lightestGray};
    @media (max-width: 540px) {
      background-color: white;
      padding: 30px 0;
    }
  }
`;

const TableStyled = styled(Table)`
  && {
    font-family: "Montserrat", sans-serif;
    tr,
    th {
      font-size: 14px;
    }
    thead tr th {
      background-color: ${Constants.marine};
      color: white;
    }
    @media (max-width: 540px) {
      tr,
      th {
        font-size: 12px;
      }
    }
  }
`;

export default function UCNPs() {
  const renderDescription = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    obj.props.rowSpan = 0;
    if (index === 0 || index === 4 || index === 8) {
      obj.props.rowSpan = 4;
    }
    if (index === 12) {
      obj.props.rowSpan = 1;
    }
    return obj;
  };

  const renderAbsMax = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 12) {
      obj.props.colSpan = 2;
      obj.props.align = "left";
    }
    return obj;
  };

  const renderEmissionMax = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 12) {
      obj.props.colSpan = 0;
    }
    return obj;
  };

  const renderSurface = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    obj.props.rowSpan = 0;
    if (index === 0) {
      obj.props.rowSpan = 8;
    }
    if (index === 8) {
      obj.props.rowSpan = 4;
    }
    if (index === 12) {
      obj.props.rowSpan = 1;
    }
    return obj;
  };

  const renderPackSize = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    obj.props.rowSpan = 0;
    if (index === 0) {
      obj.props.rowSpan = 13;
    }
    return obj;
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "item_num",
    },
    {
      title: "Description",
      dataIndex: "description",
      render: renderDescription,
    },
    {
      title: "Adbsorption Max",
      dataIndex: "abs_max",
      render: renderAbsMax,
    },
    {
      title: "Emission Max",
      dataIndex: "emission_max",
      render: renderEmissionMax,
    },
    {
      title: "Surface",
      dataIndex: "surface",
      render: renderSurface,
    },
    {
      title: "Pack Size",
      dataIndex: "pack_size",
      render: renderPackSize,
    },
  ];

  const mapData = () => {
    return data.ucnps.map((item) => {
      return {
        key: item.key,
        item_num: item.key,
        description: item.description,
        abs_max: item.abs_max,
        emission_max: item.emission_max,
        surface: item.surface,
        pack_size: item.pack_size,
      };
    });
  };

  return (
    <Row>
      <TitleColStyled span={24}>
        <Row>
          <TitleProductCol span={24}>Products</TitleProductCol>
          <TitleProductDetailCol span={24}>
            Nanoparticles > Upconverting Nanoparticles (UCNPs)
          </TitleProductDetailCol>
        </Row>
      </TitleColStyled>
      <InfoColStyled span={24}>
        <Row>
          <ImageCol xs={24} sm={24} md={12} lg={12}>
            <ImageStyled
              src="http://via.placeholder.com/700x500"
              alt="Upconverting nanoparticles"
            />
          </ImageCol>
          <DetailsCol xs={24} sm={24} md={12} lg={12}>
            <Row>
              <DetailsName span={24}>
                Upconverting Nanoparticles (UCNPs)
              </DetailsName>
              <DetailsApplications span={24}>Applications:</DetailsApplications>
              <Details span={24}>
                <ul>
                  <li>Biosensors</li>
                  <li>Flow cytometry</li>
                  <li>Highly sensitive bio-imaging</li>
                  <li>Immunoassay</li>
                  <li>Light-responsive drug release</li>
                  <li>Molecular recognition</li>
                  <li>Photosensitizers in photodynamic therapy</li>
                </ul>
              </Details>
              <DetailsContact span={24}>
                Please <a href="mailto:ttham@enlipsium.com">contact us</a>{" "}
                for quotation/ more information on our products. We will be glad
                to assist you!
              </DetailsContact>
            </Row>
          </DetailsCol>
        </Row>
      </InfoColStyled>
      <TableColStyled span={24}>
        <TableStyled
          columns={columns}
          dataSource={mapData()}
          bordered
          pagination={false}
          size="small"
        />
      </TableColStyled>
    </Row>
  );
}
