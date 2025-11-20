import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import { Accordion } from "reactstrap";
import { AccordionWithIcon, AccordionWithOpenandCloseIcon, AllCloseAccordian, BasicAccordion, PrimaryColorAccordian, SecondaryColorAccordian } from "./accordionComponent";

const AccordionsComponent = () => {
  const [isOpen, setIsOpen] = useState("1");
  const toggle = (id) => (isOpen === id ? setIsOpen("") : setIsOpen(id));
  return (
    <Fragment>
      <Breadcrumb parent='Ui Elements' title='Accordion' />
      <Container fluid={true}>
        <Row>
          <Col sm='12' xl='6'>
            <Accordion open={isOpen} toggle={toggle}>
              <BasicAccordion />
            </Accordion>
          </Col>
          <Col sm='12' xl='6'>
            <Accordion open={isOpen} toggle={toggle}>
              <Card>
                <CardHeader>
                  <h5>AllClose Accordion</h5>
                  <span>
                    {"Using the"} <a href='#javascript'>{"card"}</a> {"component, you can extend the default collapse behavior to create an accordion."}
                  </span>
                </CardHeader>
                <CardBody>
                  <div className='default-according' id='accordionclose'>
                    <AllCloseAccordian />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
          <Col sm='12' xl='6'>
            <Accordion open={isOpen} toggle={toggle}>
              <Card>
                <CardHeader>
                  <h5>Color Accordion</h5>
                  <span>
                    Add <code>{".bg-*"}</code> {"class to add background color with card-header."}
                  </span>
                </CardHeader>
                <CardBody>
                  <div className='default-according' id='accordion1'>
                    <PrimaryColorAccordian />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
          <Col sm='12' xl='6'>
            <Accordion open={isOpen} toggle={toggle}>
              <Card>
                <CardHeader>
                  <h5>Color Accordion</h5>
                  <span>
                    Add <code>{".bg-*"}</code> {"class to add background color with card-header."}
                  </span>
                </CardHeader>
                <CardBody>
                  <div className='default-according' id='accordion2'>
                    <SecondaryColorAccordian />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
          <Col sm='12' xl='6'>
            <Accordion open={isOpen} toggle={toggle}>
              <Card>
                <CardHeader>
                  <h5>Accordion With Icon On Title</h5>
                  <span>
                    Add <code>&lt;i&gt;&lt;/i&gt;</code> {"tag Along with icon class before title text."}
                  </span>
                </CardHeader>
                <CardBody>
                  <div className='default-according'>
                    <AccordionWithIcon />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
          <Col sm='12' xl='6'>
            <Accordion open={isOpen} toggle={toggle}>
              <Card>
                <CardHeader>
                  <h5>Accordion Open Close Icon</h5>
                  <span>
                    Add <code>&lt;i&gt;&lt;/i&gt;</code> {"tag Along with icon class before title text."}
                  </span>
                </CardHeader>
                <CardBody>
                  <div className='default-according style-1' id='accordionoc'>
                    <AccordionWithOpenandCloseIcon />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AccordionsComponent;
