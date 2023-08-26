import React, { Children } from 'react';

// context
import MyContext from './createcontext';

const Contextprovider = ({Children}) => {
    const data="test"
    return (
        <MyContext.Provider value={data} >
            {Children}
        </MyContext.Provider>
    );
};

export default Contextprovider;