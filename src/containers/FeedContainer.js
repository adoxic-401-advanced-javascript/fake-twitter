import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FeedList from '../components/FeedList';
import Editor from '../components/editor/Editor';
import { getMessages } from '../selectors/userSelectors';
import { makeMessage } from '../actions/userActions';

const FeedContainer = () => {
  const dispatch = useDispatch();
  const messages = useSelector(state => getMessages(state));
  let { userName } = useParams();

  const handleSubmit = (message, name) => {
    dispatch(makeMessage(message, name));
  };
  return (
    <>
      <Editor name={userName} handleSubmit={handleSubmit} />
      <FeedList messages={messages}/>
    </>
  );
};

export default FeedContainer;
