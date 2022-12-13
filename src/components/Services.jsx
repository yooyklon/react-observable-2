import React from "react";
import List from "./List";

export default function Services({ list }) {
  return (
    <div className="services">
      <List list={list} />
    </div>
  );
}
