import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 10);
};

const QrCodeGenerator = () => {
  const [qrValue, setQrValue] = useState('');

  useEffect(() => {
    const baseUrl = 'https://att-system.netlify.app/scan';
    
    const uniqueUrl = `${baseUrl}?id=${generateRandomString()}`;
    setQrValue(uniqueUrl);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginTop: '20px' }}>
        {qrValue && <QRCode value={qrValue} />}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
