import React from "react";

function Modal({ children, isModelOpen, setIsModelOpen }) {
  if (!isModelOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-3xl"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
