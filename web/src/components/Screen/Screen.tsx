import React, {FunctionComponent, PropsWithChildren} from "react";
import "./Screen.css";

interface ScreenProps {
    value: string;
}

const Screen: FunctionComponent<ScreenProps> = (props: PropsWithChildren<ScreenProps>) => {
    return <h1 className="Screen">
        {props.value}
    </h1>;
}

export default Screen;