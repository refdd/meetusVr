const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-figma-wash">
      <div className="relative">
        <div className="w-20 h-20 border-bsSecondary border-2 rounded-full shadow-card" />
        <div className="w-20 h-20 border-bsPrimary border-t-2 animate-spin rounded-full absolute left-0 top-0" />
        <div className="sr-only">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
