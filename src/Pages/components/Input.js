import React from 'react';
import './Input.css';

const CustomFloattingInput = ({ label, value, onChange }) => {
  return (
    <div className="floating-input-container">
      <input
        type="text"
        className={`floating-input ${value ? 'has-value' : ''}`}
        value={value}
        onChange={onChange}
      />
      <label className={`floating-label ${value ? 'has-value' : ''}`}>
        {label}
      </label>
    </div>
  );
};

export default CustomFloattingInput;
