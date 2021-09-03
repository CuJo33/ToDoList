import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Item(props) {
  const [clicked, cClicked] = useState(false);

  const [value, cValue] = useState(props.description);

  const handleChange = (e) => {
    e.preventDefault();
    cValue(e.target.value);
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <span
          style={{
            textDecoration: props.completed ? "line-through" : "none",
            color: props.completed ? "red" : "black",
          }}
        >
          {clicked ? (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                if (!value.trim() === props.description) {
                  cClicked((prev) => !prev);
                  return;
                }
                cClicked((prev) => !prev);
                props.editClick(value, props.id);
              }}
            >
              <input onChange={(e) => handleChange(e)} value={value} />
              <Button className="itembuttons" type="submit">
                Update Item
              </Button>
            </Form>
          ) : (
            props.description
          )}
        </span>
      </td>

      <td>
        <Button
          className="itembuttons"
          variant={props.completed ? "warning" : "success"}
          onClick={props.onClick}
        >
          {props.completed ? "Undo" : "Complete"}
        </Button>

        <Button
          className="itembuttons"
          variant="info"
          onClick={() => cClicked((prev) => !prev)}
          // onsubmit of that function to then pass up into redux
        >
          Edit
        </Button>
        <Button
          className="itembuttons"
          variant="danger"
          onClick={props.removeClick}
        >
          Remove
        </Button>
      </td>
    </tr>
  );
}

export default Item;
