import React from "react";

interface Ingredient {
    id: number;
    name: string;
    categoryId: number;
    price?: number;
}
interface BaseSelectionProps {
    ingredients: Ingredient[];
}
const BaseSelection: React.FC<BaseSelectionProps> = ({ ingredients }) => {
     const baseIngredients = ingredients.filter(
        (ingredient) => ingredient.categoryId === 6
    );
    return (
         <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
            <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
                2
            </div>

            <h2 className="text-lg font-semibold mb-4">Valitse rasia</h2>

            <div className="w-full flex flex-col gap-3">
                {baseIngredients.length > 0 ? (
                    baseIngredients.map((ingredient) => (
                        <div 
                            key={ingredient.id}
                            className="border-b border-gray-600 pb-2 flex justify-between gap-4 items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-colors"
                        >
                            <span className="flex-1">{ingredient.name}</span>
                            {ingredient.price && (
                                <span className="text-green-400">
                                    {ingredient.price.toFixed(2)} €
                                </span>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-400 py-4">
                        No bases available
                    </div>
                )}
            </div>
        </div>
    )
}

export default BaseSelection;