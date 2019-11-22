import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeedList from '../components/FeedList';
import Editor from '../components/editor/Editor';
import { getUser, getMessages } from '../selectors/userSelectors';
import { makeMessage } from '../actions/userActions';

const FeedContainer = ({ match }) => {
  const dispatch = useDispatch();
  const name = useSelector(state => getUser(state));
  const messages = useSelector(state => getMessages(state));

  const getUserFrom = (match) => {
    console.log(match.params);
  };

  getUserFrom(match);
  const handleSubmit = message => {
    dispatch(makeMessage(message));
  };
  return (
    <>
      <Editor name={name} handleSubmit={handleSubmit} />
      <FeedList messages={messages}/>
    </>
  );
};

export default FeedContainer;
