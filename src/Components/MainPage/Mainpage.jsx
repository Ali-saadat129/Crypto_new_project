import React , {useContext} from 'react';

// css
import Styles from './Mainpage.module.css'
// components
import Sidebar from '../Sidebar/Sidebar';
// context
import MyContext from '../../context/createcontext';


const Mainpage = () => {
    const test = useContext(MyContext)
    console.log("test")
  
    return (
        <div className={`${Styles.Main_container}`}>
            test skfdcgdsbcdscsvdsrtgfjhgnghjfugm
        </div>
    );
};

export default Mainpage;

