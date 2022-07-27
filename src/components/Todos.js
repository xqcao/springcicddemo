import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import * as actions from "../webstore/todo/todo-action";
const defaultTodo = { name: "", detail: "", id: "000" };
const Todos = (props) => {
  const { todoState, addTodo, deleteTodo, updateTodo } = props;
  const [oneTodo, setOneTodo] = useState(defaultTodo);
  const [flag, setFlag] = useState(false);
  const handleClickOnAdd = () => {
    const id = uuidv4();
    addTodo(oneTodo, id);
    setOneTodo(defaultTodo);
  };
  const updateOne = (ee) => {
    setOneTodo(ee);
    setFlag(true);
  };
  const handleClickOnUpdate = () => {
    updateTodo(oneTodo);
    setOneTodo(defaultTodo);
    setFlag(false);
  };

  return (
    <div>
      <h2>Todos</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={oneTodo.name}
          onChange={(e) => setOneTodo({ ...oneTodo, name: e.target.value })}
        />
        <br />
        <label htmlFor="detail">Detail</label>
        <input
          type="text"
          name="detail"
          value={oneTodo.detail}
          onChange={(e) => setOneTodo({ ...oneTodo, detail: e.target.value })}
        />
        <br />
        {!flag ? (
          <button onClick={handleClickOnAdd}>Add</button>
        ) : (
          <button onClick={handleClickOnUpdate}>Update</button>
        )}
      </div>
      {todoState.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoState.map((el, idx) => (
              <tr key={idx + "-" + el.id}>
                <td>{idx + 1}</td>
                <td>{el.name}</td>
                <td>{el.detail}</td>
                <td>
                  <button onClick={() => updateOne(el)}>Update</button>
                  <button onClick={() => deleteTodo(el.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Empty list</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todoState: state.todoState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (x, i) => {
      x.id = i;
      dispatch(actions.add_todo(x));
    },
    deleteTodo: (x) => dispatch(actions.remove_todo(x)),
    updateTodo: (x) => dispatch(actions.update_todo(x)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
