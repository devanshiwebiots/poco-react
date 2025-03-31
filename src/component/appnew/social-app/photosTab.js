import React, { Fragment } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, Col, Row } from "reactstrap";
import { images, smallImages } from "../../../data/socialimagesData";

const PhotosTab = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody className="my-gallery row gallery-with-description">
              <Gallery>
                {smallImages.map((thumb, index) => (
                  <Col xl="3" sm="6" key={index} className="mb-3">
                    <Item original={images[index]} thumbnail={thumb} width="1600" height="950">
                      {({ ref, open }) => (
                        <figure>
                          <img ref={ref} src={thumb} alt="Gallery" className="img-thumbnail" onClick={open} />
                          <div className="caption">
                            <h4>Portfolio Title</h4>
                            <p>This is sample text describing the image. Click the image to view in full screen.</p>
                          </div>
                        </figure>
                      )}
                    </Item>
                  </Col>
                ))}
              </Gallery>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PhotosTab;
