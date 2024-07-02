import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Data, add } from "../../features/Reducer/todoReducer";
import Styes from "./todoForm.module.css";
import { toast } from "react-toastify";
export default function TodoForm() {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();
  const data = useSelector(Data);
  // console.log(data);
  //adding todo by handling submit
  function submitHandle(e) {
    e.preventDefault();
    setTitle("");
    dispatch(add({title}));
    // console.log(data);
    toast.success("Todo Added Successfully");
  }
  return (
    <>
      <form>
        <div className={Styes.container}>
          <input
            className={Styes.input}
            type="text"
            placeholder="Add To Do"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className={Styes.addbutton} type="submit" onClick={submitHandle}>
            Add
          </button>
        </div>
      </form>
    </>
  );
}
