const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => (
  <div className="w-full flex flex-row justify-center items-center">
    <div className="flex items-center justify-between mt-4 gap-2">
      <button
        className="px-4 py-1 text-sm font-medium text-white bg-gray-500 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-3 py-1 text-sm font-medium rounded ${
              currentPage === i + 1
                ? "bg-blue-900 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        className="px-4 py-1 text-sm font-medium text-white bg-gray-500 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  </div>
);

export default Pagination;
