import React from 'react';

const Parameter = ({ parameterType, placeholder, name, onChange }) => {
    return (
        <input
            type={parameterType}
            placeholder={placeholder}
            className="rounded-3xl m-4"
            onChange={(e) => onChange(name, e.target.value)}
        />
    );
};

export default Parameter;
