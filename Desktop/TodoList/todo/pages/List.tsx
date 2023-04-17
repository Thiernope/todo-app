import React from 'react'
import { AiFillCheckSquare } from 'react-icons/ai';
import { ImCheckboxUnchecked } from 'react-icons/im';
import { FaTrash } from 'react-icons/fa';

type Item = {
    id: string;
    name: string;
    completed: boolean;
}

type listProp = {
    items: Item[];
    removeItem: (value: string) => void;
    updateItem: (value: string) => void;
}

const List = ({items, removeItem, updateItem}: listProp) => {
  return (
    <>
        {items?.map((item: Item ) => (
        <div key={item.id} className="mb-6 border-solid border-b-2 border-light-blue-500 p-4 w-full lg:w-3/6 h-14 flex justify-between items-center">
        <div className="flex justify-center items-start">
          {item.completed === true ? <AiFillCheckSquare className="text-gray-500 text-3xl cursor-pointer" onClick={() => updateItem(item.id)}/>: <ImCheckboxUnchecked className="text-gray-500 text-2xl cursor-pointer" onClick={() => updateItem(item.id)}/>}
          {item.completed === true ? <h3 className="ml-2 line-through">{ item.name }</h3>: <h3 className="ml-2">{ item.name }</h3>}
        </div>
        <div className="bg-gray-300 hover:bg-red-100 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer" onClick={() => removeItem(item.id)}>
          <FaTrash className="text-red-500 text-xl"/>
        </div>
        </div>
       ))}
    </>
  )
}

export default List