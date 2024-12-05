import React from 'react';
import { useStore } from './store';
import './styles/submit.css'

export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const handleSubmit = async () => {
        // Prepare the payload (nodes and edges)
        console.log('Nodes:', nodes);
        console.log('Edges:', edges);
        const payload = {
            nodes: nodes.map(node => ({
                id: node.id,
                type: node.type,
                data: node.data,
                position: node.position,
            })),
            edges: edges.map(edge => ({
                id: edge.id,
                source: edge.source,
                target: edge.target,
                type: edge.type,
            })),
        };

        try {
            // Make a POST request to the backend API to submit the pipeline
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            // Log the response from the backend
            console.log('Response from backend:', data);

            // Show the result in an alert
            alert(`
        Number of Nodes: ${data.num_nodes}\n
        Number of Edges: ${data.num_edges}\n
        Is Directed Acyclic Graph (DAG): ${data.is_dag ? 'Yes' : 'No'}
      `);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
        }
    };

    return (
        <button onClick={handleSubmit} className="submit-button">
            Submit Pipeline
        </button>
    );
};
