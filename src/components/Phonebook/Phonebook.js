import React, { useState } from "react";
import "./Phonebook.css";
import shortid from "shortid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useSelector, useDispatch } from "react-redux";
import { appOperations, appSelectors } from "../../redux/app";

export default function Phonebook() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addList = useSelector(appSelectors.getContactList);

  const onSubmit = (data) => {
    dispatch(appOperations.addContact(data));
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        alert(`Field ${name} types are not processed `);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValue = name.toLowerCase();

    const ability = addList.contacts.find((contact) =>
      contact.name.toLowerCase().includes(newValue)
    );

    ability !== undefined
      ? alert(`${ability.name} is already in contacts`)
      : onSubmit({ id, name, number });

    reset();
  };

  const reset = () => {
    setId("");
    setName("");
    setNumber("");
  };

  return (
    <>
      <h1 className="Title">Phonebook</h1>
      <form className="Form" onSubmit={handleSubmit}>
        <label className="Label" htmlFor={nameInputId}>
          Name
        </label>
        <input
          className="Input"
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          id={nameInputId}
          required
        />
        <label className="Label" htmlFor={numberInputId}>
          Number
        </label>
        <input
          className="Input"
          type="tel"
          onChange={handleChange}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          id={numberInputId}
          required
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          type="submit"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </>
  );
}
