import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

const Clear = (props) => {
  return (
    <>
      <Button className="ml-5" type="submit">
        Clear List
      </Button>
    </>
  );
};

export default connect()(Clear);
