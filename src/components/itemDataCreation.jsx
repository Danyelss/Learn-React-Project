import React from 'react';

const itemStorageCreation = () =>{

      let selectedItems = Array(10).fill(0);
      let number = Array(1).fill(0);

  let itemsObject  = {
        name : "Carti Selectate",
        id: selectedItems,
        total: number
  }

//let itemsObject_serialized = JSON.stringify(itemsObject);
  
localStorage.setItem('CartiSelectate', JSON.stringify(itemsObject_serialized));
    return(
      <div/>
    )
}
  export default itemStorageCreation;