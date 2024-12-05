import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const DelayNode = ({ id, data }) => {
  const [delayTime, setDelayTime] = useState(data?.delayTime || 1000); // Default delay to 1000ms

  const content = (
    <label>
      Delay Time (ms):
      <input
        type="number"
        value={delayTime}
        onChange={(e) => setDelayTime(Number(e.target.value))}
        min="0"
        step="100"
      />
    </label>
  );

  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-input`, position: '50%' }]}
      outputs={[{ id: `${id}-output`, position: '50%' }]}
      content={content}
    />
  );
};

