import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const LogNode = ({ id, data }) => {
  const [message, setMessage] = useState(data?.message || '');

  const content = (
    <label>
      Log Message:
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter log message"
      />
    </label>
  );

  return (
    <BaseNode
      title="Log"
      inputs={[{ id: `${id}-input`, position: '50%' }]}
      outputs={[{ id: `${id}-output`, position: '50%' }]}
      content={content}
    />
  );
};
