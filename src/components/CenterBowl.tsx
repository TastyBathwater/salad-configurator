import React from 'react';

export function CenterBowl() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0">
            {/* Button row on top */}
            <div className="flex gap-3 mb-6 items-center">
                <button className="px-4 py-2 bg-green-500 text-white rounded-full">
                    Salaatti
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-full">
                    Rahka
                </button>
                <button className="p-2 bg-blue-500 text-white rounded-full">
                    Icon
                </button>
                <button className="p-2 bg-purple-500 text-white rounded-full">
                    Icon
                </button>
            </div>

            {/* Big Bowl */}
            <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner relative">
                <div className="text-center">
                    <p className="text-gray-400">Empty Bowl</p>
                </div>
            </div>

            {/* Bottom info */}
            <div className="mt-6 text-center">
                <p className="text-lg font-semibold">100 g / 1,99 €</p>
                <p className="text-md">500 ml</p>
            </div>
        </div>
    );
}