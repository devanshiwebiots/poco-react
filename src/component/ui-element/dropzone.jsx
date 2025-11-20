import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
} from "reactstrap";
import { ToastContainer } from "react-toastify";
import CommonFileUpload from "../common/CommonFileUpload";
const Dropzones = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Ui Elements" title="Dropzone" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Single File Upload</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="dz-message needsclick">
                    <CommonFileUpload />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Multi only Image Upload</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <ToastContainer />
                  <div className="dz-message needsclick">
                    <CommonFileUpload multiple imagesOnly />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Multiple Image Video Audio Upload</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="dz-message needsclick">
                    <CommonFileUpload multiple />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Limitation File Upload</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="dz-message needsclick">
                    <CommonFileUpload />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Custom File Upload</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="dz-message needsclick">
                    <CommonFileUpload />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dropzones;
