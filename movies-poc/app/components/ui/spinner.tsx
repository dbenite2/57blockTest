const Spinner = () => (
    <div className="flex flex-1 justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500" data-testid="spinner"></div>
    </div>
);

export default Spinner;