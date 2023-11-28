import React from 'react';

const SolarSystem: React.FC = () => {
  return (
    <div style={{ height: '90vh' }}>
      <iframe
        src="/SolarSystem_Assets/index.html" // Adjust the path based on your project structure
        width="100%"
        height="100%"
        style={{ border: 'none' }} // Optional: Remove iframe border
      ></iframe>
    </div>
  );
};

export default SolarSystem;