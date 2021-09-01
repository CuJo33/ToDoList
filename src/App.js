import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Add from "./Add";
import Links from "./Links";
import VisibleItemList from "./VisibleItemList";

const App = (props) => {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Navbar.Brand>To Do List</Navbar.Brand>
      </Navbar>
      <Container>
        <Add />
        <Links />
        <VisibleItemList />
      </Container>
    </>
  );
};

export default App;
