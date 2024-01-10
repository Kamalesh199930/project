//HIGHER ORDER COMPONENT EXAMPLE
import React from 'react';
import UpdatedComponent from './HOC';

function Person2({ money, handleIncrease }) {
  return (
    <div>
      <h2>Mega Offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
}

export default UpdatedComponent(Person2);