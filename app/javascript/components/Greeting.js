import React, { useEffect } from 'react';
import { fetchGreeting } from '../feature/greetingSlice';
import { useDispatch, useSelector } from 'react-redux';

const Greeting = () => {
  const { greeting, isLoading, error } = useSelector(
    (store) => store.greetings,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const handler = () => {
    dispatch(fetchGreeting());
  };

  return (
    <>
      <h1>{greeting.greeting}</h1> <br />
      <button onClick={handler}>Click the button to fetch a greeting</button>
    </>
  );
};

export default Greeting;
