// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';
import '../styles/baseNode.css'

const BaseNode = ({ title, inputs, outputs, content }) => {
  return (
    <div className='base-node'>
      <h3>{title}</h3>
      <div>{content}</div>
      {/* Render input handles */}
      {inputs.map((handle, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{ top: handle.position }}
        />
      ))}
      {/* Render output handles */}
      {outputs.map((handle, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{ top: handle.position }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
