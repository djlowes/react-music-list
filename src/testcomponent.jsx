import React from 'react';

export default function TestComponent(props) {
  const { headline, count, showCount } = props;
  return (
    <div>
      <h1>{headline}</h1>
      { showCount ? <p>{count}</p> : null}
    </div>
  );
}
