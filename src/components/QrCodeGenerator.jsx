import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

// Function to generate a random string for uniqueness
const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 10);
};

// Component to generate the QR code
const QrCodeGenerator = () => {
  const [qrValue, setQrValue] = useState('');

  useEffect(() => {
    // Set the desired base URL
    const baseUrl = 'https://att-system.vercel.app/scan';
    
    // Generate a unique URL with random query string
    const uniqueUrl = `${baseUrl}?id=${generateRandomString()}`;
    setQrValue(uniqueUrl);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {/* <h2>Scan the QR Code</h2> */}
      <div style={{ marginTop: '20px' }}>
        {qrValue && <QRCode value={qrValue} />}
      </div>
      {/* <p>QR Code will redirect to: {qrValue}</p> */}
    </div>
  );
};

export default QrCodeGenerator;
