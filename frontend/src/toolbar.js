// toolbar.js

import { DraggableNode } from './draggableNode';
import './styles/toolbar.css';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='decision' label='Decision' />
                <DraggableNode type='apiRequest' label='API Request' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='log' label='Log' />
                <DraggableNode type='delay' label='Delay' />
            </div>
    );
};
