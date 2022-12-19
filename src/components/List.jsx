import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { servicesListRequest } from "../store/actions/servicesActions";
import Item from "./Item";
import Loader from "./Loader";

export default function List() {
  const { items, loading, error } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  function requestReply() {
    dispatch(servicesListRequest());
  }

  if (error) {
    return (
      <div className="error">
        <span className="error-text">Произошла ошибка</span>
        <button className="error-btn" onClick={requestReply}>
          Повторить запрос на сервер
        </button>
      </div>
    );
  }
  return (
    <>
      {loading ? <Loader /> : items.map((el) => <Item {...el} key={el.id} />)}
    </>
  );
}
