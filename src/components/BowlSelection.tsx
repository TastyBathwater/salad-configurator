import React from 'react';
import type { Bowl } from '../types/';
import useIngredientStore from '../store/useIngredientStore';

interface BowlSelectionProps {
    bowls: Bowl[];
}

const BowlSelection: React.FC<BowlSelectionProps> = ({ bowls }) => {
    const { setBowl, selectedBowl } = useIngredientStore();

    return (
        <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
            <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
                1
            </div>

            <h2 className="text-lg font-semibold mb-4">Valitse koko</h2>

            <div className="w-full flex flex-col gap-3">
                {bowls.length > 0 ? (
                    bowls.map((bowl) => (
                        <div 
                            key={bowl.id}
                            onClick={() => setBowl(bowl)}
                            className={`border-b border-gray-600 pb-2 flex justify-between gap-4 items-center cursor-pointer p-2 rounded transition-colors ${
                                selectedBowl?.id === bowl.id 
                                    ? 'bg-green-600 hover:bg-green-700' 
                                    : 'hover:bg-gray-700'
                            }`}
                        >
                            <span className="flex-1">{bowl.name}</span>
                            <span className="text-green-400">
                                {bowl.volume}ml
                            </span>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-400 py-4">
                        No bowls available for this base type
                    </div>
                )}
            </div>
            
            {selectedBowl && (
                <div className="mt-4 p-2 bg-green-800 rounded text-sm w-full text-center">
                    Selected: {selectedBowl.name}
                </div>
            )}
        </div>
    );
}

export default BowlSelection;