import React, { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import {
  Home,
  Airplay,
  Box,
  FileText,
  Server,
  Sidebar,
  Layout,
  CloudLightning,
  CreditCard,
  Sliders,
  BarChart,
  Map,
  GitPullRequest,
  FolderPlus,
} from "react-feather";
import { SubNavToggle } from "./navsComponent";
function Navs(props) {
  return (
    <Fragment>
      <Breadcrumb parent="Ui Elements" title="Navs" />
      <Container fluid={true} className="nav-page">
        <Row>
          <Col md="6">
            <Card className="height-equal">
              <CardHeader>
                <h5>Default Nav</h5>
              </CardHeader>
              <CardBody>
                <ul className="icon-lists border navs-icon">
                  <li>
                    <a href="#javascript">
                      <Home />
                      <span> Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <Airplay />
                      <span> Widgets</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <Box />
                      <span> Base</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <FileText />
                      <span> Forms</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <Server />
                      <span> Tables</span>
                    </a>
                  </li>
                </ul>
                <div className="onhover-dropdown navs-dropdown">
                  <Button color="primary" className="onhover-dropdown">
                    Dropdown example{" "}
                    <i className="icon-arrow-down align-middle ms-1"></i>
                  </Button>
                  <div className="onhover-show-div">
                    <ul className="icon-lists navs-icon">
                      <li>
                        <a href="#javascript">
                          <Home />
                          <span> Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Airplay />
                          <span> Widgets</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Box />
                          <span> Base</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <FileText />
                          <span> Forms</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Server />
                          <span> Tables</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="height-equal">
              <CardHeader>
                <h5>Item Bullets</h5>
              </CardHeader>
              <CardBody>
                <div className="border nav-list">
                  <ul className="nav-list-disc">
                    <li>
                      <a href="#javascript">
                        <i className="fa fa-angle-right"></i>
                        <span> Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="#javascript">
                        <i className="fa fa-angle-right"></i>
                        <span> Widgets</span>
                      </a>
                    </li>
                    <li>
                      <a href="#javascript">
                        <i className="fa fa-angle-right"></i>
                        <span> Base</span>
                      </a>
                    </li>
                    <li>
                      <a href="#javascript">
                        <i className="fa fa-angle-right"></i>
                        <span> Forms</span>
                      </a>
                    </li>
                    <li>
                      <a href="#javascript">
                        <i className="fa fa-angle-right"></i>
                        <span> Tables</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="onhover-dropdown navs-dropdown">
                  <Button color="primary" className="onhover-dropdown">
                    Dropdown example{" "}
                    <i className="icon-arrow-down align-middle ms-1"></i>
                  </Button>
                  <div className="onhover-show-div">
                    <div className="nav-list">
                      <ul className="nav-list-disc">
                        <li>
                          <a href="#javascript">
                            <i className="fa fa-angle-right"></i>
                            <span> Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a href="#javascript">
                            <i className="fa fa-angle-right"></i>
                            <span> Widgets</span>
                          </a>
                        </li>
                        <li>
                          <a href="#javascript">
                            <i className="fa fa-angle-right"></i>
                            <span> Base</span>
                          </a>
                        </li>
                        <li>
                          <a href="#javascript">
                            <i className="fa fa-angle-right"></i>
                            <span> Forms</span>
                          </a>
                        </li>
                        <li>
                          <a href="#javascript">
                            <i className="fa fa-angle-right"></i>
                            <span> Tables</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="height-equal">
              <CardHeader>
                <h5>Section and Separator</h5>
              </CardHeader>
              <CardBody>
                <ul className="icon-lists border navs-icon">
                  <li>
                    <h5 className="mb-0">General</h5>
                  </li>
                  <li>
                    <a href="#javascript">
                      <Home />
                      <span> Dashboard</span>
                    </a>
                  </li>
                  <li className="pb-0">
                    <a href="#javascript">
                      <Airplay />
                      <span>Widgets</span>
                    </a>
                  </li>
                  <li className="main-section">
                    <h5 className="mb-0">Layout</h5>
                  </li>
                  <li>
                    <a href="#javascript">
                      <Sidebar />
                      <span> Sidebar</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <Layout />
                      <span> Page Layout</span>
                    </a>
                  </li>
                  <li className="pb-0">
                    <a href="#javascript">
                      <CloudLightning />
                      <span> Footers</span>
                    </a>
                  </li>
                  <li className="separator"></li>
                  <li className="pt-0">
                    <Button color="outline-primary" className="btn btn-pill">
                      Log Out
                    </Button>
                  </li>
                </ul>
                <div className="onhover-dropdown navs-dropdown">
                  <Button color="primary" className="onhover-dropdown">
                    Dropdown example{" "}
                    <i className="icon-arrow-down align-middle ms-1"></i>
                  </Button>
                  <div className="onhover-show-div">
                    <ul className="icon-lists navs-icon">
                      <li>
                        <h5 className="mb-0">General</h5>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Home />
                          <span> Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Airplay />
                          <span> Widgets</span>
                        </a>
                      </li>
                      <li className="main-section">
                        <h5 className="mb-0">Layout</h5>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Sidebar />
                          <span> Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Layout />
                          <span> Page Layout</span>
                        </a>
                      </li>
                      <li className="pb-0">
                        <a href="#javascript">
                          <CloudLightning />
                          <span> Footers</span>
                        </a>
                      </li>
                      <li className="separator"></li>
                      <li className="pt-0">
                        <Button
                          color="outline-primary"
                          className="btn btn-pill"
                        >
                          Log Out
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="height-equal">
              <CardHeader>
                <h5>Active and Disabled Links</h5>
              </CardHeader>
              <CardBody>
                <ul className="icon-lists border navs-icon">
                  <li>
                    <a className="active" href="#javascript">
                      <Home />
                      <span> Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <Airplay />
                      <span> Widgets</span>
                    </a>
                  </li>
                  <li>
                    <a className="disabled" href="#javascript">
                      <Box />
                      <span> Base</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <FileText />
                      <span> Forms</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <Server />
                      <span> Tables</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <CreditCard />
                      <span> Cards</span>
                    </a>
                  </li>
                  <li>
                    <a className="disabled" href="#javascript">
                      <Sliders />
                      <span> Timeline</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <BarChart />
                      <span> Charts</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <Map />
                      <span> Maps</span>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <GitPullRequest />
                      <span> Editors</span>
                    </a>
                  </li>
                </ul>
                <div className="onhover-dropdown navs-dropdown">
                  <Button color="primary" className="onhover-dropdown">
                    Dropdown example{" "}
                    <i className="icon-arrow-down align-middle ms-1"></i>
                  </Button>
                  <div className="onhover-show-div">
                    <ul className="icon-lists navs-icon">
                      <li>
                        <a className="active" href="#javascript">
                          <Home />
                          <span> Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Airplay />
                          <span> Widgets</span>
                        </a>
                      </li>
                      <li>
                        <a className="disabled" href="#javascript">
                          <Box />
                          <span> Base</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <FileText />
                          <span> Forms</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Server />
                          <span> Tables</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <CreditCard />
                          <span> Cards</span>
                        </a>
                      </li>
                      <li>
                        <a className="disabled" href="#javascript">
                          <Sliders />
                          <span> Timeline</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <BarChart />
                          <span> Charts</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Map />
                          <span> Maps</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <GitPullRequest />
                          <span> Editors</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-xl-6 xl-40 box-col-5" lg="12">
            <Card>
              <CardHeader>
                <h5>Inline Nav</h5>
              </CardHeader>
              <CardBody>
                <ul className="icon-lists border navs-icon inline-nav">
                  <li>
                    <a href="#javascript">
                      <Box />
                      <span> Base</span>
                    </a>
                  </li>
                  <li className="ps-navs-inline">
                    <a href="#javascript">
                      <i className="fa fa-angle-right"></i>
                      <span> State Color</span>
                    </a>
                  </li>
                  <li className="ps-navs-inline">
                    <a href="#javascript">
                      <i className="fa fa-angle-right"></i>
                      <span> Typography</span>
                    </a>
                  </li>
                  <li className="ps-navs-inline">
                    <a href="#javascript">
                      <i className="fa fa-angle-right"></i>
                      <span> Grid</span>
                    </a>
                  </li>
                  <li className="ps-navs-inline">
                    <a href="#javascript">
                      <i className="fa fa-angle-right"></i>
                      <span> Tags & Pills</span>
                    </a>
                  </li>
                  <li className="ps-navs-inline">
                    <a href="#javascript">
                      <i className="fa fa-angle-right"></i>
                      <span> Progress</span>
                    </a>
                  </li>
                  <li className="ps-navs-inline">
                    <a href="#javascript">
                      <i className="fa fa-angle-right"></i>
                      <span> Modal</span>
                    </a>
                  </li>
                  <li className="ps-navs-inline">
                    <a href="#javascript">
                      <i className="fa fa-angle-right"></i>
                      <span> Alert</span>
                    </a>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6 xl-60 box-col-7" lg="12">
            <Card>
              <CardHeader>
                <h5>Sub Nav</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="6">
                    <div>
                      <h5>Static Sub Nav</h5>
                    </div>
                    <ul className="icon-lists border navs-icon">
                      <li>
                        <a href="#javascript">
                          <Box />
                          <span> Base</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <FolderPlus />
                          <span>Advance</span>
                        </a>
                        <ul>
                          <li className="ps-navs-inline">
                            <a href="#javascript">
                              <i className="fa fa-angle-right"></i>
                              <span>Scrollable</span>
                            </a>
                          </li>
                          <li className="ps-navs-inline">
                            <a href="#javascript">
                              <i className="fa fa-angle-right"></i>
                              <span>Tree View</span>
                            </a>
                          </li>
                          <li className="ps-navs-inline">
                            <a href="#javascript">
                              <i className="fa fa-angle-right"></i>
                              <span>Rating</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#javascript">
                          <FileText />
                          <span> Forms</span>
                        </a>
                      </li>
                      <li>
                        <a href="#javascript">
                          <Server />
                          <span> Tables</span>
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col lg="6" className="nav-md-mt">
                    <div>
                      <h5>Toggle Sub Nav</h5>
                    </div>
                    <ul
                      className="icon-lists border navs-icon default-according style-1"
                      id="accordionoc"
                    >
                      <li>
                        <a href="#javascript">
                          <Box />
                          <span> Base</span>
                        </a>
                      </li>
                      <SubNavToggle />
                    </ul>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Navs;
