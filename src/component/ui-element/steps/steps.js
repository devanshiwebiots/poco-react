import React, { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
// import StepZilla from "react-stepzilla";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const Steps = () => {
  return (
    <Fragment>
      <Breadcrumb parent="Ui Elements" title="Steps" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Default Step</h5>
              </CardHeader>
              <CardBody>
                <Row className="u-steps">
                  <Col xl="4" className="u-step"><span className="u-step-number">1</span>
                    <div className="u-step-desc"><span className="u-step-title">Shopping</span>
                      <p>Choose what you want</p>
                    </div>
                  </Col>
                  <Col xl="4" className="u-step current"><span className="u-step-number">2</span>
                    <div className="u-step-desc"><span className="u-step-title">Billing</span>
                      <p>Pay for the bill</p>
                    </div>
                  </Col>
                  <Col xl="4" className="u-step"><span className="u-step-number">3</span>
                    <div className="u-step-desc"><span className="u-step-title">Getting</span>
                      <p>Waiting for the goods</p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Step with icon</h5>
              </CardHeader>
              <CardBody>
                <Row className="u-steps">
                  <Col md="4" className="u-step"><span className="u-step-icon icon-shopping-cart-full" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
                  </Col>
                  <Col md="4" className="u-step current"><span className="u-step-icon icon-notepad" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
                  </Col>
                  <Col md="4" className="u-step"><span className="u-step-icon icon-time" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Step States</h5>
                <span>
                  A u-step with classname <code>.done</code> A u-step with
                  classname <code>.error</code>A u-step with classname{" "}
                  <code>.current</code>A u-step with classname{" "}
                  <code>.disabled</code>
                </span>
              </CardHeader>
              <CardBody>
                <Row className="row-lg">
                  <Col xl="3" lg="6">
                    <div className="u-step done bg-primary"><span className="u-step-number txt-primary">1</span>
                      <div className="u-step-desc"><span className="u-step-title">Getting</span>
                        <p className='text-light' >Waiting for the goods</p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" lg="6" className="steps-md-mt">
                    <div className="u-step error bg-secondary"><span className="u-step-number txt-secondary">2</span>
                      <div className="u-step-desc"><span className="u-step-title">Getting</span>
                        <p className='text-light' >Waiting for the goods</p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" lg="6" className="lg-mt">
                    <div className="u-step current bg-success"><span className="u-step-number txt-success">3</span>
                      <div className="u-step-desc"><span className="u-step-title">Getting</span>
                        <p>Waiting for the goods</p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" lg="6" className="lg-mt">
                    <div className="u-step disabled"><span className="u-step-number">4</span>
                      <div className="u-step-desc"><span className="u-step-title">Getting</span>
                        <p>Waiting for the goods</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Step Sizing</h5>
                <span>
                  A step with classname <code>.u-steps-xs</code>
                  <code>.u-steps-sm</code>
                  <code>.u-steps-lg</code>
                </span>
              </CardHeader>
              <CardBody>
                <Row className="u-steps u-steps-xs steps-sizing-sm-mb">
                  <Col md="4" className="u-step"><span className="u-step-icon icon wb-shopping-cart" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
                  </Col>
                  <Col md="4" className="u-step current"><span className="u-step-icon icon wb-pluse" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
                  </Col>
                  <Col md="4" className="u-step"><span className="u-step-icon icon wb-time" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
                  </Col>
                </Row>
                <Row className="u-steps u-steps-sm steps-sizing-sm-mb">
                  <Col md="4" className="u-step"><span className="u-step-icon icon wb-shopping-cart" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
                  </Col>
                  <Col md="4" className="u-step current"><span className="u-step-icon icon wb-pluse" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
                  </Col>
                  <Col md="4" className="u-step"><span className="u-step-icon icon wb-time" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
                  </Col>
                </Row>
                <Row className="u-steps steps-sizing-sm-mb">
                  <Col md="4" className="u-step"><span className="u-step-icon icon wb-shopping-cart" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
                  </Col>
                  <Col md="4" className="u-step current"><span className="u-step-icon icon wb-pluse" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
                  </Col>
                  <Col md="4" className="u-step"><span className="u-step-icon icon wb-time" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
                  </Col>
                </Row>
                <Row className="u-steps u-steps-lg">
                  <Col md="4" className="u-step"><span className="u-step-icon icon wb-shopping-cart" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
                  </Col>
                  <Col md="4" className="u-step current"><span className="u-step-icon icon wb-pluse" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
                  </Col>
                  <Col md="4" className="u-step"><span className="u-step-icon icon wb-time" aria-hidden="true"></span>
                    <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Vertical Step</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xl="4">
                    <div className="u-steps u-steps-vertical">
                      <div className="u-step"><span className="u-step-number">1</span>
                        <div className="u-step-desc"><span className="u-step-title">Shopping</span>
                          <p> Choose what you want</p>
                        </div>
                      </div>
                      <div className="u-step current"><span className="u-step-number">2</span>
                        <div className="u-step-desc"><span className="u-step-title">Billing</span>
                          <p>Pay for the bill</p>
                        </div>
                      </div>
                      <div className="u-step"><span className="u-step-number">3</span>
                        <div className="u-step-desc"><span className="u-step-title">Getting</span>
                          <p>Waiting for the goods</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Default Pearls Steps</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <div className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></div>
                  <div className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></div>
                  <div className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Pearls Steps with icon</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <div className="u-pearl done col-4">
                    <div className="u-pearl-icon"><i className="icon-shopping-cart" aria-hidden="true"></i></div><span className="u-pearl-title">Account Info</span>
                  </div>
                  <div className="u-pearl current col-4">
                    <div className="u-pearl-icon"><i className="icon-write" aria-hidden="true"></i></div><span className="u-pearl-title">Billing Info</span>
                  </div>
                  <div className="u-pearl col-4">
                    <div className="u-pearl-icon"><i className="icon-check" aria-hidden="true"></i></div><span className="u-pearl-title">Confirmation</span>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Pearls Step Sizing</h5>
                <span>
                  A Pearls step with classname <code>.u-pearls-xs</code>
                  <code>.u-pearls-sm</code>
                  <code>.u-pearls-lg</code>
                </span>
              </CardHeader>
              <CardBody>
                <Row className="u-pearls-xs mb-5">
                  <div className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></div>
                  <div className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></div>
                  <div className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></div>
                </Row>
                <Row className="u-pearls-sm mb-5">
                  <div className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></div>
                  <div className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></div>
                  <div className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></div>
                </Row>
                <Row className="mb-5">
                  <div className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></div>
                  <div className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></div>
                  <div className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></div>
                </Row>
                <Row className="u-pearls-lg">
                  <div className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></div>
                  <div className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></div>
                  <div className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Pearls Step States</h5>
                <span>
                  A pearls step states with different class<code>.done</code>
                  <code>.currunt</code>
                  <code>.error</code>
                  <code>.disabled</code>
                </span>
              </CardHeader>
              <CardBody>
                <Row className="mb-5">
                  <div className="u-pearl current col-4">
                    <div className="u-pearl-icon">1</div><span className="u-pearl-title">Account Info</span>
                  </div>
                  <div className="u-pearl disabled col-4">
                    <div className="u-pearl-icon">2</div><span className="u-pearl-title">Billing Info</span>
                  </div>
                  <div className="u-pearl disabled col-4">
                    <div className="u-pearl-icon">3</div><span className="u-pearl-title">Confirmation</span>
                  </div>
                </Row>
                <Row className="mb-5">
                  <div className="u-pearl done col-4">
                    <div className="u-pearl-icon">1</div><span className="u-pearl-title">Account Info</span>
                  </div>
                  <div className="u-pearl current col-4">
                    <div className="u-pearl-icon">2</div><span className="u-pearl-title">Billing Info</span>
                  </div>
                  <div className="u-pearl disabled col-4">
                    <div className="u-pearl-icon">3</div><span className="u-pearl-title">Confirmation</span>
                  </div>
                </Row>
                <Row className="mb-5">
                  <div className="u-pearl done col-4">
                    <div className="u-pearl-icon">1</div><span className="u-pearl-title">Account Info</span>
                  </div>
                  <div className="u-pearl current error col-4">
                    <div className="u-pearl-icon">2</div><span className="u-pearl-title">Billing Info</span>
                  </div>
                  <div className="u-pearl disabled col-4">
                    <div className="u-pearl-icon">3</div><span className="u-pearl-title">Confirmation</span>
                  </div>
                </Row>
                <Row>
                  <div className="u-pearl done col-4">
                    <div className="u-pearl-icon">1</div><span className="u-pearl-title">Account Info</span>
                  </div>
                  <div className="u-pearl done col-4">
                    <div className="u-pearl-icon">2</div><span className="u-pearl-title">Billing Info</span>
                  </div>
                  <div className="u-pearl current col-4">
                    <div className="u-pearl-icon">3</div><span className="u-pearl-title">Confirmation</span>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Steps;
