import React, { useContext } from "react";

// css
import Styles from "./Mainpage.module.css";
// components
import Sidebar from "../Sidebar/Sidebar";
// context
import { MyContext } from "../../context/Contextprovider";

const Mainpage = () => {
  const data = useContext(MyContext);

  return (
    <div className={`${Styles.Main_container} text-white`}>
      <p>{data}</p>
    </div>
  );
};

export default Mainpage;
