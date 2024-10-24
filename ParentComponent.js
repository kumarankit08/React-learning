import React, {useState} from 'react'

const  ChildComponent  = ({message}) =>  {
    return (
        <div>
            <h3> Child Component: </h3>
            <p> from parent component : {message}</p>

        </div>
    )

}

const  ParentComponent = () => {
    const [parentData, setParentData] = useState("sent data from parent");

    return (
        <div>
            <h1> Parent Component: </h1>
            < ChildComponent message ={parentData} />;
        </div>
    )
}

export default ParentComponent;