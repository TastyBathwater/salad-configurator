import React from 'react';
import useIngredientStore from '../store/useIngredientStore';

export function CenterBowl() {
    const { setBaseType, baseType } = useIngredientStore();

    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0">
            <div className="flex gap-3 mb-6 items-center">
                <button 
                    onClick={() => setBaseType(1)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                        baseType === 1 
                            ? 'bg-green-600 text-white' 
                            : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                >
                    Salaatti
                </button>
                <button 
                    onClick={() => setBaseType(2)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                        baseType === 2 
                            ? 'bg-yellow-600 text-white' 
                            : 'bg-yellow-500 text-white hover:bg-yellow-600'
                    }`}
                >
                    Rahka
                </button>
                <button className="p-2 bg-blue-500 text-white rounded-full">
                    Icon
                </button>
                <button className="p-2 bg-purple-500 text-white rounded-full">
                    Icon
                </button>
            </div>

            <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner relative">
                <div className="text-center">
                    <p className="text-gray-400">Empty Bowl</p>
                    <p className="text-sm text-gray-400 mt-2">
                        Base: {baseType === 1 ? 'Salaatti' : 'Rahka'}
                    </p>
                </div>
            </div>

            <div className="mt-6 text-center">
                <p className="text-lg font-semibold">100 g / 1,99 €</p>
                <p className="text-md">500 ml</p>
            </div>
        </div>
    );
}