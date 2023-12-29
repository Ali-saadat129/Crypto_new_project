import React, { useContext } from "react";
// images
import trviw from "../../images/traiding-view.png";
import binance from "../../images/binance.png";
import kucoin from "../../images/kjoin.png";
import coinbase from "../../images/coinbase.jpg";
// --------
import bitcoin from "../../images/bitpic.png";
import chart from "../../images/chartpic.webp";
import cow from "../../images/cow.jpg";
import news from "../../images/news.jpg";
import paypal from "../../images/paypal.jpg";

// css
import Styles from "./Mainpage.module.css";
// Hooks
import { useState } from "react";
// context
import { MyContext } from "../../context/Contextprovider";

const Mainpage = () => {
  const data = useContext(MyContext);

  const [headers, setheader] = useState([trviw, binance, coinbase, kucoin]);

  const changeHeader = (Do) => {
    switch (Do) {
      case "Next":
        const newHeader = [...headers];
        newHeader[0] = newHeader[3];
        newHeader[1] = newHeader[0];
        newHeader[2] = newHeader[1];
        newHeader[3] = newHeader[2];
        setheader(newHeader);
      case "Pass":
        const newHeader2 = [...headers];
        newHeader2[0] = newHeader2[1];
        newHeader2[1] = newHeader2[2];
        newHeader2[2] = newHeader2[3];
        newHeader2[3] = newHeader2[0];
        setheader(newHeader2);
    }
  };

  return (
    <div className={`${Styles.Main_container}  text-white p-10 max-w-full`}>
      <div className="h-full min-h-[100vh] ">
        <header className="p-2 overflow-x-scroll pt-5 mb-5">
          <h1 className="mb-10 md:mb-0 ml-6 text-3xl font-bold mt-5">
            Our Partner
          </h1>
          <div className=" flex justify-center items-center relative w-full pl-5">
            <span
              onClick={() => changeHeader("Pass")}
              className="absolute left-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={window.screen.width < 768 ? 30 : 45}
                height={window.screen.width < 768 ? 30 : 45}
                fill="currentColor"
                class="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
              </svg>
            </span>

            <img
              className="rounded-[2rem] m-2"
              width="25%"
              height={window.screen.width < 768 ? "40% " : "25%"}
              src={headers[0]}
            ></img>
            <img
              className="rounded-[2rem] m-2"
              width="50%"
              height={window.screen.width < 768 ? "40% " : "25%"}
              src={headers[1]}
            ></img>
            <img
              className="rounded-[2rem] m-2"
              width="25%"
              height={window.screen.width < 768 ? "40% " : "25%"}
              src={headers[2]}
            ></img>
            <img
              className="rounded-[2rem] m-2"
              width="25%"
              height={window.screen.width < 768 ? "40% " : "25%"}
              src={headers[3]}
            ></img>
            <span
              onClick={() => changeHeader("Next")}
              className="absolute right-0 text-3xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={window.screen.width < 768 ? 30 : 45}
                height={window.screen.width < 768 ? 30 : 45}
                fill="currentColor"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </span>
          </div>
        </header>
        <hr></hr>

        <div className="overflow-x-scroll">
          <div className="mt-5 md:w-full flex flex-wrap justify-center items-center overflow-x-scroll p-2  ">
            <div className=" mr-2 border rounded-xl p-2 w-1/2 md:1/3 lg:w-1/6  ">
              <img
                className="rounded-t-xl"
                width="50%"
                src={bitcoin}
                alt="crypto"
              />
              <h1 className="font-bold">Bitcoin news</h1>
              <p className="font-light text-sm">
                Lorem ipsum dolor, sit amet<br></br> consectetur adipisicing
                elit. Commodi<br></br>
                recusandae unde veritatis dolores.
              </p>
            </div>

            <div className=" mr-2 border rounded-xl p-2 w-1/3 sm:w-1/3 md:1/3 lg:w-1/6 ">
              <img
                className="rounded-t-xl"
                width="50%"
                src={chart}
                alt="crypto"
              />
              <h1 className="font-bold">Bitcoin news</h1>
              <p className="font-light text-sm">
                Lorem ipsum dolor, sit amet<br></br> consectetur adipisicing
                elit. Commodi<br></br>
                recusandae unde veritatis dolores.
              </p>
            </div>

            <div className=" mr-2 border rounded-xl p-2 w-1/3 sm:w-1/3 md:1/3 lg:w-1/6   ">
              <img
                className="rounded-t-xl"
                width="50%"
                src={cow}
                alt="crypto"
              />
              <h1 className="font-bold">Bitcoin news</h1>
              <p className="font-light text-sm">
                Lorem ipsum dolor, sit amet<br></br> consectetur adipisicing
                elit. Commodi<br></br>
                recusandae unde veritatis dolores.
              </p>
            </div>
            <div className=" mr-2 border rounded-xl p-2 w-1/3 sm:w-1/3 md:1/3 lg:w-1/6   ">
              <img
                className="rounded-t-xl"
                width="50%"
                src={news}
                alt="crypto"
              />
              <h1 className="font-bold">Bitcoin news</h1>
              <p className="font-light text-sm">
                Lorem ipsum dolor, sit amet<br></br> consectetur adipisicing
                elit. Commodi<br></br>
                recusandae unde veritatis dolores.
              </p>
            </div>

            <div className=" mr-2 border rounded-xl p-2 w-1/3 sm:w-1/3 md:1/3 lg:w-1/6   ">
              <img
                className="rounded-t-xl"
                width="50%"
                src={paypal}
                alt="crypto"
              />
              <h1 className="font-bold">Bitcoin news</h1>
              <p className="font-light text-sm">
                Lorem ipsum dolor, sit amet<br></br> consectetur adipisicing
                elit. Commodi<br></br>
                recusandae unde veritatis dolores.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default Mainpage;
