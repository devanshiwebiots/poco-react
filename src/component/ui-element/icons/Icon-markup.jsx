import React from 'react';
import { toast } from 'react-toastify';
import {Container,Row,Button,FormGroup,Label,Input} from 'reactstrap'
import FeatherComponent from '../../common/featherComponent';
const IconMarkUp = props => {

    const closeIconContainer = () => {
         document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'none';
        
    }

    if (props.itag !== '' && props.icons !== '') {
        document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'block';
    }

    return (
        <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div" >
            <Container fluid={true}>
                <Row>
                    <div className="icon-popup">
                        <div className="close-icon" onClick={() => closeIconContainer()}>
                            <i className="icofont icofont-close"></i>
                        </div>
                        <div className="icon-first">
                            {props.icons.feathericon ? 
                            <FeatherComponent dataFeather={props.icons.feathericon} tag={props.icons.feathericon}></FeatherComponent>
                            :
                            <i id="icon_main" className={props.icons.icon}></i>
                            }
                            </div>
                        <div className="icon-class">
                            <Label className="icon-title"></Label>
                            <span id="fclass1"></span>
                        </div>
                        <div className="icon-last icon-last">
                            <Label className="icon-title">Markup</Label>
                            <div className="d-flex">
                                <FormGroup className='form-group'>
                                    <Input type="text" className="inp-val form-control m-r-10" defaultValue={props.itag.iTag} id="input_copy" />
                                    <Button
                                        color='primary'
                                        className='notification'
                                        onClick={() => {
                                            const copyText = document.getElementById("input_copy").value;
                                            navigator.clipboard
                                            .writeText(copyText)
                                            .then(() => {
                                                toast.success("Copied", {
                                                position: "bottom-right",
                                                });
                                            })
                                            .catch(() => {
                                                toast.error("Failed to copy!", {
                                                position: "bottom-right",
                                                });
                                            });
                                        }}
                                        >
                                        Copy text
                                    </Button>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default IconMarkUp;