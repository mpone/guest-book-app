import React, { useEffect, useRef } from 'react';
import './MessagesList.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

import { LoadingSpinner } from '../LoadingSpinner';

export const MessagesList = ({ list }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [list]);

  return (
    <article className="messages">
      {list.length === 0 && (
        <LoadingSpinner />
      )}
      
      <ul className="messages__list">
        {list.map(
          message => (
            <li
              key={message.messageId}
              className="messages__item"
            >
              <span className="messages__text">
                {message.text}
              </span>

              <span className="messages__name">
                {`From ${message.name}`}
              </span>

              {message.date && (
                <span className="messages__date">
                  { moment(message.date).format('MMM Do, h:mm A') }
                </span>
              )}
            </li>
          )
        )}

        <span ref={messagesEndRef} />
      </ul>
    </article>
  );
};

MessagesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      messageId: PropTypes.number,
      text: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.date,
    }),
  ),
};

MessagesList.defaultProps = {
  list: [],
};
