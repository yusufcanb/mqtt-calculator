import React, {FunctionComponent, PropsWithChildren} from "react";
import "./ButtonBox.css";

interface ButtonBoxProps {

}

const ButtonBox: FunctionComponent<ButtonBoxProps> = (props: PropsWithChildren<ButtonBoxProps>) => {
    return <div className="ButtonBox">{props.children}</div>;
}

export default ButtonBox;