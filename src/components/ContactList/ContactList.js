import React from "react";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.ulList}>
    {contacts.map(({ name, number, id }) => (
      <li key={id} id={id}>
        {name}: {number}
        <button
          className={css.btnContact}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;