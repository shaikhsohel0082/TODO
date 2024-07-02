import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  id: 0,
};
//creating slice
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // to add new todo
    add: (state, action) => {
      if (action.payload.title == "") {
        return;
      }
      state.todos.push({
        id: state.id++,
        title: action.payload.title,
        isCompleted: false,
      });
    },
    //toggles status pending/completed
    toggle: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].isCompleted = !state.todos[index].isCompleted;
    },
    //delete existing todo
    delete: (state, action) => {
      console.log(action.payload);
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      console.log(index);
      if (index == -1) {
        return;
      }

      state.todos.splice(index, 1);
    },
    //update todo
    update: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id == action.payload.id
      );
      state.todos[index].title = action.payload.title;
      state.todos[index].isCompleted = false;
    },
  },
});
const todoReducer = todoSlice.reducer;
//exporting reducers,actions,states
const { add } = todoSlice.actions;
const toggle = todoSlice.actions.toggle;
const deleteTodo = todoSlice.actions.delete;
const updateTodo = todoSlice.actions.update;
const Data = (state) => state.todo.todos;
export { add, Data, toggle, deleteTodo, updateTodo };
export default todoReducer;
