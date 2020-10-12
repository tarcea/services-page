import React from 'react';

const Option = (props) => {
  return (
    <div className={props.className}>{props.children}</div>
  );
}

export default Option;
