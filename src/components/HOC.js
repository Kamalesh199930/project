
import React, { useState } from 'react';

function UpdatedComponent(OriginalComponent) {
  function NewComponent(props) {
    const [money, setMoney] = useState(10);

    const handleIncrease = () => {
      setMoney(money * 2);
    };

    return <OriginalComponent {...props} handleIncrease={handleIncrease} money={money} />;
  }

  return NewComponent;
}

export default UpdatedComponent;