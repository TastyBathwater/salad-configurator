// src/components/CenterBowl.tsx
import React, { FC } from "react";

const CenterBowl: FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0">
      {/* Button Row */}
      <div className="flex gap-3 mb-6 items-center">
        <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
          Salaatti
        </button>
        <button className="px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors">
          Rahka
        </button>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      {/* Big Bowl */}
      <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner relative">
        <div className="text-center">
          <div className="text-4xl mb-2">🥗</div>
          <div className="text-sm text-gray-500">Your bowl is empty</div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-6 text-center">
        <div className="text-lg font-semibold text-gray-800">100 g / 1,99 €</div>
        <div className="text-sm text-gray-500">500 ml</div>
      </div>
    </div>
  );
};

export default CenterBowl;