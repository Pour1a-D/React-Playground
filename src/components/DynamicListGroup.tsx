import { useState } from "react";

interface Propes {
  items: string[];
  heading: string;
  // (item:string) => void
  onSelectItem: (item: string) => void;
}

function DynamicListGroup({ items, heading, onSelectItem }: Propes) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const listGroupItem =
    "text-center cursor-pointer rounded w-full h-full p-2 bg-violet-300";
  const active =
    "text-center cursor-pointer rounded w-full h-full p-2 bg-slate-300";

  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center p-4 gap-4">
        <h1 className="text-3xl text-gray-800">{heading}</h1>

        {getMessage()}

        <ul className="bg-slate-200 flex flex-col justify-center items-center rounded-lg px-6 py-4 gap-4">
          {items.map((item, index) => (
            <li
              className={selectedIndex === index ? listGroupItem : active}
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default DynamicListGroup;
