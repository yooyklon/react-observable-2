import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Details({ list }) {
  const { id } = useParams();
  const current = list.find((el) => el.id === +id);
  console.log(current);

  return (
    <div className="details">
      <div className="details-name">
        <span className="details-label">Услуга:</span> {current.name}
      </div>
      <div className="details-price">
        <span className="details-label">Цена:</span> {current.price}
      </div>
      <Link to="/" className="redirect">
        Вернуться назад
      </Link>
    </div>
  );
}
