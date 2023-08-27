import React, { Children } from 'react';

// Hooks
import { useState } from 'react';


// context
export const MyContext = React.createContext();

const Contextprovider = (props) => {

    


    const [Data , setdata] = useState("this is test for ")

    return (
        
        <MyContext.Provider value={Data} >
            {props.children }
        </MyContext.Provider>
    );
};

export default Contextprovider;