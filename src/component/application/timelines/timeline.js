import React, { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import TimelineMain from "./timelineMain";
import VerticalTimelineComp from "./verticalTimelineComp";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const Timeline = () => {
  return (
    <Fragment>
      <Breadcrumb parent="Apps / Timeline" title="Timeline 1" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Example 1</h5>
              </CardHeader>
              <CardBody>
                <TimelineMain />
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Example 2</h5>
              </CardHeader>
              <CardBody>
                <VerticalTimelineComp />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Timeline;
