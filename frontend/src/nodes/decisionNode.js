// DecisionNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const DecisionNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data?.condition || '');

    const content = (
        <label>
            Condition:
            <input
                type="text"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                placeholder="e.g., input > 10"
            />
        </label>
    );

    return (
        <BaseNode
            title="Decision"
            inputs={[{ id: `${id}-input`, position: '50%' }]}
            outputs={[
                { id: `${id}-true`, position: '30%' },
                { id: `${id}-false`, position: '70%' },
            ]}
            content={content}
        />
    );
};
