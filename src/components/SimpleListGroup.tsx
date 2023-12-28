import { useState } from "react";

function SimpleListGroup() {
  let items = ["Tehran", "Newyork", "London"];

  // let selectedIndex = 0;
  // Hook
  // const arr = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const listGroupItem =
    "text-center cursor-pointer w-full h-full p-2 bg-violet-300";
  const active = "text-center cursor-pointer w-full h-full p-2 bg-slate-400";

  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center p-4 gap-4">
        <h1 className="text-3xl text-gray-800">My List</h1>

        {getMessage()}

        <ul className="bg-slate-300 flex flex-col justify-center items-center p-4 gap-4">
          {items.map((item, index) => (
            <li
              className={selectedIndex === index ? listGroupItem : active}
              key={item}
              onClick={() => setSelectedIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default SimpleListGroup;
