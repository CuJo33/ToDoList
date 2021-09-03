import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Clear from "./Clear";
import { connect } from "react-redux";
import { addItem } from "./actions";
import { clearItem } from "./actions";

const Add = (props) => {
  let input;
  return (
    <>
      <Card className="mb-4 mt-2">
        <Card.Body>
          <div className="row">
            <div className="col">
              <label htmlFor="Add">
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
                  className="mb-2"
                  ref={(node) => {
                    input = node;
                  }}
                />
                <Button className="add-button" type="submit">
                  Add Item{" "}
                </Button>
              </Form>
            </div>
            <div className="col">
              <label id="clearlistlabel" htmlFor="Clear">
                Clear all Items from list
              </label>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  props.dispatch(clearItem(input.value));
                }}
              >
                <Clear />
              </Form>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default connect()(Add);
