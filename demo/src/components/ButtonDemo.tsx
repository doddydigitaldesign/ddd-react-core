import React, { useState } from "react";
import Button from "../../../components/Button";
import Column from "../../../components/Column";
import Grid from "../../../components/Grid";
import Row from "../../../components/Row";

const ButtonDemo: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <Grid centered>
            <Column>
                <Row>
                    <p>Counter: {count}</p>
                </Row>
            </Column>
            <Row>
                <Column>
                    <Button
                        color={"success"}
                        onClick={() => setCount((val) => val + 1)}
                    >
                        Increment
                    </Button>
                    <Button
                        color={"primary"}
                        onClick={() => setCount((val) => val - 1)}
                    >
                        Decrement
                    </Button>
                </Column>
                <Column>
                    <Button color={"error"} onClick={() => setCount(0)}>
                        Reset
                    </Button>
                </Column>
            </Row>
        </Grid>
    );
};

export default ButtonDemo;
