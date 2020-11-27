import { Row, Col } from "antd";
import * as Constants from "../../../utils/constants";
import data from "../../../utils/content.json";
import { Table } from "antd";
import styled from "styled-components";

const InfoColStyled = styled(Col)`
  && {
    padding: 30px;
  }
`;

const TableColStyled = styled(Col)`
  && {
    padding: 30px;
    background-color: ${Constants.lightestGray};
  }
`;

const TableStyled = styled(Table)`
  && {
    font-family: "Montserrat", sans-serif;
    tr,
    th {
      font-size: 12px;
    }
    thead tr th {
      background-color: ${Constants.semiBlack};
      color: white;
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
      <InfoColStyled span={24}></InfoColStyled>
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
