import React, { useEffect, useState } from 'react';

const AdSwitcher = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const src = ["auditing.jpg", "startup.jpg", "New-Business-Tax.jpg"];
  const duration = 4000; // 4 seconds

  useEffect(() => {
    const switchAd = () => {
      setCurrentAd((prevAd) => (prevAd + 1) % src.length);
    };
    const interval = setInterval(switchAd, duration);
    return () => clearInterval(interval);
  }, [src.length]);

  return (
    <div className="center-container">
    <button 
      // onClick={() => window.location.href = '#'} 
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit', textDecoration: 'none', justifyContent: 'center',alignItems:'center' }}
    >
      <img src={src[currentAd]}  alt="Ad" style={{ width: '665px', height:'250px',display:'flex',alignItems:'center' }} />
    </button>
    </div>
  );
};

export default AdSwitcher;
