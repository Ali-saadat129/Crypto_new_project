import React from "react";

export default function BigTokens(props) {
  const { data } = props;

  return (
    <div className=" rounded-[10%] w-[80%]  p-5 flex justify-center mb-5  mx-auto flex-col items-center">
      <nav>
        <img
          src={data.image}
          alt={data.name}
          width="80px"
          height="80px"
          className="border rounded-full  p-2 box-border"
        />
      </nav>
        <h2 className="text-[1.5rem] text-2xl ">{data.name}</h2>
        <div>
            <p className="text-lg">{data.current_price} $</p>
        </div>
    </div>
  );
}
