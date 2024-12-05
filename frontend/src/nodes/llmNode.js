// LLMNode.js
import BaseNode from './BaseNode';

export const LLMNode = ({ id }) => {
  const content = <div><span>This is an LLM.</span></div>;

  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system`, position: '33%' },
        { id: `${id}-prompt`, position: '66%' },
      ]}
      outputs={[{ id: `${id}-response`, position: '50%' }]}
      content={content}
    />
  );
};

