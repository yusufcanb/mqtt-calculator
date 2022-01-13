import React, {useEffect} from 'react';

import Container from "./components/Container";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const CALCULATOR_BUTTONS = [
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, "AC", "="],
];

const App = () => {
    const [, setConnectionStatus] = React.useState(false);
    const [calculationArr, setCalculationArr] = React.useState<Array<any>>([]);


    const client = mqtt.connect(`ws://${process.env.REACT_APP_MQTT_BROKER_HOST}:${process.env.REACT_APP_MQTT_BROKER_PORT}`);
    client.subscribe(process.env.REACT_APP_CALCULATION_RESULT_TOPIC);

    useEffect(() => {
        client.on('connect', () => setConnectionStatus(true));
        client.on('message', (topic: any, payload: any, packet: any) => {
            console.log(payload.toString());
            setCalculationArr([payload.toString()])
        });
    }, []);


    const onCalculationRequest = () => {
        client.publish(process.env.REACT_APP_CALCULATION_REQUEST_TOPIC, calculationArr.join(''));
        setCalculationArr([])
    }

    const handleButtonClick = (btn: string | number) => {
        switch (btn) {
            case "AC":
                setCalculationArr([])
                break
            case "=":
                onCalculationRequest()
                break
            default:
                setCalculationArr(prev => [...prev, btn])
                break
        }
    }

    return (
        <Container>
            <Screen value={calculationArr.join('')}/>
            <ButtonBox>
                {
                    CALCULATOR_BUTTONS.flat().map((btn, i) => (
                        <Button
                            key={i}
                            className={btn === "=" ? "equals" : ""}
                            value={btn}
                            onClick={() => handleButtonClick(btn)}
                        />
                    ))
                }
            </ButtonBox>
        </Container>
    );
}

export default App;