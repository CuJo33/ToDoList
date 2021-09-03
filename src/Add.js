import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Clear from "./Clear";
import { connect } from "react-redux";
import { addItem } from "./actions";

const Add = (props) => {
  let input;
  return (
    <>
      <Card className="mb-4 mt-2">
        <Card.Body>
          <label for="Add">
            What would you like to add to your to do list?
          </label>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              props.dispatch(addItem(input.value));
              input.value = "";
            }}
          >
            <input
              ref={(node) => {
                input = node;
              }}
            />
            <Button className="ml-5" type="submit">
              Add Item{" "}
            </Button>
            <Clear />
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default connect()(Add);
