
const MaderasSanPedroPreview = () => {
  return (
    <div className="relative w-full h-[400px] border-8 border-gray-200 rounded-xl overflow-hidden shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="w-full h-full mt-8 overflow-hidden">
        <iframe 
          src="https://maderassanpedro.com/" 
          className="w-full h-full scale-[2] origin-top-left pointer-events-none"
          title="Maderas San Pedro Website Preview"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none"></div>
    </div>
  );
};

export default MaderasSanPedroPreview;