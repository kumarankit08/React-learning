import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
    const ChildMethod = () => {
        console.log("hello from child")
    };

    useImperativeHandle(ref, () => ({
        ChildMethod
    }));

    return (
        <div> 
            <h1> Child Component</h1>
        </div>
    );
});

const App = () => {
    const childRef = useRef(); 

    const handleChildMethod = () => {
        childRef.current.ChildMethod();
    };

    return (
        <div>
            <ChildComponent ref={childRef} />
            <button onClick={handleChildMethod}>Call Child Method</button>
        </div>
    );
};

export default App;
