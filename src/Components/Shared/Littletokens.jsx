import React from "react";

const Littletokens = (props) => {
  const { data } = props;

  return (
    <div className="flex items-center justify-between w-full p-2">
      <div className="flex items-center space-x-6">
        <img
          src={data.image}
          alt={data.name}
          width="60px"
          height="60px"
          className="border rounded-full  p-2 box-border"
        />
        <p className="text-[1.5rem]">{data.name}</p>
      </div>

      <div className="text-[1.5rem]">
        <p>{`${data.current_price} $`}</p>
      </div>
    </div>
  );
};

export default Littletokens;
