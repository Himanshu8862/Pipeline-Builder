import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || `output_${id}`);
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  // Define the content specific to OutputNode
  const content = (
    <>
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>
      <label>
        Type:
        <select value={outputType} onChange={(e) => setOutputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </>
  );

  // Render the BaseNode with input handles and dynamic content
  return (
    <BaseNode
      title="Output"
      inputs={[{ id: `${id}-value`, position: '50%' }]}  // Only one input handle at center
      outputs={[]}  // No output handles for OutputNode
      content={content}
    />
  );
};
