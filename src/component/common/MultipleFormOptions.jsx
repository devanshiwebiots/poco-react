import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const CommonSelectDropdown = ({ inputClass, options, title, multiple, optionClass }) => {
  return (
    <Col>
      <FormGroup>
        <Label>{title}</Label>
        <Input type="select" className={inputClass }  multiple={multiple}>
          {options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </Input>
      </FormGroup>
    </Col>
  );
};
export default CommonSelectDropdown;
