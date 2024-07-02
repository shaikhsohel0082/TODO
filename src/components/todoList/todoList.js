import React from "react";
import { Data } from "../../features/Reducer/todoReducer";
import { useSelector } from "react-redux";
import { toggle } from "../../features/Reducer/todoReducer";
import { deleteTodo } from "../../features/Reducer/todoReducer";
import { useDispatch } from "react-redux";
import Styles from "./todoList.module.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
export default function TodoList() {
  const data = useSelector(Data);
  const dispatch = useDispatch();

  return (
    <div className={Styles.main}>
      {/* if data is not present it will display not found msg */}
      {data.length === 0 && <h1 className={Styles.heading}>No Todo Found</h1>}
      {/* iterating over todos array to print all todos */}
      {data &&
        data.map((item) => (
          <div className={Styles.list} key={item.id}>
            <div className={Styles.title}>
              {/* if title length is greater than 30 then it will display title in two line */}
              {item.title.length >= 20 ? (
                <>
                  {item.title.slice(0, 20)}
                  <br />
                  {item.title.slice(20)}
                </>
              ) : (
                item.title
              )}
            </div>
            <div>
              <button
                className={item.isCompleted ? Styles.completed : Styles.pending}
                onClick={() => dispatch(toggle({ id: item.id }))}
              >
                {item.isCompleted ? "Completed" : "Pending"}
              </button>
            </div>
            <div>
              <NavLink to={`/update/${item.id}`}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828270.png"
                  className={`${Styles.btnImg}`}
                />
              </NavLink>
            </div>
            <div>
              <img
                className={`${Styles.btnImg}`}
                src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                alt="delete"
                onClick={() => {
                  dispatch(deleteTodo(item));
                  toast.error("Todo has been Deleted");
                }}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
