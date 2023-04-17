import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Item = {
    id: string;
    name: string;
    completed: boolean;
  }

const useTodo = () => {
    const [currentItem, setCurrentItem] = useState<Item>({id:"", name: "", completed: false});
const [items, setItems] = useState<Item[]>([]);

const saveToLocalStorage = (items: Item[]) => {
  localStorage.setItem('myTodos', JSON.stringify(items));
};

const getFromLocalStorage = () => {
  const items = localStorage.getItem('myTodos');
  if (items) {
    return JSON.parse(items) as Item[];
  }
  return [];
};


useEffect(() => {
  const savedObjects = getFromLocalStorage();
  setItems(savedObjects);
}, []);


const addItem = () => {
if(currentItem.name === "") {
    alert("Please, add the name of todo")
    return;
}

 if(currentItem.id !== "" || currentItem.id !== undefined || currentItem.id !== null) {
  const newArray = [currentItem, ...items]
  setItems(newArray);
  saveToLocalStorage(newArray)
  setCurrentItem({...currentItem, name: ""})
 } 
}


const removeItem = (id: string) => {
  const removeItem = items.filter(x => x.id !== id);
  setItems(removeItem);
  saveToLocalStorage(removeItem)
 }
 
 const updateItem = (id: string) => {
  // find and update the object
  const itemToUpdate = items.filter(x => x.id === id);
  const updatedItem = { ...itemToUpdate[0], completed: !itemToUpdate[0].completed }

  // Replace my updated object in the array of items

  const index = items.findIndex((item: Item) => item.id === id);
    if (index !== -1) {
      const newArray = [...items]; // create a copy of the array
      newArray.splice(index, 1, updatedItem); // replace the old object with the new object
      setItems(newArray);
      saveToLocalStorage(newArray);
    }
 }
    return {
        currentItem, 
        setCurrentItem,
        items,
        addItem,
        removeItem,
        updateItem
    }
}

export default useTodo;