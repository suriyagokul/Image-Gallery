import React from "react";

export default function ShowData({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 p-5 z-0">
      {items.map((item, index) => {
        return (
          <div>
            <h4 className="mb-3 font-[Poppins] text-lg">{item.title}</h4>
            <img
              key={index}
              src={item.img}
              alt="billionaire"
              className="w-full h-full max-h-[340px] rounded-md drop-shadow-md cursor-pointer hover:scale-105 ease-in duration-200"
            />
          </div>
        );
      })}
    </div>
  );
}
