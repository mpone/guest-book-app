import React, { useEffect, useRef } from 'react';
// import './MessagesList.scss';
import PropTypes from 'prop-types';

export const MessagesList = ({ list }) => {
  const messagesEndRef = useRef(null);

  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // }

  // useEffect(scrollToBottom, []);

  return (
    <article className="messages">
      <ul className="messages__list">
      {list.map(
        message => (
          <li
            // ref={(e) => messagesEndRef(e)}
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
                {message.date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  weekday: 'short',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
              </span>
            )}
          </li>
        )
      )}
      </ul>
    </article>
  );
};

MessagesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      messageId: PropTypes.string,
    }),
  ),
};

MessagesList.defaultProps = {
  list: [],
};
