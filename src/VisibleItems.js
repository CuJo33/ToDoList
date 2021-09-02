import React from "react";
import Table from "react-bootstrap/Table";
import Item from "./Item";
import "./index.css";

function VisibleItems(props) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <Item
              key={item.id}
              {...item}
              onClick={() => props.onItemClick(item.id)}
              removeClick={() => props.removeClick(item.id)}
              editClick={(text, id) => props.editClick(text, id)}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default VisibleItems;
