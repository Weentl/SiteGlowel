import React from 'react';

const MaderasSanPedroPreview = () => {
  return (
    <div className="w-full h-full overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <iframe 
        src="https://maderassanpedro.com/"
        className="w-full h-full scrollbar-hide"
        style={{
          transform: 'scale(1)',
          transformOrigin: 'top left',
          border: 'none',
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
        title="Maderas San Pedro Website Preview"
        sandbox="allow-scripts allow-same-origin"
        scrolling="no"
      />
    </div>
  );
};

export default MaderasSanPedroPreview;