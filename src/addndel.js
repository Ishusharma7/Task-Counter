import React from "react";
import css from './addittion.module.css'
const Add = (props) => {
const datas = JSON.parse(localStorage.getItem('storedValues')) || [];
  console.log(datas);

    return (
        <>
        <h1>TASKS:</h1>
        <div className={css.up}>
            { datas.map((value, index) => (
                <div
            className={`${css.down} ${value.completed ? css.completed : ""}`}
            key={index}
          >
                    <h2>{value.item}</h2>
                    <p>{value.disc}</p>
                    <div className={css.but}>
                        <button>EDIT</button>
                        <button onClick={() => props.handleDelete(value)}>DELETE</button>
                        <button id="btt" onClick={() => props.handleComp(index)}>
                {value.completed ? "COMPLETE" : "INCOMPLETE"}
              </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Add;
