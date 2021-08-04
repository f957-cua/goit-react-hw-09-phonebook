import React, { useCallback } from "react";
import "./Filter.css";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_FILTER, appSelectors } from "../../redux/app";

export default function Filter() {
  const value = useSelector(appSelectors.getFilter);

  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      dispatch(CHANGE_FILTER(e.target.value));
    },
    [dispatch]
  );

  return (
    <label className="Filter__label">
      <span className="Filter__text">Find contacts by name</span>
      <input
        className="Filter__input"
        type="text"
        onChange={onChange}
        value={value}
      />
    </label>
  );
}
