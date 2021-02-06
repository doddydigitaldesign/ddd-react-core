[![CI](https://github.com/doddydigitaldesign/ddd-react-core/workflows/CI/badge.svg)](https://github.com/doddydigitaldesign/ddd-react-core/actions?query=workflow%3ACI)

# ddd-react-core

**A React component library by Doddy Digital Design**

### Demo / Docs

[Visit page](https://doddydigitaldesign.github.io/ddd-react-core/)

### Install

```sh
npm i ddd-react-core
```

### Use

```tsx
import { Button } from "ddd-react-core";
import { useState } from "react";
export const Counter = (props: Props) => {
    const [count, setCount] = useState(0);

    return (
        <Grid>
            <Row>
                <Button onClick={() => setCount((val) => val + 1)}>
                    Increment
                </Button>
                <Text type={"numeric"}>{count}</Text>
            </Row>
        </Grid>
    );
};
```

### Run demo locally

1. Clone the repo:

```sh
   git clone https://github.com/doddydigitaldesign/ddd-react-core.git
```

2. Change working directory:

```sh
cd ddd-react-core
```

3. Install dependencies:

```sh
npm ci
```

4. Run demo in a new browser tab:

```sh
npm start
```
