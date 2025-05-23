import React, { Fragment } from "react";
import Breadcrum from "../common/breadcrumb/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
const Breadcrumbs = (props) => {
  return (
    <Fragment>
      <Breadcrum parent="Ui Elements" title="Breadcrumb" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Default bootstrap breadcrumb</h5>
                <span>
                  use class <code>.breadcrumb to ol</code>
                </span>
              </CardHeader>
              <CardBody>
                <ol className="breadcrumb m-b-0 bg-white p-t-0 p-l-0">
                  <BreadcrumbItem active>Home</BreadcrumbItem>
                </ol>
                <ol className="breadcrumb m-b-0 bg-white p-t-0 p-l-0">
                  <BreadcrumbItem tag="a" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </ol>
                <ol className="breadcrumb m-b-0 bg-white p-t-0 p-l-0">
                  <BreadcrumbItem tag="a" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    Library
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Data</BreadcrumbItem>
                </ol>
                <ol className="breadcrumb m-b-0 bg-white p-t-0 p-l-0">
                  <BreadcrumbItem tag="a" href="#">
                    <i className="fa fa-home"></i>
                  </BreadcrumbItem>
                  <BreadcrumbItem>Library</BreadcrumbItem>
                  <BreadcrumbItem active>Data</BreadcrumbItem>
                </ol>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Nav breadcrumb</h5>
                <span>
                  use class <code>.breadcrumb to nav</code> similar to
                  navigation
                </span>
              </CardHeader>
              <CardBody>
                <Breadcrumb className="mb-0 nav-breadcrumb">
                  <BreadcrumbItem tag="a" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    Library
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Bootstrap</BreadcrumbItem>
                </Breadcrumb>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Colored breadcrumb</h5>
                <span>
                  use class <code>.breadcrumb-colored .bg-primary</code>
                </span>
              </CardHeader>
              <CardBody>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-primary">
                  <BreadcrumbItem href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-secondary">
                  <BreadcrumbItem href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-success">
                  <BreadcrumbItem href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-info">
                  <BreadcrumbItem href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-warning">
                  <BreadcrumbItem href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-danger">
                  <BreadcrumbItem href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-light">
                  <BreadcrumbItem href="#" className="txt-dark">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem active className="txt-dark">
                    Library
                  </BreadcrumbItem>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-0 bg-dark">
                  <BreadcrumbItem href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </ol>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;
