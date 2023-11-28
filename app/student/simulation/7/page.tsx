
import React from 'react';

const page: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src="https://sanderblue.github.io/solar-system-threejs/" // Adjust the path based on your project structure
        width="100%"
        height="100%"
        style={{ border: 'none' }} // Optional: Remove iframe border
      ></iframe>
    </div>
  );
};

export default page;
