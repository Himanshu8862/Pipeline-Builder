// APINode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const APINode = ({ id, data }) => {
  const [apiURL, setApiURL] = useState(data?.apiURL || '');

  const content = (
    <label>
      API URL:
      <input
        type="text"
        value={apiURL}
        onChange={(e) => setApiURL(e.target.value)}
        placeholder="https://api.example.com"
      />
    </label>
  );

  return (
    <BaseNode
      title="API Request"
      inputs={[{ id: `${id}-input`, position: '50%' }]}
      outputs={[{ id: `${id}-response`, position: '50%' }]}
      content={content}
    />
  );
};
