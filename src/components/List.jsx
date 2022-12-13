import React from "react";
import Item from "./Item";

export default function List({ list }) {
  if (!list) return null;
  return (
    <>
      {list.map((el) => (
        <Item {...el} key={el.id} />
      ))}
    </>
  );
}
