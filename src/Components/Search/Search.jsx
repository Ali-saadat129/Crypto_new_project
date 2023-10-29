import React from "react";
// context and data
import { MyContext } from "../../context/Contextprovider";
// Hooks
import { useContext ,useState , useEffect} from "react";
// function
import {FilterData} from "../../Functions/Searchpage"
// Components
import BigTokens from "../../Shared/BigTokens";
import Littletokens from "../../Shared/Littletokens";

export default function Search() {
  const Recive = useContext(MyContext);
  const data = Recive.Data;
  // data to show 
  const [Value , setValue] = useState([])
  // input enter
  const [Input , setInput] = useState("")

  const inputHandler = (event) => {
    setInput(event.target.value)
  }
  
  const FilterHandler = (filterBy , data) => {  
    const filteredData = FilterData(data, filterBy);
    setValue(filteredData);
  }
  useEffect(() => {
    FilterHandler(Input , data);
  },[Input])
  useEffect(() => {
    setValue(data);
    FilterHandler(Input , data);
  },[Input , data])

  const show = () => {
    console.log(Recive.Data)
  }


  return (
    <>
      <header className=" ">
        <div className="flex items-center space-x-2 ">
          <input
            type="text"
            value={Input}
            onChange={(e) => inputHandler(e)}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 flex-1  "
            placeholder="Name of the coin "
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              // Add your button click functionality here
            }}
          >
            Search
          </button>
        </div>
      </header>
      <button onClick={show}>test</button>

        <div className="flex flex-col text-white">
          {window.screen.width < 1024
            ? Value.map((elem) => <Littletokens key={elem.name} data={elem} />)
            : Value.map((elem) => <BigTokens key={elem.name} data={elem} />)}
          {Value.map((elem) => <Littletokens key={elem.name} data={elem} />)}
        </div>
      
     

    </>
  );
}
