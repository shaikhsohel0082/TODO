import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Data } from "../../features/Reducer/todoReducer";
import { updateTodo } from "../../features/Reducer/todoReducer";
import { useParams } from "react-router-dom";
import Styes from "./todoForm.module.css";
import { toast } from "react-toastify";
export default function UpdateForm() {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();
  const data = useSelector(Data);

  const { id } = useParams();

  const update = data.filter((item) => item.id == id);
  useEffect(() => {
    
    setTitle(update[0].title);
  }, [id]);
  function submitHandle(e) {
    e.preventDefault();
    setTitle("");
    dispatch(updateTodo({ id, title }));
    console.log(data);
    toast.success("Todo Updated Successfully");
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
          <button
            className={Styes.addbutton}
            type="submit"
            onClick={submitHandle}
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}
