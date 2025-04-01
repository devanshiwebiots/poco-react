import React, { Fragment } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { images, smallImages } from "../../../data/galleryData";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";

const ImageWithDesc = () => {
  return (
    <Fragment>
      <Breadcrumb parent="Apps / Gallery" title="Gallery Grid With Desc" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>IMAGE GALLERY WITH DESCRIPTION</h5>
              </CardHeader>
              <CardBody>
                <Gallery withCaption>
                  <div className="my-gallery row gallery-with-description">
                    {smallImages.map((smallImg, index) => (
                      <figure className="col-xl-3 col-sm-6" key={index}>
                        <Item original={images[index]} thumbnail={smallImg} width="1600" height="800" caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                          {({ ref, open }) => (
                            <>
                              <img ref={ref} src={smallImg} alt={`Gallery-${index}`} className="img-thumbnail" onClick={open} />
                              <div className="caption">
                                <h4>Portfolio Title</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              </div>
                            </>
                          )}
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

export default ImageWithDesc;
