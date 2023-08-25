import React from "react";

const FileModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-opacity-75 bg-gray-900 absolute inset-0"></div>
      <div className="bg-white rounded-lg p-6 z-10 relative w-[700px]">
        <button
          className="absolute top-0 right-0 m-2 text-gray-500"
          onClick={onClose}
        >
          <svg
            className="h-10 w-10 text-red-700"
            fill="red"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default FileModal;
