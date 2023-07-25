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
  return <h1>{greeting.greeting}</h1>;
};

export default Greeting;
