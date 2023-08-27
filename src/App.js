// Browser router
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// css
import Styles from "./App.module.css"
// components
import Mainpage from './Components/MainPage/Mainpage';
import Sidebar from './Components/Sidebar/Sidebar';
// functions
import SideButton from './Functions/Sidebar';
// context
import Contextprovider from './context/Contextprovider';



function App() {
  return (
  
    <BrowserRouter>
      <Contextprovider >
        <div className='flex bg-[#1F1D2B] h-[100vh] overflow-hidden '>
          <div className={`w-0 md:w-auto `}>
            <Sidebar ></Sidebar>
          </div>

          <div className={`bg-[#1F1D2B]  ${Styles.Sidebar_Parent}`}>
            { window.screen.width < 768 && SideButton() }
            <Contextprovider>
            <Routes>
              <Route  path='/' element={<Mainpage />}></Route>
            </Routes>  
            </Contextprovider>  
          </div>
        </div>
      </Contextprovider>
    </BrowserRouter>

  );
}

export default App;
