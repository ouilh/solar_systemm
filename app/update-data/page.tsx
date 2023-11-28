// pages/serial_update.tsx
'use client'
import { useEffect, useState } from 'react';

const SerialUpdatePage = () => {
  const [serialData, setSerialData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/serialRead');
        const data = await response.json();
        setSerialData(data.serialData);
      } catch (error) {
        console.error('Error fetching serial data:', error);
      }
    };

    fetchData();

    // Add cleanup if necessary
    return () => {
      // Cleanup logic
    };
  }, []);

  return (
    <div>
      <h1>Serial Data: {serialData}</h1>
    </div>
  );
};

export default SerialUpdatePage;
