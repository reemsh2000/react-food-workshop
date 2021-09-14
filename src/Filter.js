import React from "react";
import dishes from "./data";

function Filter(props) {
  let { maxPrice, minPrice, category } = props.query;
  return category === "all"
    ? dishes.map((dish, index) =>
        dish.price >= minPrice && dish.price <= maxPrice ? (
          <li key={dish.id} className="card">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span>£{dish.price}</span>
          </li>
        ) : (
          ""
        )
      )
    : dishes.map((dish, index) =>
        dish.price >= minPrice &&
        dish.price <= maxPrice &&
        dish.category === category ? (
          <li key={dish.id} className="card">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span>£{dish.price}</span>
          </li>
        ) : (
          ""
        )
      );
}

export default Filter;
