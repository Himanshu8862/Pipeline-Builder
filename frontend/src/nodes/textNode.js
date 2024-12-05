import React, { useState, useEffect, useRef } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
    const [variables, setVariables] = useState([]);
    const textAreaRef = useRef(null);

    // Adjusts the textarea size dynamically based on input text
    const handleTextChange = (e) => {
        setCurrText(e.target.value);
    };

    // Function to parse text and extract variables
    const extractVariables = (text) => {
        const regex = /{{\s*([a-zA-Z0-9_]+)\s*}}/g;
        const foundVariables = [];
        let match;

        // Find all matches in the text
        while ((match = regex.exec(text)) !== null) {
            // match[1] is the variable name captured in the regular expression
            foundVariables.push(match[1]);
        }

        return [...new Set(foundVariables)]; // Remove duplicates
    };

    // Automatically adjusts the height of the textarea and extract variables
    useEffect(() => {
        const textarea = textAreaRef.current;
        if (textarea) {
            // Reset height to 'auto' to shrink it, and then set the height to 'scrollHeight' to fit the text
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;

            // Extract variables from the current text input
            const newVariables = extractVariables(currText);
            setVariables(newVariables);
        }
    }, [currText]); // Trigger this effect whenever `currText` changes

    const content = (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
                Text:
                <textarea
                    ref={textAreaRef}
                    value={currText}
                    onChange={handleTextChange}
                    style={{
                        resize: 'none', // Disable the default resize handle
                        width: '100%',
                        minHeight: '50px', // Minimum height of the input box
                        maxHeight: '200px', // Max height limit
                        padding: '10px',
                        backgroundColor: '#333', // Dark background
                        color: '#fff', // Light text
                        border: '1px solid #444', // Dark border
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontFamily: 'Poppins, sans-serif',
                        boxSizing: 'border-box',
                        overflow: 'hidden', // Hide overflow
                    }}
                />
            </label>
        </div>
    );

    // Create an array of handles based on the variables
    const inputHandles = variables.map((variable, index) => ({
        id: `${id}-variable-${variable}`,
        position: `${(index + 1) * (100 / (variables.length + 1))}%`, // Evenly space out the handles
    }));

    return (
        <BaseNode
            title="Text"
            inputs={inputHandles}  // Pass the dynamic handles
            outputs={[{ id: `${id}-output`, position: '50%' }]}
            content={content}
        />
    );
};
