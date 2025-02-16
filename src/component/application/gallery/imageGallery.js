import React, { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import { images, smallImages } from "../../../data/galleryData";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Gallery, Item } from "react-photoswipe-gallery";

const ImageGallery = () => {

  return (
    <Fragment>
      <Breadcrumb parent="Apps / Gallery" title="Gallery Grid" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>IMAGE GALLERY</h5>
              </CardHeader>
              <CardBody>
                <Gallery>
                  <div className="my-gallery row">
                    {smallImages.map((smallImg, index) => (
                      <figure className="col-xl-3 col-sm-6" key={index}>
                        <Item original={images[index]} thumbnail={smallImg} width="1600" height="950">
                          {({ ref, open }) => <img ref={ref} src={smallImg} alt={`Gallery-${index}`} className="img-thumbnail" onClick={open} />}
                        </Item>
                      </figure>
                    ))}
                  </div>
                </Gallery>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ImageGallery;
