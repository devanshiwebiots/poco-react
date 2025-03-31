import React, { Fragment } from 'react';
import CarouselOne from './CarouselOne';
import CarouselThree from './CarouselThree';
import CarouselTwo from './CarouselTwo';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '../../common/breadcrumb/breadcrumb';

const carouselComponent = () => {
    return (
        <Fragment>
            <Breadcrumbs title="Carousel" parent="Advance" />
            <Container fluid>
            <Row>
                <Col sm="12" xl="6">
                    <Card>
                        <CardHeader>
                            <h5>{"Carousel"}</h5>
                        </CardHeader>
                        <CardBody>
                            <CarouselOne />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" xl="6">
                    <Card>
                        <CardHeader>
                            <h5>{"Uncontrolled Carousel"}</h5>
                        </CardHeader>
                        <CardBody>
                            <CarouselTwo />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" xl="6" className="xl-100">
                    <Card>
                        <CardHeader>
                            <h5>{"Carousel Using a Tag And Classname"}</h5>
                        </CardHeader>
                        <CardBody>
                            <CarouselThree />
                            <div className="btn-showcase" role="group" aria-label="Carousel toggle controls"></div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
        </Fragment>
    );
}

export default carouselComponent;