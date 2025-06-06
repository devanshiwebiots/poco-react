import React, { Fragment } from "react";
import Breadcrumb from "../.././common/breadcrumb/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { getCartTotal } from "../../../redux/service/index";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const history = useNavigate();
  const CountryMenu = ['India', 'South Africa', 'United State', 'Australia'];
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data !== "") {
      alert("You submitted the form and stuff!");
      history(`${process.env.PUBLIC_URL}/ecommerce-app/invoice`);
    } else {
      errors.showMessages();
    }
  };
  const cart = useSelector((content) => content.cartSlice.cart);
  const symbol = useSelector((content) => content.productSlice.symbol);
  return (
    <Fragment>
      <Breadcrumb parent="Apps / ECommerce" title="Checkout" />
      <Container fluid={true}>
        <Row>
          <Col>
            <Card className="checkout">
              <CardHeader>
                <h5>Billing Details</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xl="6" sm="12">
                    <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation" >
                      <Row>
                        <FormGroup className="mb-3 col-sm-6">
                          <Label className="form-label">First Name</Label>
                          <input className="form-control" type="text" name="firstName" {...register('firstName', { required: true })} />
                          <span style={{ color: '#ff5370' }}>{errors.firstName && 'First name is required'}</span>
                        </FormGroup>
                        <FormGroup className="mb-3 col-sm-6">
                          <Label className="form-label">Last Name</Label>
                          <input className="form-control" type="text" name="lastName" {...register('lastName', { required: true })} />
                          <span style={{ color: '#ff5370' }}>{errors.lastName && 'Last name is required'}</span>
                        </FormGroup>
                      </Row>
                      <Row>
                        <FormGroup className="mb-3 col-sm-6">
                          <Label className="form-label">Phone</Label>
                          <input className="form-control" type="text" name="phone" {...register('phone', { required: true })} />
                          <span style={{ color: '#ff5370' }}>{errors.phone && 'Please enter number for phone.'}</span>
                        </FormGroup>
                        <FormGroup className="mb-3 col-sm-6">
                          <Label className="form-label">Email Address</Label>
                          <input className="form-control" type="text" name="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                          <span style={{ color: '#ff5370' }}>{errors.email && 'Please enter proper email address .'}</span>
                        </FormGroup>
                      </Row>
                      <FormGroup className="mb-3">
                        <Label className="form-label">Country</Label>
                        <Input className="form-control" type="select" name="selectMulti">
                          {CountryMenu.map((items, i) =>
                            <option key={i}>{items}</option>
                          )}
                        </Input>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label className="form-label" for="inputAddress5">Address</Label>
                        <input className="form-control" type="text" name="address" {...register('address', { required: true, min: 20, max: 120 })} />
                        <span style={{ color: '#ff5370' }}>{errors.address && 'Please right your address .'}</span>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label className="form-label" for="inputCity">City</Label>
                        <input className="form-control" type="text" name="city" {...register('city', { required: true })} />
                        <span style={{ color: '#ff5370' }}>{errors.city && 'select one city'}</span>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label className="form-label" for="inputAddress2">State Country</Label>
                        <input className="form-control" type="text" name="state" {...register('state', { required: true })} />
                        <span style={{ color: '#ff5370' }}>{errors.state && 'select one state'}</span>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label className="form-label" for="inputAddress6">Postal Code</Label>
                        <input className="form-control" type="text" name="pincode" {...register('pincode', { pattern: /\d+/ })} />
                        <span style={{ color: '#ff5370' }}>{errors.pincode && 'Required integer'}</span>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <div className="form-check">
                          <Input type="checkbox" className="form-control form-check-input checkbox_animated" />
                          <Label className="form-label">Check Me Out</Label>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <div className="text-end">
                          <button type='submit' className="mt-2 pull-right btn btn-primary">Place Order</button> </div>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col xl="6" sm="12">
                    <div className="checkout-details">
                      <div className="order-box">
                        <div className="title-box">
                          <div className="checkbox-title">
                            <h4>Product </h4>
                            <span>Total</span>
                          </div>
                        </div>
                        <ul className="qty">
                          {cart.map((item, index) => {
                            return (
                              <li key={index}>
                                {item.name} × {item.qty}{" "}
                                <span>
                                  {symbol} {item.sum}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                        <ul className="sub-total">
                          <li>
                            Subtotal{" "}
                            <span className="count">
                              {symbol}
                              {getCartTotal(cart)}
                            </span>
                          </li>
                          <li className="shipping-class">
                            Shipping
                            <div className="shopping-checkout-option">
                              <Label className="d-block form-label">
                                <Input
                                  className="checkbox_animated"
                                  type="checkbox"
                                />
                                Option 1
                              </Label>
                              <Label className="d-block form-label">
                                <Input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  defaultChecked
                                />
                                Option 2
                              </Label>
                            </div>
                          </li>
                        </ul>
                        <ul className="sub-total total">
                          <li>
                            Total{" "}
                            <span className="count">
                              {symbol} {getCartTotal(cart)}
                            </span>
                          </li>
                        </ul>
                        <div className="animate-chk">
                          <Row>
                            <Col>
                              <Label className="d-block form-label">
                                <Input
                                  className="radio_animated"
                                  type="radio"
                                  name="rdo-ani"
                                />
                                Check Payments
                              </Label>
                              <Label className="d-block form-label">
                                <Input
                                  className="radio_animated"
                                  type="radio"
                                  name="rdo-ani"
                                />
                                Cash On Delivery
                              </Label>
                              <Label className="d-block form-label">
                                <Input
                                  className="radio_animated"
                                  type="radio"
                                  name="rdo-ani"
                                  defaultChecked
                                />
                                PayPal
                              </Label>
                            </Col>
                          </Row>
                        </div>
                        <div className="text-end mt-2">
                          <Link
                            to={`${process.env.PUBLIC_URL}/ecommerce-app/product`}
                          >
                            <button
                              className="cart-btn-transform btn btn-primary"
                            >
                              continue shopping
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Checkout;
