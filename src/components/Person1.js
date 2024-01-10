//HIGHER ORDER COMPONENT EXAMPLE
import React from 'react';
import UpdatedComponent from './HOC';

function Person1({ money, handleIncrease }) {
  return (
    <div>
      <h2>Kamal is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
}

export default UpdatedComponent(Person1);