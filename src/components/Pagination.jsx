import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-slate-100 py-3 border-t-2 border-t-gray-300">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}  // Use handlePageChange
            className="border-2 border-gray-400 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}  // Use handlePageChange
            className="border-2 border-gray-400 bg-blue-500 hover:bg-blue-600 text-white  py-1 px-4 rounded-md"
          >
            Next
          </button>
        )}
        <p className="font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
