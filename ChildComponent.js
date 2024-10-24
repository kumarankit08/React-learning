//  passing data from child to parent 

import React, {useState} from 'react';

function ChildComponent ({onChildClick}){
    const handleClick = () => {
        onChildClick(" sent data from child.");
    }
    return(
        <button onClick={handleClick}> Send data to parent </button>
    )
}

function ParentComponent (){
    const [childData, setChildData] = useState('');
    const handleChildClick = (newMessage) => {
        setChildData(newMessage)
    }

    return (
        <div>
            <h1> Parent Component: </h1>
            <p> Message : {childData}</p>
            <ChildComponent onChildClick={handleChildClick} />
        </div>
    )
}

export default ParentComponent;