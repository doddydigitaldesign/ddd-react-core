import React, { useState } from "react";
import Button from "../../../components/Button";
import Column from "../../../components/Column";
import Grid from "../../../components/Grid";
import Row from "../../../components/Row";

const ButtonDemo: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <Grid centered>
            <Row>
                <Column>
                    <p>Counter: {count}</p>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Button
                        color={"success"}
                        onClick={() => setCount((val) => val + 1)}
                    >
                        Increment
                    </Button>
                </Column>
                <Button
                    color={"primary"}
                    onClick={() => setCount((val) => val - 1)}
                >
                    Decrement
                </Button>
                <Button color={"error"} onClick={() => setCount(0)}>
                    Reset
                </Button>
            </Row>
        </Grid>
    );
};

export default ButtonDemo;
