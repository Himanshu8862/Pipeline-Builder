// InputNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || `input_${id}`);
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const content = (
    <>
      <label>
        Name:
        <input type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} />
      </label>
      <label>
        Type:
        <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </>
  );

  return (
    <BaseNode
      title="Input"
      inputs={[]}
      outputs={[{ id: `${id}-value`, position: '50%' }]}
      content={content}
    />
  );
};
