import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";

const CkEditor = () => {
  return (
    <Fragment>
      <Breadcrumb parent="App / Editors" title="Ck Editor" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>CK Editor Example</h5>
              </CardHeader>
              <CardBody>
                <CKEditor
                  editor={ClassicEditor}
                  data={"Hello!, This is content."}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CkEditor;
