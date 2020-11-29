import React from "react";
import { connect } from "react-redux";

const mapState2Props = state => {
  return { items: state.articles };
};

const ConnectedList = ({ items }) => (
  <ul className="list-group list-group-flush">
    {items.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title} | {el.author}
      </li>
    ))}
  </ul>
);

const List = connect(mapState2Props)(ConnectedList);

export default List;
