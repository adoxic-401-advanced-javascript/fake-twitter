import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedList.css';

const FeedList = ({ messages }) => {
  const mappedMessages = messages.map((messageObj, index) => {
    return (
      <li key={index}>
        <h3>{messageObj.name}:</h3>
        <p>{messageObj.message}</p>
      </li>
    );
  });

  return (
    <ul className={styles.FeedList}>
      {mappedMessages}
    </ul>
  );
};

FeedList.propTypes = {
  messages: PropTypes.array
};

export default FeedList;
