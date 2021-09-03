import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Add from "./Add";
import Clear from "./Clear";
import Links from "./Links";
import VisibleItemList from "./VisibleItemList";
import Cujo_head from "./cujo_head.jpg";
import "./index.css";

const App = (props) => {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <img
          className="ml-3"
          id="logo"
          src={Cujo_head}
          alt="Creator avatar"
          width="100"
          height="100"
        />
        <Navbar.Brand className="ml-3" id="branding-header">
          presents...
        </Navbar.Brand>
      </Navbar>
      <Container className="mt-5" id="container-box">
        <br />
        <h2 className="ml-3 mb-3">A To Do List</h2>
        <Add />
        <Links />
        <VisibleItemList />
      </Container>
    </>
  );
};

export default App;
