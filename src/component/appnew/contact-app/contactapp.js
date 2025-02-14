/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Row, Table } from "reactstrap";
import search from "../../../assets/images/search-not-found.png";
import userDemoPic from "../../../assets/images/user/user.png";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
const Contactapp = (props) => {
  const history = useNavigate();

  const [searchValue, setsearchValue] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  const deleteUser = (userId) => {};

  const handleSearchKeyword = (keyword) => {};

  const redirectUrl = () => {
    history(`${process.env.PUBLIC_URL}/appnew/new-contact`);
  };

  const editContact = (user) => {
    history(`${process.env.PUBLIC_URL}/appnew/edit-contact/${user.id}`);
  };
  return (
    <Fragment>
      <Breadcrumb parent='Apps / User' title='Contact App' />
      <Container fluid={true} className='product-wrapper'>
        <div className='product-grid'>
          <Card>
            <CardBody>
              <Row>
                <Col xl='6'>
                  <Form className='search-form contact-search'>
                    <FormGroup className='mb-0'>
                      <Input className='form-control' type='text' placeholder='search' defaultValue={searchValue} onChange={(e) => handleSearchKeyword(e.target.value)} />
                    </FormGroup>
                  </Form>
                </Col>
                <Col xl='6'>
                  <div className='contact-filter pull-right'>
                    <Button color='primary ms-4' onClick={redirectUrl}>
                      ADD
                    </Button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <div className='product-wrapper-grid'>
            <Row>
              {users.length > 0 ? (
                <Col sm='12'>
                  <Card>
                    <div className='product-box table-responsive contact-table'>
                      <Table>
                        <thead>
                          <tr>
                            <th>
                              <h5 className='mb-0'>Profile</h5>
                            </th>
                            <th>
                              <h5 className='mb-0'>Name</h5>
                            </th>
                            <th>
                              <h5 className='mb-0'>Surname</h5>
                            </th>
                            <th>
                              <h5 className='mb-0'>Mobile</h5>
                            </th>
                            <th colSpan='2'>
                              <h5 className='mb-0'>Age</h5>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img className='img-60 rounded-circle' src={user.avatar ? user.avatar : userDemoPic} alt='#' />
                                </td>
                                <td>
                                  <h6>{user.name}</h6>
                                </td>
                                <td>
                                  <h6>{user.surname}</h6>
                                </td>
                                <td>
                                  <h6>{user.mobile}</h6>
                                </td>
                                <td>
                                  <h6>{user.age}</h6>
                                </td>
                                <td>
                                  <Button color='primary me-2' onClick={() => editContact(user)}>
                                    Edit
                                  </Button>
                                  <Button color='secondary' onClick={() => deleteUser(user.id)}>
                                    Delete
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  </Card>
                </Col>
              ) : (
                <Col sm='12'>
                  <div>
                    <div className='search-not-found text-center'>
                      <div>
                        <img src={search} alt='' className='second-search' />
                        <p className='mb-0'>Sorry, We didn't find any results matching this search</p>
                      </div>
                    </div>
                  </div>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Contactapp;
