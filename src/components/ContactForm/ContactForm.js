import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state});
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label className={css.NameStyle}>
          Name:
          <input
          className={css.inputSlyle}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.numberSlyle}>
          Number:
          <input
          className={css.inputSlyle}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;