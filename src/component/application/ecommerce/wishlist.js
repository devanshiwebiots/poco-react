import React, { Fragment } from "react";
import Breadcrumb from "../.././common/breadcrumb/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
  Media,
} from "reactstrap";
import { XCircle } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_FROM_WISHLIST } from "../../../redux/wishlist/WishlistSlice";

const Wishlist = (props) => {
  const list = useSelector((content) => content.wishlistSlice.list);
  const symbol = useSelector((content) => content.productSlice.symbol);
  const dispatch = useDispatch();

  const removefromwishlist = (item) => {
    dispatch(REMOVE_FROM_WISHLIST(item.product));
  };
  return (
    <Fragment>
      <Breadcrumb parent="Apps / ECommerce" title="Wishlist" />
      {list.length > 0 && list ? (
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader>
                  <h5>Wishlist</h5>
                </CardHeader>
                <CardBody>
                  <div className="order-history table-responsive wishlist">
                    <Table>
                      <thead>
                        <tr>
                          <th>Prdouct</th>
                          <th>Prdouct Name</th>
                          <th>Price</th>
                          <th>Availability</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="title-orders">
                          <td colSpan={12}>New Orders</td>
                        </tr>
                        {list.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <Media
                                  className="img-fluid img-60"
                                  src={item.product.img}
                                  alt="#"
                                />
                              </td>
                              <td>
                                <div className="product-name">
                                  <a href="#javascript">{item.product.name}</a>
                                </div>
                              </td>
                              <td>
                                {symbol}
                                {item.product.price}
                              </td>
                              <td>{item.product.stock}</td>
                              <td>
                                <a
                                  href="#javascript"
                                  onClick={() => removefromwishlist(item)}
                                >
                                  <XCircle />
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td colSpan={5}>
                            <Link
                              to={`${process.env.PUBLIC_URL}/ecommerce-app/product`}
                            >
                              <Button color="primary">continue shopping</Button>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
         <section className="cart-section section-b-space">
            <Container fluid={true}>
              <Row>
                <Col sm="12">
                  <div>
                    <Col sm="12" className="empty-cart-cls text-center">
                      <img src="" className="img-fluid mb-4" alt="" />
                      <h3>
                        <strong>Your Wishlist is Empty</strong>
                      </h3>
                      <h4>Explore more shortlist some items.</h4>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Container>
         </section>
      )}
    </Fragment>
  );
};

export default Wishlist;
