import React from 'react';

const Loader = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      {...props}
    >
      <path fill="#7772FE" d="M20 50h4v10h-4z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin={0}
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#7772FE" d="M30 50h4v10h-4z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#7772FE" d="M40 50h4v10h-4z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Loader;
