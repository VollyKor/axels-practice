import { useState } from 'react';

const TestCounter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <input
                value={counter}
                onChange={(e) => {
                    setCounter(e.target.valueAsNumber);
                }}
                type="number"
            />
            <button onClick={() => setCounter(counter + 1)}>inc</button>
            <button onClick={() => setCounter(counter - 1)}>dec</button>
        </div>
    );
};

export default TestCounter;
