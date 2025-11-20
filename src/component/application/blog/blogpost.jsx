import React, { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Typeahead } from "react-bootstrap-typeahead";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import CommonFileUpload from "../../common/CommonFileUpload";

const BlogPost = (props) => {
  const data = [{ name: "Lifestyle" }, { name: "Travel" }];

  return (
    <Fragment>
      <Breadcrumb parent="Apps / Blog" title="Add Post" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Post Edit</h5>
              </CardHeader>
              <CardBody className="add-post">
                <Form className="row needs-validation">
                  <Col sm="12">
                    <FormGroup>
                      <Label className="form-label" for="validationCustom01">
                        Title:
                      </Label>
                      <Input
                        className="form-control"
                        id="validationCustom01"
                        type="text"
                        placeholder="Post Title"
                        required=""
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </FormGroup>
                    <FormGroup>
                      <Label className="form-label">Type:</Label>
                      <div className="m-checkbox-inline">
                        <Label className="form-label" for="edo-ani">
                          <Input
                            className="radio_animated"
                            id="edo-ani"
                            type="radio"
                            name="rdo-ani"
                          />
                          Text
                        </Label>
                        <Label className="form-label" for="edo-ani1">
                          <Input
                            className="radio_animated"
                            id="edo-ani1"
                            type="radio"
                            name="rdo-ani"
                          />
                          Image
                        </Label>
                        <Label className="form-label" for="edo-ani2">
                          <Input
                            className="radio_animated"
                            id="edo-ani2"
                            type="radio"
                            name="rdo-ani"
                            defaultChecked
                          />
                          Audio
                        </Label>
                        <Label className="form-label" for="edo-ani3">
                          <Input
                            className="radio_animated"
                            id="edo-ani3"
                            type="radio"
                            name="rdo-ani"
                          />
                          Video
                        </Label>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className="col-form-Label">
                        <Label className="form-label">Category:</Label>
                        <Typeahead
                          id="multiple-typeahead"
                          clearButton
                          defaultSelected={data.slice(0, 5)}
                          labelKey="name"
                          multiple
                          options={data}
                          placeholder="Select Your Name...."
                        />
                      </div>
                    </FormGroup>
                    <div className="email-wrapper">
                      <div className="theme-form">
                        <FormGroup>
                          <Label className="form-label">Content:</Label>
                          <CKEditor
                            editor={ClassicEditor}
                            data={"Hello!, This is content."}
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </Col>
                </Form>
                <Form className="dropzone digits">
                  <div className="m-0 dz-message needsclick">
                  <CommonFileUpload />
                  </div>
                </Form>
                <div className="btn-showcase">
                  <Button color="primary btn-pill" type="submit">
                    Post
                  </Button>
                  <Button color="light btn-pill" type="reset">
                    Discard
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BlogPost;
