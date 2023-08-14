import React, { useState } from "react";
import css from "./display.module.css";
import Add from "./addndel";
const Display = () => {
  const [item, setItem] = useState("");
  const [disc, setDisc] = useState("");
  const [storedValues, setStoredValues] = useState(
    JSON.parse(localStorage.getItem("storedValues")) || []
  );

  console.log(storedValues);

  function handleChange(e) {
    setItem(e.target.value);
  }
  function handleDiscChange(e) {
    setDisc(e.target.value);
  }

  const data = { item, disc };

  const handleClick = (e) => {
    e.preventDefault();
    const newData = { ...data, completed: false, time: Date.now() }; 
    const update = [...storedValues, newData];
    localStorage.setItem("storedValues", JSON.stringify(update));
    setStoredValues(update);
    setItem("");
    setDisc("");
  };
  
  const handleDelete = (taskToDelete) => {
    const updata = storedValues.filter(value => value.time !== taskToDelete.time);
    localStorage.setItem('storedValues', JSON.stringify(updata));
    setStoredValues(updata);
}

const handleComp = (index) => {
  const updatedDatas = storedValues.map((data, i) => {
    if (i === index) {
      return {
        ...data,
        completed: !data.completed
      };
    }
    return data;
  });
  localStorage.setItem('storedValues', JSON.stringify(updatedDatas));
  setStoredValues(updatedDatas);
};


  return (
    <>
      <div className={css.main}>
        <h1>TASK TRACKER</h1>
        <input placeholder="What's New" value={item} onChange={handleChange} />
        <input
          placeholder="Discription"
          value={disc}
          onChange={handleDiscChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <Add handleDelete={handleDelete} handleComp={handleComp}/>
    </>
  );
};

export default Display;
