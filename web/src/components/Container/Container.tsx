import React, {FunctionComponent} from "react";
import "./Container.css";

interface ContainerProps {

}

const Container: FunctionComponent<ContainerProps> = (props: React.PropsWithChildren<ContainerProps>) => {
    return <div className="Container">{props.children}</div>;
}

export default Container;