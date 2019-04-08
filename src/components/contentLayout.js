import React from "react";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const ContentLayout = ({ children }) => {
  return (
    <Row>
      <Col span={8}>
        <Title level={2}>New Requests</Title>
        {children}
      </Col>
      <Col span={8}>In progress</Col>
      <Col span={8}>Done</Col>
    </Row>
  );
};

export default ContentLayout;
