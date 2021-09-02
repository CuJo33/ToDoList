import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Add from "./Add";
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
          width="60"
          height="60"
        />
        <Navbar.Brand className="ml-3">To Do List</Navbar.Brand>
      </Navbar>
      <Container>
        <br></br>
        <Add />
        <Links />
        <VisibleItemList />
      </Container>
    </>
  );
};

export default App;
