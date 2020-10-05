import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MessageForm.scss';

export const MessageForm = ({ addMessage }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({
    noName: false,
    noText: false,
  })
  
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() && !text.trim()) {
      setErrors({
        noName: true,
        noText: true,
      });
      return;
    }

    if (!name.trim()) {
      setErrors({ noName: true });
      return;
    }

    if (!text.trim()) {
      setErrors({ noText: true });
      return;
    }
    addMessage(name, text);
    setName('');
    setText('');
  }
  
  return (
    <article className="message-form">
      <form
        className="message-form form"
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <article className="form__inputs">
          {errors.noName && !errors.noText && (
            <span className="form__error">Please enter your name</span>
          )}

          {errors.noText && !errors.noName && (
            <span className="form__error">Please enter your message</span>
          )}

          {errors.noName && errors.noText && (
            <span className="form__error">Please enter your name and message</span>
          )}
  
          <input
            className="form__name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={({ target }) => {
              setName(target.value);
              setErrors({ noName: false });
            }}
          />

          <textarea
            className="form__text"
            placeholder="Message"
            rows="3"
            maxLength="1000"
            value={text}
            onChange={({ target }) => {
              setText(target.value);
              setErrors({ noText: false });
            }}
          />
        </article>

        <button
          className="form__button"
          type="submit"
        >
          Add
          <br />
          comment
        </button>
      </form>
    </article>
  );
};


MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired,
};
