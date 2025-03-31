import { Media } from "reactstrap";

export const Image = (props) => {
    return <Media {...props} alt={props.alt ? props.alt : "image"} loading="lazy" />;
};  
