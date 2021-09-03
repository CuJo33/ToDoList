import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

const Clear = (props) => {
  return (
    <>
      <Button id="clear-button" type="submit">
        Clear List
      </Button>
    </>
  );
};

export default connect()(Clear);
