import React , {useContext} from 'react';

// css
import Styles from './Mainpage.module.css'
// components
import Sidebar from '../Sidebar/Sidebar';
// context
import { MyContext } from '../../context/Contextprovider';


const Mainpage = () => {

    const data = useContext(MyContext)


    console.log(data)
  
    return (
        <div className={`${Styles.Main_container}`}>
            <p>{data}</p>
        </div>
    );
};

export default Mainpage;

