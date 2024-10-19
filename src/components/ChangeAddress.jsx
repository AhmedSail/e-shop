import React, { useState } from "react";

function ChangeAddress({ setAddress, setIsModelOpen, initialAddress }) {
  const [newAddress, setNewAddress] = useState(initialAddress || "");

  function onClose() {
    setAddress(newAddress);
    setIsModelOpen(false);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
        value={newAddress}
      />
      <div className="flex justify-end space-x-5">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded  transition-all duration-300 hover:bg-gray-800"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded transition-all duration-300 hover:bg-blue-800"
          onClick={onClose}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ChangeAddress;
