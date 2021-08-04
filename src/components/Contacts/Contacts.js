import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Contacts.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { appOperations, appSelectors } from "../../redux/app";

export default function Contacts() {
  const addList = useSelector(appSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onDelete = (id) => dispatch(appOperations.deleteContact(id));
  return (
    <>
      <h2>Contacts</h2>
      <ul className="Contacts__list">
        {addList.map(({ name, number, id }) => {
          return (
            <li key={id} className="Contacts__item">
              <span className="Contacts__text">
                {name}: {number}
              </span>
              <Button
                type="button"
                variant="contained"
                onClick={() => onDelete(id)}
                color="secondary"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
