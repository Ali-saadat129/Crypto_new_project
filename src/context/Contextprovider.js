import React, { Children } from 'react';

// Hooks
import { useState } from 'react';
import { useEffect } from 'react';

// Data
import DataRequest from './Api/Api';
// context


export const MyContext = React.createContext();
const Contextprovider = (props) => {
    
    const [Data , setData] = useState([])


    useEffect( () => {
        const dataReceiver = async () => {
            const data = await DataRequest();
            setData(data)
        }
        dataReceiver()
    }, [] )
    



    return (
        
        <MyContext.Provider value={Data} >
            {props.children }
        </MyContext.Provider>
    );
};

export default Contextprovider;