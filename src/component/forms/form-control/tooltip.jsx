import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  Col,
  Form,
  Label,
  InputGroup,
  Row,
  Button,
  FormFeedback,
} from "reactstrap";
const Tooltip = (props) => {
  const [formKey, setFormKey] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();
  const onSubmit = (data) => {
    toast.info("You submitted the form and stuff!");
    reset();
    setFormKey((prev) => prev + 1);
  };

  const Options = [
    { value: "", label: "Choose" },
    { value: "us", label: "..." },
  ];

  return (
    <Fragment>
      <Form key={formKey} className={`needs-validation tooltip-validation`} noValidate='' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='4' className='position-relative mb-5'>
            <Label>{"FirstName"}</Label>
            <input type='text' className={`form-control ${errors.firstName ? "is-invalid" : ""} ${isSubmitted && !errors.firstName ? "is-valid" : ""}`} placeholder='Mark' {...register("firstName", { required: "Please enter your valid name" })} />
            <FormFeedback tooltip valid>
              {"Looks Good"}
            </FormFeedback>
            {errors.firstName && <FormFeedback tooltip>{errors.firstName.message}</FormFeedback>}
          </Col>
          <Col md='4' className='position-relative mb-5'>
            <Label>{"LastName"}</Label>
            <input type='text' className={`form-control ${errors.lastName ? "is-invalid" : ""} ${isSubmitted && !errors.lastName ? "is-valid" : ""}`} placeholder='Otto' {...register("lastName", { required: "Please enter your valid name" })} />
            <FormFeedback tooltip valid>
              {"Looks Good"}
            </FormFeedback>
            {errors.lastName && <FormFeedback tooltip>{errors.lastName.message}</FormFeedback>}
          </Col>
          <Col md='4' className='position-relative mb-5'>
            <Label>{"Username"}</Label>
            <InputGroup className='has-validation'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id='inputGroupPrepend'>
                  @
                </span>
              </div>
              <input type='text' className={`form-control ${errors.username ? "is-invalid" : ""} ${isSubmitted && !errors.username ? "is-valid" : ""}`} placeholder='Otto' {...register("username", { required: "Please choose a unique and valid username." })} />
              {errors.username && <FormFeedback tooltip>{errors.username.message}</FormFeedback>}
            </InputGroup>
          </Col>
          <Col md='6' className='position-relative mb-5'>
            <Label>{"City"}</Label>
            <input type='text' className={`form-control ${errors.city ? "is-invalid" : ""} ${isSubmitted && !errors.city ? "is-valid" : ""}`} {...register("city", { required: "Please provide a valid city" })} />
            {errors.city && <FormFeedback tooltip>{errors.city.message}</FormFeedback>}
          </Col>
          <Col md='3' className='position-relative mb-5'>
            <Label>{"State"}</Label>
            <select className={`form-select ${errors.state ? "is-invalid" : ""} ${isSubmitted && !errors.state ? "is-valid" : ""}`} {...register("state", { required: "Please provide a valid state" })}>
              {Options.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              ))}
            </select>
            {errors.state && <FormFeedback tooltip>{errors.state.message}</FormFeedback>}
          </Col>
          <Col md='3' className='position-relative mb-5'>
            <Label>{"Zip"}</Label>
            <input type='text' className={`form-control ${errors.zip ? "is-invalid" : ""} ${isSubmitted && !errors.zip ? "is-valid" : ""}`} {...register("zip", { required: "Please provide a valid zip" })} />
            {errors.zip && <FormFeedback tooltip>{errors.zip.message}</FormFeedback>}
          </Col>
          <Col xs='12'>
            <Button color='primary'>{"Submit Form"}</Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default Tooltip;
