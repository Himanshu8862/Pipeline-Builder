import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || '');

  const content = (
    <label>
      Operation:
      <input
        type="text"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        placeholder="e.g., input * 2"
      />
    </label>
  );

  return (
    <BaseNode
      title="Transform"
      inputs={[{ id: `${id}-input`, position: '50%' }]}
      outputs={[{ id: `${id}-output`, position: '50%' }]}
      content={content}
    />
  );
};