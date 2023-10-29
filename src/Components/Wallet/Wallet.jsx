import React from "react";

// css
import Styles from "./Wallet.module.css";
// components
import Littletokens from "../../Shared/Littletokens";
import BigTokens from "../../Shared/BigTokens";
import WalletNavbar from "./WalletNavbar";
// data - context
import { MyContext } from "../../context/Contextprovider";
import { useContext } from "react";

const Wallet = () => {
  const data2 = useContext(MyContext);
  const data = data2.walletData;

  return (
    <div className="text-white flex items-center flex-col pt-11 overflow-auto">
      <header className="w-full flex justify-center flex-col ">
        <nav className="  flex justify-end">{WalletNavbar}</nav>
        <div className="flex flex-col   items-center w-full ">
          <h2 className={`text-5xl mb-5 ${Styles.header}`}>   Wallet </h2>
          <p className="text-2xl text-lime-400 shadow-sm">YOUR BALANCE</p>
          <h2> 
            <span className="text-2xl px-2 ">$</span>
            <span className="text-2xl text-red-300">830.85</span>
          </h2>
        </div>
        <div className="flex justify-evenly mt-10">
          <button className="max-w-[6rem] min-w-[6rem] flex  items-center  bg-white hover:bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Send
            <span className="ps-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-sign-turn-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5V8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466Z" />
              </svg>
            </span>
          </button>
          <button className="max-w-[6rem] min-w-[6rem] flex  items-center  bg-white hover:bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Receive
            <span className="ps-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-coin"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </span>
          </button>
        </div>
      </header>
      <div className="w-[100%]">
        <div className="flex justify-between px-32 py-10">
          <h2>Tokens</h2>
          <h2 className={`lg:hidden`}>amount</h2>
        </div>
        <div className="flex flex-col w-[100%] overflow-scroll lg:grid lg:grid-cols-3 lg:px-10 justify-center   ">
          {window.screen.width < 1024
            ? data.map((elem) => <Littletokens key={elem.name} data={elem} />)
            : data.map((elem) => <BigTokens key={elem.name} data={elem} />)}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
