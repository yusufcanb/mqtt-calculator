import React, {FunctionComponent, PropsWithChildren} from "react";
import "./Button.css";

interface ButtonProps {
    className: string;
    value: any;
    onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = (props: PropsWithChildren<ButtonProps>) => {
    return <button className={props.className} onClick={props.onClick}>{props.value}</button>;
}

export default Button;