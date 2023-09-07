// Browser router
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// css
import Styles from "./App.module.css";
// components
import Mainpage from "./Components/MainPage/Mainpage";
import Sidebar from "./Components/Sidebar/Sidebar";
import Wallet from "./Components/Wallet/Wallet";
// functions
import SideButton from "./Functions/Sidebar";
// context
import Contextprovider from "./context/Contextprovider";
// Hooks
import { useRef } from "react";
import { useState } from "react";

function App() {
  const element = useRef();

  const [show, setshow] = useState(false);

  return (
    <BrowserRouter>
      <Contextprovider>
        <div
          className={`bg-[#1F1D2B] h-[100vh] overflow-hidden grid md:grid-cols-[2fr_6fr] lg:grid-cols-[1fr_6fr] grid-cols-[1fr_5fr] ${
            !show && window.screen.width < 768
              ? "grid-cols-[50px_5fr]"
              : "grid-cols-[1fr_5fr]"
          }  `}
        >
          <div className={``}>
            <nav className={``} onClick={() => setshow(!show)}>      
              {window.screen.width < 768 && SideButton()}
            </nav>
            <nav
              className={`ease-in duration-200${
                !show && window.screen.width < 768 && " translate-x-[-200%] "
              }`}
              ref={element}
            >
              <Sidebar />
            </nav>
          </div>

          <div
            className={`bg-[#1F1D2B] p-4 ${
              show && window.screen.width < 768 && "blur"
            } ${Styles.Sidebar_Parent}`}
          >
            <Contextprovider>
              <Routes>
                <Route path="/" element={<Mainpage />}></Route>
                <Route path="/wallet" element={<Wallet />} ></Route>
              </Routes>
            </Contextprovider>
          </div>
        </div>
      </Contextprovider>
    </BrowserRouter>
  );
}

export default App;
